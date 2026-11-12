export const integrationStatuses = ["live", "beta", "planned", "unavailable"] as const;

export type IntegrationStatus = (typeof integrationStatuses)[number];

export type Integration = {
  name: string;
  category: string;
  status: IntegrationStatus;
  note: string;
};

/**
 * Edit status when a channel is confirmed live, in beta, still planned, or unavailable.
 * Do not mark a channel live without evidence. These names are text labels, not logos.
 */
export const integrations: Integration[] = [
  {
    name: "LinkedIn",
    category: "Content publishing",
    status: "planned",
    note: "Intended for publishing from the content workspace after an account is connected and permission is granted.",
  },
  {
    name: "Instagram",
    category: "Content and messaging",
    status: "planned",
    note: "Intended for content publishing and, separately, for messaging inside the unified inbox.",
  },
  {
    name: "Facebook",
    category: "Content publishing",
    status: "planned",
    note: "Intended for publishing from the same dashboard, subject to the permissions on the connected account.",
  },
  {
    name: "WhatsApp",
    category: "Messaging",
    status: "planned",
    note: "Intended for opted-in WhatsApp business messaging and for conversations in the unified inbox.",
  },
  {
    name: "Gmail",
    category: "Inbox conversations",
    status: "planned",
    note: "Intended as a conversation source for the unified inbox. It is not described here as the sender for marketing email campaigns.",
  },
  {
    name: "Google Analytics 4",
    category: "Website analytics",
    status: "planned",
    note: "Intended to show traffic, behavior, and engagement after an authorized user connects a property.",
  },
];

export function statusLabel(status: IntegrationStatus): string {
  switch (status) {
    case "live":
      return "Live";
    case "beta":
      return "Beta";
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
