export type OfferId = "self-service" | "managed";

export type InterestValue = "self-service" | "managed" | "unsure";

/**
 * Flip to false to hide dollar amounts and show consultative placeholders
 * without changing pricing card components.
 */
export const showPublicPrices = process.env.NEXT_PUBLIC_SHOW_PRICES !== "false";

export const offers = {
  selfService: {
    id: "self-service" as const,
    label: "Self-Service AI Platform",
    oneLiner: "You operate the agents.",
    title: "You operate the agents.",
    body: "Use AI-assisted workflows to prepare content, manage marketing activities, organize leads, and review performance in one workspace.",
    commercialModel: "Monthly SaaS subscription",
    details: [
      "3 user seats and 5 connected accounts",
      "6 live agents included; 2 in pilot",
      "1,000 AI assists per month",
    ] as const,
    pricingLabel: "Self-Service AI Platform",
    pricingAmount: "From $149/month",
    pricingFallback: "Talk to us",
    pricingAudience: "For teams that want to operate AI agents themselves.",
    mainValue: "AI platform and workflows",
    whoOperates: "Your team",
    setup: "Included kickoff call and guided setup · $0 setup fee",
    approval: "Customer controls actions",
    scope: "Growth plan package below",
    planName: "Growth",
    inclusions: [
      "Shared AI growth workspace",
      "Live agents: Content, Campaigns, Sales & Leads, Email, Analytics, Unified Inbox",
      "Pilot agents: Performance Marketing, WhatsApp",
      "Channels: LinkedIn, Instagram, Facebook, Gmail, Google Analytics 4",
      "WhatsApp Business messaging in pilot",
      "3 user seats",
      "Up to 5 connected accounts",
      "1,000 AI assists per month",
      "Approvals before publish or send",
      "Included onboarding: kickoff call + setup guide",
      "$0 setup fee · month-to-month · cancel with 30 days’ notice",
    ] as const,
    scopedItems: [
      "Extra seats or connected accounts",
      "AI assist overages above 1,000/month",
      "Custom integrations beyond listed channels",
      "Taxes, advertising spend, and third-party messaging fees",
    ] as const,
    scopeNote:
      "Taxes, advertising spend, and third-party messaging or platform fees are excluded unless separately agreed.",
    ctaLabel: "Request Platform Demo",
    exploreLabel: "Explore AI Platform",
    contactInterest: "self-service" as const,
  },
  managed: {
    id: "managed" as const,
    label: "Fully Managed AI Growth",
    oneLiner: "We operate agreed workflows for you.",
    title: "We operate agreed workflows for you.",
    body: "Our team plans, configures, runs, and reviews agreed content, campaign, lead-management, and follow-up activities, with your approval where required.",
    commercialModel: "Monthly managed-services subscription",
    details: [
      "16 posts and 2 campaigns each month",
      "Lead handling and follow-up workflows",
      "Bi-weekly reporting and human oversight",
    ] as const,
    pricingLabel: "Fully Managed AI Growth",
    pricingAmount: "From $799/month",
    pricingFallback: "Talk to us",
    pricingAudience: "For businesses that want our team to operate agreed workflows.",
    mainValue: "Platform plus ongoing managed execution",
    whoOperates: "AIVA Growth team",
    setup: "AIVA Growth configures workflows · $499 one-time setup",
    approval: "Customer approves important actions",
    scope: "Managed Growth monthly package below",
    planName: "Managed Growth",
    inclusions: [
      "Platform access for up to 5 client users",
      "16 approved social posts per month",
      "2 campaign setups or optimizations per month",
      "Lead management for up to 100 new enquiries per month",
      "2 active email follow-up sequences",
      "WhatsApp follow-up support where connected (up to 200 conversation reviews/month)",
      "Up to 8 hours of human review and execution per month",
      "Bi-weekly activity report and one 60-minute monthly review call",
      "$499 one-time setup · 3-month minimum · then month-to-month",
    ] as const,
    scopedItems: [
      "Additional posts, campaigns, or review hours",
      "Extra seats beyond 5 client users",
      "Custom integrations and dedicated staffing",
      "Taxes, advertising spend, and third-party messaging fees",
    ] as const,
    scopeNote:
      "Monthly quantities above are the Managed Growth package. Overages and custom work are quoted separately. Advertising spend and third-party fees stay excluded unless agreed in writing.",
    ctaLabel: "Discuss Managed Services",
    exploreLabel: "Explore Managed Services",
    discussLabel: "Discuss Managed Services",
    contactInterest: "managed" as const,
  },
} as const;

