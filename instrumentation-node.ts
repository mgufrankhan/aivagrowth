import { resolveDelivery } from "@/lib/delivery";
import { publishedContactEmail } from "@/lib/form-status";

export function reportProductionConfig() {
  const delivery = resolveDelivery();
  if (delivery.kind === "unconfigured") {
    console.warn(
      "[aivagrowth] FORM_DELIVERY is not set to a working webhook, email, or database destination. The contact form will refuse inquiries instead of reporting success.",
    );
  }

  if (!publishedContactEmail()) {
    console.warn("[aivagrowth] CONTACT_EMAIL is empty. The site will not publish a contact address.");
  }
}
