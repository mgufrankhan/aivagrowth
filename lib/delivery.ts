import "server-only";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import postgres from "postgres";
import { interestLabel } from "@/data/offers";
import { businessTypeLabel, challengeLabel } from "@/data/form-options";
import type { DemoInquiry } from "@/lib/demo-schema";

export type DeliveryKind = "webhook" | "email" | "database" | "local" | "unconfigured";

export type ResolvedDelivery = {
  kind: DeliveryKind;
};

export type DeliveryResult =
  | { ok: true; delivery: "delivered" | "local" }
  | { ok: false; message: string };

const FAILURE_MESSAGE =
  "The inquiry could not be delivered. Nothing was sent. Please try again later.";

export function resolveDelivery(): ResolvedDelivery {
  const requested = process.env.FORM_DELIVERY?.trim().toLowerCase() ?? "";
  const production = process.env.NODE_ENV === "production";

  if (requested === "" || requested === "local") {
    return { kind: production ? "unconfigured" : "local" };
  }

  switch (requested) {
    case "webhook":
      return { kind: isDeliverableWebhook(process.env.FORM_WEBHOOK_URL) ? "webhook" : "unconfigured" };
    case "email":
      return {
        kind:
          isEmail(process.env.FORM_EMAIL_FROM) &&
          isEmail(process.env.FORM_EMAIL_TO) &&
          Boolean(process.env.RESEND_API_KEY?.trim())
            ? "email"
            : "unconfigured",
      };
    case "database":
      return { kind: isPostgresUrl(process.env.DATABASE_URL) ? "database" : "unconfigured" };
    default:
      return { kind: "unconfigured" };
  }
}

export async function deliverDemoRequest(inquiry: DemoInquiry): Promise<DeliveryResult> {
  const delivery = resolveDelivery();

  switch (delivery.kind) {
    case "webhook":
      return deliverWebhook(inquiry);
    case "email":
      return deliverEmail(inquiry);
    case "database":
      return deliverDatabase(inquiry);
    case "local":
      if (process.env.NODE_ENV === "production") {
        return {
          ok: false,
          message: "This form is not configured to deliver inquiries. Your message was not sent.",
        };
      }
      return deliverLocal(inquiry);
    case "unconfigured":
      return {
        ok: false,
        message: "This form is not configured to deliver inquiries. Your message was not sent.",
      };
    default: {
      const exhaustive: never = delivery.kind;
      return exhaustive;
    }
  }
}

async function deliverWebhook(inquiry: DemoInquiry): Promise<DeliveryResult> {
  const url = process.env.FORM_WEBHOOK_URL?.trim();
  if (!url || !isDeliverableWebhook(url)) {
    return { ok: false, message: FAILURE_MESSAGE };
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-AIVAgrowth-Event": "demo_request",
  };
  const secret = process.env.FORM_WEBHOOK_SECRET?.trim();
  if (secret) {
    headers.Authorization = `Bearer ${secret}`;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({
        type: "aivagrowth.demo_request",
        submittedAt: new Date().toISOString(),
        inquiry: publicInquiry(inquiry),
      }),
      redirect: "error",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error("[demo] webhook delivery failed", response.status);
      return { ok: false, message: FAILURE_MESSAGE };
    }
    return { ok: true, delivery: "delivered" };
  } catch (error) {
    console.error("[demo] webhook delivery failed", errorName(error));
    return { ok: false, message: FAILURE_MESSAGE };
  }
}

async function deliverEmail(inquiry: DemoInquiry): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.FORM_EMAIL_FROM?.trim();
  const to = process.env.FORM_EMAIL_TO?.trim();
  if (!apiKey || !from || !to) {
    return { ok: false, message: FAILURE_MESSAGE };
  }

  const subject = `AIVA Growth inquiry from ${inquiry.companyName}`.replace(/[\r\n]+/g, " ").slice(0, 140);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text: inquiryText(inquiry),
      }),
      redirect: "error",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error("[demo] email delivery failed", response.status);
      return { ok: false, message: FAILURE_MESSAGE };
    }
    return { ok: true, delivery: "delivered" };
  } catch (error) {
    console.error("[demo] email delivery failed", errorName(error));
    return { ok: false, message: FAILURE_MESSAGE };
  }
}

