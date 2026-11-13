export const integrationStatuses = ["live", "beta", "planned", "unavailable"] as const;

export type IntegrationStatus = (typeof integrationStatuses)[number];

export type IntegrationId =
  | "linkedin"
  | "instagram"
  | "facebook"
  | "whatsapp"
  | "gmail"
  | "ga4";

export type Integration = {
  id: IntegrationId;
  name: string;
  category: string;
  status: IntegrationStatus;
  note: string;
};

/**
 * Channel readiness for public marketing. Update when product status changes.
 */
export const integrations: Integration[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    category: "Content publishing",
    status: "live",
    note: "Publish and schedule from the content workspace after an authorized account is connected.",
  },
  {
    id: "instagram",
    name: "Instagram",
    category: "Content and messaging",
    status: "live",
    note: "Content publishing is live. Messaging appears in the unified inbox when the business account is connected.",
  },
  {
    id: "facebook",
    name: "Facebook",
    category: "Content publishing",
    status: "live",
    note: "Publish from the same dashboard once the Page is connected with the required permissions.",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    category: "Messaging",
    status: "beta",
    note: "Pilot for opted-in WhatsApp Business messaging and inbox conversations.",
  },
  {
    id: "gmail",
    name: "Gmail",
    category: "Inbox conversations",
    status: "live",
    note: "Conversation source for the unified inbox. Marketing email campaigns use the Email agent separately.",
  },
  {
    id: "ga4",
    name: "Google Analytics 4",
    category: "Website analytics",
    status: "live",
    note: "Shows traffic, behavior, and engagement after an authorized user connects a property.",
  },
];

export function statusLabel(status: IntegrationStatus): string {
  switch (status) {
    case "live":
      return "Live";
    case "beta":
      return "Pilot";
    case "planned":
      return "Planned";
    case "unavailable":
      return "Unavailable";
    default: {
      const exhaustive: never = status;
      return exhaustive;
    }
  }
}
