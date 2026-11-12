import "server-only";

import { resolveDelivery, type DeliveryKind } from "@/lib/delivery";
import type { PublicFormStatus } from "@/lib/public-form";

export type { PublicFormStatus, PublicFormState } from "@/lib/public-form";

export function getPublicFormStatus(): PublicFormStatus {
  const delivery = resolveDelivery();
  return toPublicState(delivery.kind);
}

function toPublicState(kind: DeliveryKind): PublicFormStatus {
  switch (kind) {
    case "webhook":
    case "email":
    case "database":
      return { state: "ready", notice: null };
    case "local":
      return {
        state: "local",
        notice:
          "Development only: inquiries are saved in .data/demo-requests.ndjson on this machine. They are not emailed and are not stored in a database.",
      };
    case "unconfigured":
      return {
        state: "unconfigured",
        notice:
          "This form is not able to deliver inquiries yet. Submitting it will not send your message, and the page will not show a success confirmation.",
      };
    default: {
      const exhaustive: never = kind;
      return exhaustive;
    }
  }
}

export function publishedContactEmail(): string | null {
  const value = process.env.CONTACT_EMAIL?.trim();
  if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return null;
  }
  return value;
}