export const interestOptions = [
  { value: "self-service", label: "Platform Demo" },
  { value: "managed", label: "Managed Services" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const helpAreas = [
  {
    id: "content",
    title: "Content",
    detail: "Prepare social posts and content calendars your team can review before publishing.",
  },
  {
    id: "campaigns",
    title: "Campaigns",
    detail: "Plan and manage marketing campaigns on supported channels.",
  },
  {
    id: "leads",
    title: "Leads",
    detail: "Organize incoming enquiries and prepare clearer follow-up steps.",
  },
  {
    id: "follow-ups",
    title: "Follow-ups",
    detail: "Support approved email or WhatsApp follow-up workflows where available.",
  },
  {
    id: "reporting",
    title: "Reporting",
    detail: "Review activity and performance signals before deciding what to do next.",
  },
] as const;

export const pricingComparison = [
  { label: "Starting price", selfService: "From $149/month", managed: "From $799/month" },
  { label: "Who operates it", selfService: "Your team", managed: "AIVA Growth team" },
  {
    label: "Main value",
    selfService: "AI platform and workflows",
    managed: "Platform plus ongoing managed execution",
  },
  {
    label: "Seats & accounts",
    selfService: "3 seats · 5 connected accounts",
    managed: "Up to 5 client users on the platform",
  },
  {
    label: "Included agents",
    selfService: "6 live · 2 pilot",
    managed: "Same platform; AIVA Growth operates agreed workflows",
  },
  {
    label: "Setup",
    selfService: "$0 setup · included kickoff",
    managed: "$499 one-time setup · 3-month minimum",
  },
  {
    label: "Approval",
    selfService: "Customer controls actions",
    managed: "Customer approves important actions",
  },
  {
    label: "Contract",
    selfService: "Month-to-month · 30-day notice",
    managed: "3-month minimum, then month-to-month",
  },
] as const;

export const selfServiceSteps = [
  {
    step: "01",
    title: "Connect supported business accounts.",
    detail: "Link LinkedIn, Instagram, Facebook, Gmail, and GA4 (WhatsApp in pilot).",
  },
  {
    step: "02",
    title: "Configure available agents and workflows.",
    detail: "Turn on included agents, set preferences, and define approval rules.",
  },
  {
    step: "03",
    title: "Run and review marketing activities.",
    detail: "Prepare content, campaigns, leads, and follow-ups, then approve before they go out.",
  },
  {
    step: "04",
    title: "Track results in the platform.",
    detail: "Review activity and performance from your connected accounts.",
  },
] as const;

export const managedSteps = [
  {
    step: "01",
    title: "Tell us about your business and goals.",
    detail: "Share what you want to improve and how marketing and sales work today.",
  },
  {
    step: "02",
    title: "Agree on services, channels, and monthly scope.",
    detail: "Confirm the Managed Growth package quantities, permissions, and approval points.",
  },
  {
    step: "03",
    title: "Our team configures and operates workflows.",
    detail: "AIVA Growth sets up and runs the agreed monthly work on the same platform.",
  },
  {
    step: "04",
    title: "Approve key actions and review reports.",
    detail: "You approve important actions and join the monthly review call.",
  },
] as const;

export const managedServices = [
  {
    title: "Content Management",
    detail: "16 approved social posts per month, prepared and scheduled on agreed channels.",
  },
  {
    title: "Campaign Management",
    detail: "2 campaign setups or optimizations per month on supported channels.",
  },
  {
    title: "Lead Management",
    detail: "Organize and qualify up to 100 new enquiries per month for follow-up.",
  },
  {
    title: "Customer Follow-up",
    detail: "2 active email sequences plus WhatsApp follow-up support where connected.",
  },
  {
    title: "Performance Reporting",
    detail: "Bi-weekly activity report and one 60-minute monthly review call.",
  },
] as const;

export const managedClientResponsibilities = [
  "Provide access, brand assets, and the information needed to run agreed work.",
  "Approve key content and important actions before they go live.",
  "Respond to sales-ready leads and business decisions that only your team can make.",
] as const;

export const managedProcess = ["Discover", "Agree Scope", "Configure", "Operate & Review"] as const;

export const platformScreenshots = [
  {
    id: "overview",
    title: "Overview dashboard",
    caption: "See open tasks, approvals, and recent activity in one place.",
    src: "/product/aiva-overview.jpg",
    alt: "AIVA Growth overview dashboard showing tasks, leads, and approvals",
  },
  {
    id: "agents",
    title: "Agent workspace",
    caption: "Open a specialized agent to prepare marketing or sales work for review.",
    src: "/product/aiva-agents.jpg",
    alt: "AIVA Growth agent workspace with a content draft ready for approval",
  },
  {
    id: "calendar",
    title: "Content calendar",
    caption: "Draft and schedule posts before anyone publishes them.",
    src: "/product/aiva-calendar.jpg",
    alt: "AIVA Growth content calendar with scheduled social posts",
  },
  {
    id: "leads",
    title: "Lead management",
    caption: "Organize enquiries and keep the next follow-up step visible.",
    src: "/product/aiva-leads.jpg",
    alt: "AIVA Growth lead management table with status and next steps",
  },
  {
    id: "inbox",
    title: "Unified inbox",
    caption: "Review customer conversations from supported channels together.",
    src: "/product/aiva-inbox.jpg",
    alt: "AIVA Growth unified inbox with conversation list and suggested reply",
  },
  {
    id: "analytics",
    title: "Analytics",
    caption: "Read performance summaries from connected data sources.",
    src: "/product/aiva-analytics.jpg",
    alt: "AIVA Growth analytics dashboard with traffic and engagement charts",
  },
] as const;

/** @deprecated Prefer platformScreenshots */
export const platformUseCases = platformScreenshots.map(({ title, caption }) => ({ title, caption }));

export const pricingFootnote =
  "Prices shown are for the Growth ($149/month) and Managed Growth ($799/month) packages. Taxes, advertising spend, and third-party messaging or platform fees are separate. Extra seats, AI assists, posts, or review hours can be added.";

export const pricingConfirmation =
  "Advertising spend and third-party messaging fees are excluded unless separately agreed.";

export function offerPrice(offer: typeof offers.selfService | typeof offers.managed): string {
  return showPublicPrices ? offer.pricingAmount : offer.pricingFallback;
}

/** Headline form (“Starting at $799/month”) without duplicating “From”. */
export function startingAtPrice(offer: typeof offers.selfService | typeof offers.managed): string {
  if (!showPublicPrices) {
    return offer.pricingFallback;
  }
  return offer.id === "self-service" ? "Starting at $149/month" : "Starting at $799/month";
}

export function contactHref(interest?: InterestValue): string {
  if (!interest) {
    return "/contact";
  }
  return `/contact?interest=${interest}`;
}

export function interestLabel(value: string): string {
  const match = interestOptions.find((item) => item.value === value);
  return match?.label ?? value;
}

export function parseInterest(value: string | string[] | undefined): InterestValue | "" {
  const raw = Array.isArray(value) ? value[0] : value;
  if (raw === "self-service" || raw === "managed" || raw === "unsure") {
    return raw;
  }
  return "";
}
