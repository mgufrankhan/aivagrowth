export const dashboardTabs = [
  {
    id: "overview",
    label: "Overview",
    intro: "A sample morning view for a fictional workspace called Sample Company.",
    metrics: [
      { label: "Content drafts", value: "12" },
      { label: "Campaigns in review", value: "3" },
      { label: "Leads to qualify", value: "28" },
      { label: "Open conversations", value: "7" },
    ],
    rows: [
      "Content agent prepared a LinkedIn draft. It has not been published.",
      "Campaign agent assembled assets that are waiting for approval.",
      "Inbox agent suggested a reply. It has not been sent.",
    ],
  },
  {
    id: "agents",
    label: "Agents",
    intro: "The nine workspace areas. This list is a map of the product, not a live status board.",
    metrics: [],
    rows: [
      "Content — drafts and calendar",
      "Campaigns — assets waiting for review",
      "Performance — highlights before any ad change",
      "Leads — records still to qualify",
      "WhatsApp — opted-in conversation drafts",
      "Email — campaign copy in edit",
      "Analytics — GA4 summary placeholder",
      "SEO — on-page recommendations still in draft",
      "Inbox — threads assigned to a person",
    ],
  },
  {
    id: "campaigns",
    label: "Campaigns",
    intro: "Sample campaigns. None of these are running, and none represent ad spend.",
    metrics: [
      { label: "In review", value: "2" },
      { label: "Needs assets", value: "1" },
      { label: "Approved to launch", value: "0" },
    ],
    rows: [
      "Sample campaign A — in review — not submitted",
      "Sample campaign B — missing an approved image",
      "Sample campaign C — draft only",
    ],
  },
  {
    id: "leads",
    label: "Leads",
    intro: "Fictional rows used to show the layout. These are not people or companies.",
    metrics: [
      { label: "New", value: "14" },
      { label: "Needs review", value: "9" },
      { label: "Qualified", value: "5" },
    ],
    rows: [
      "Sample lead A — new — source not specified",
      "Sample lead B — needs review — no outreach sent",
      "Sample lead C — qualified — follow-up still unapproved",
    ],
  },
  {
    id: "inbox",
    label: "Inbox",
    intro: "Sample threads. The suggested reply stays a draft until a person sends it.",
    metrics: [
      { label: "Waiting", value: "4" },
      { label: "Suggested reply", value: "2" },
      { label: "Handed to a person", value: "1" },
    ],
    rows: [
      "Sample contact — asked about timing — reply not sent",
      "Sample contact — requested a callback — assigned to a teammate",
      "Sample contact — opt-out — marked do not message",
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    intro: "Sample website visits for a chart layout. These numbers are not measurements.",
    metrics: [
      { label: "Sample visits", value: "810" },
      { label: "Sample engaged", value: "240" },
      { label: "Sample channels", value: "4" },
    ],
    rows: [
      "Sample: more visits arrived from the page labeled Guides.",
      "Sample: the mobile share is a placeholder, not a finding.",
      "Connect GA4 before treating any figure as a website report.",
    ],
  },
] as const;

export type DashboardTabId = (typeof dashboardTabs)[number]["id"];

export const sampleChart = [
  { label: "Mon", value: 40 },
  { label: "Tue", value: 64 },
  { label: "Wed", value: 52 },
  { label: "Thu", value: 80 },
  { label: "Fri", value: 70 },
] as const;
