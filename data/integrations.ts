export const integrationStatuses = ["live", "beta", "planned", "unavailable"] as const;

export type IntegrationStatus = (typeof integrationStatuses)[number];

export type IntegrationId =
  | "linkedin"
  | "instagram"
  | "facebook"
  | "whatsapp"
  | "gmail"
  | "messenger"
  | "ga4"
  | "meta-ads"
  | "google-ads";

export type Integration = {
  id: IntegrationId;
  name: string;
  category: string;
  status: IntegrationStatus;
  note: string;
};

export type IntegrationGroup = {
  id: "social" | "advertising" | "inbox";
  title: string;
  detail: string;
  items: Integration[];
};

/**
 * Channel readiness for public marketing. Update when product status changes.
 */
export const integrationGroups: IntegrationGroup[] = [
  {
    id: "social",
    title: "Social Media",
    detail: "Publishing credentials used by content scheduling.",
    items: [
      {
        id: "instagram",
        name: "Instagram",
        category: "Social Media",
        status: "live",
        note: "Professional account publishing and scheduling.",
      },
      {
        id: "facebook",
        name: "Facebook",
        category: "Social Media",
        status: "live",
        note: "Facebook Page publishing. Messenger is included.",
      },
      {
        id: "linkedin",
        name: "LinkedIn",
        category: "Social Media",
        status: "live",
        note: "Company page credentials for scheduled posts.",
      },
      {
        id: "whatsapp",
        name: "WhatsApp",
        category: "Social Media",
        status: "beta",
        note: "WhatsApp Business messaging for people who opted in. Pilot.",
      },
    ],
  },
  {
    id: "advertising",
    title: "Advertising Platforms",
    detail: "GA4, ads, and account credentials for performance and analytics on AIVA Growth.",
    items: [
      {
        id: "ga4",
        name: "Google Analytics 4",
        category: "Advertising Platforms",
        status: "live",
        note: "Website traffic, behavior, and engagement.",
      },
      {
        id: "meta-ads",
        name: "Meta Ads",
        category: "Advertising Platforms",
        status: "beta",
        note: "Ad account for campaign performance. Advertising spend is separate.",
      },
      {
        id: "google-ads",
        name: "Google Ads",
        category: "Advertising Platforms",
        status: "beta",
        note: "Customer account credentials for search campaigns. Advertising spend is separate.",
      },
    ],
  },
  {
    id: "inbox",
    title: "Inbox",
    detail: "WhatsApp, Instagram, LinkedIn, Messenger, and Gmail conversations in one inbox.",
    items: [
      {
        id: "gmail",
        name: "Gmail",
        category: "Inbox",
        status: "live",
        note: "Email conversations in the unified inbox. Marketing email uses the Email agent separately.",
      },
      {
        id: "whatsapp",
        name: "WhatsApp",
        category: "Inbox",
        status: "beta",
        note: "WhatsApp conversations in the unified inbox. Pilot.",
      },
      {
        id: "instagram",
        name: "Instagram",
        category: "Inbox",
        status: "live",
        note: "Instagram messages in the unified inbox.",
      },
      {
        id: "linkedin",
        name: "LinkedIn",
        category: "Inbox",
        status: "live",
        note: "LinkedIn conversations in the unified inbox.",
      },
      {
        id: "messenger",
        name: "Messenger",
        category: "Inbox",
        status: "live",
        note: "Facebook Messenger conversations in the unified inbox.",
      },
    ],
  },
];

export const integrations: Integration[] = integrationGroups.reduce<Integration[]>((list, group) => {
  for (const item of group.items) {
    if (!list.some((existing) => existing.id === item.id)) {
      list.push(item);
    }
  }
  return list;
}, []);

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
