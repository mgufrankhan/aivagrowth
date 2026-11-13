"use server";

import { headers } from "next/headers";
import { deliverDemoRequest } from "@/lib/delivery";
import { demoFormSchema, type DemoInquiry } from "@/lib/demo-schema";
import { rateLimit } from "@/lib/rate-limit";

export type DemoActionResult =
  | { ok: true; delivery: "delivered" | "local" | "discarded"; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string[] | undefined> };

export async function submitDemoRequest(input: unknown): Promise<DemoActionResult> {
  const limit = rateLimit(`demo:${await clientIp()}`);
  if (!limit.ok) {
    return {
      ok: false,
      message: "Too many inquiries were submitted from this network. Please wait about 15 minutes and try again.",
    };
  }

  const parsed = demoFormSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      message: "Check the highlighted fields and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  if (parsed.data.companyFax.trim() !== "") {
    return { ok: true, delivery: "discarded", message: "Thank you." };
  }

  const inquiry: DemoInquiry = {
    fullName: parsed.data.fullName,
    workEmail: parsed.data.workEmail,
    companyName: parsed.data.companyName,
    website: parsed.data.website,
    businessType: parsed.data.businessType,
    mainChallenge: parsed.data.mainChallenge,
    interestedIn: parsed.data.interestedIn,
    message: parsed.data.message,
    consent: true,
  };

  try {
    const result = await deliverDemoRequest(inquiry);
    if (!result.ok) {
      return result;
    }
    if (result.delivery === "local") {
      return {
        ok: true,
        delivery: "local",
        message:
          "Development only: this inquiry was saved on the local machine. It was not delivered to an email inbox, webhook, or database.",
      };
    }
    return {
      ok: true,
      delivery: "delivered",
      message:
        "Your inquiry was delivered to the configured destination. A response is not automatic. It depends on someone picking it up from that destination.",
    };
  } catch (error) {
    console.error("[demo] unexpected delivery error", error instanceof Error ? error.name : "UnknownError");
    return {
      ok: false,
      message: "The inquiry could not be delivered. Nothing was sent. Please try again later.",
    };
  }
}

async function clientIp(): Promise<string> {
  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return headerList.get("x-real-ip")?.trim() || "unknown";
}