async function deliverDatabase(inquiry: DemoInquiry): Promise<DeliveryResult> {
  const databaseUrl = process.env.DATABASE_URL?.trim();
  if (!databaseUrl || !isPostgresUrl(databaseUrl)) {
    return { ok: false, message: FAILURE_MESSAGE };
  }

  const sql = postgres(databaseUrl, { max: 1, connect_timeout: 10 });
  try {
    await sql`
      insert into demo_requests (
        full_name,
        work_email,
        company_name,
        website,
        business_type,
        main_challenge,
        interested_in,
        message
      ) values (
        ${inquiry.fullName},
        ${inquiry.workEmail},
        ${inquiry.companyName},
        ${inquiry.website || null},
        ${inquiry.businessType || null},
        ${inquiry.mainChallenge},
        ${interestLabel(inquiry.interestedIn)},
        ${inquiry.message || null}
      )
    `;
    return { ok: true, delivery: "delivered" };
  } catch (error) {
    console.error("[demo] database delivery failed", errorName(error));
    return { ok: false, message: FAILURE_MESSAGE };
  } finally {
    await sql.end({ timeout: 5 }).catch(() => undefined);
  }
}

async function deliverLocal(inquiry: DemoInquiry): Promise<DeliveryResult> {
  try {
    const directory = path.join(process.cwd(), ".data");
    await mkdir(directory, { recursive: true });
    const line = `${JSON.stringify({
      ...publicInquiry(inquiry),
      storedAt: new Date().toISOString(),
    })}\n`;
    await appendFile(path.join(directory, "demo-requests.ndjson"), line, "utf8");
    return { ok: true, delivery: "local" };
  } catch (error) {
    console.error("[demo] local delivery failed", errorName(error));
    return { ok: false, message: FAILURE_MESSAGE };
  }
}

function publicInquiry(inquiry: DemoInquiry) {
  return {
    fullName: inquiry.fullName,
    workEmail: inquiry.workEmail,
    companyName: inquiry.companyName,
    website: inquiry.website || null,
    businessType: businessTypeLabel(inquiry.businessType) || null,
    mainChallenge: challengeLabel(inquiry.mainChallenge),
    interestedIn: interestLabel(inquiry.interestedIn),
    message: inquiry.message || null,
    consent: true,
  };
}

function inquiryText(inquiry: DemoInquiry): string {
  const payload = publicInquiry(inquiry);
  return [
    "New AIVA Growth website inquiry",
    "",
    `Name: ${payload.fullName}`,
    `Work email: ${payload.workEmail}`,
    `Company: ${payload.companyName}`,
    `Website: ${payload.website ?? "Not provided"}`,
    `Business type: ${payload.businessType ?? "Not provided"}`,
    `Main challenge: ${payload.mainChallenge}`,
    `Interested in: ${payload.interestedIn}`,
    "",
    "Message:",
    payload.message ?? "Not provided",
  ].join("\n");
}

function isEmail(value: string | undefined): boolean {
  if (!value) {
    return false;
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isPostgresUrl(value: string | undefined): boolean {
  if (!value) {
    return false;
  }
  return /^postgres(ql)?:\/\//.test(value.trim());
}

function isDeliverableWebhook(value: string | undefined): boolean {
  if (!value) {
    return false;
  }
  try {
    const url = new URL(value.trim());
    if (url.protocol === "https:") {
      return true;
    }
    return url.protocol === "http:" && process.env.NODE_ENV !== "production";
  } catch {
    return false;
  }
}

function errorName(error: unknown): string {
  return error instanceof Error ? error.name : "UnknownError";
}
