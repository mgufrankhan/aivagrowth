export type OfferId = "self-service" | "managed";

export type InterestValue = "self-service" | "managed" | "unsure";

/**
 * Flip to false to hide dollar amounts and show consultative placeholders
 * without changing pricing card components.
 */
export const showPublicPrices = process.env.NEXT_PUBLIC_SHOW_PRICES !== "false";

/**
 * TODO (product/commercial confirmation — do not invent answers in public copy):
 * - Which agents are live and included in the $149 offer?
 * - Number of users and connected accounts?
 * - Monthly AI usage or fair-use limits?
 * - Supported social channels and integrations?
 * - Whether onboarding is included?
 * - Managed monthly post, campaign, and reporting quantities?
 * - Supported follow-up channels and human review time?
 * - Setup fee, contract minimum, and cancellation policy?
 * - Whether taxes, ad spend, WhatsApp/email provider charges, and other third-party fees are excluded?
 */

export const offers = {
  selfService: {
    id: "self-service" as const,
    label: "Self-Service AI Platform",
    oneLiner: "You operate the agents.",
    title: "You operate the agents.",
    body: "Use AI-assisted workflows to prepare content, manage marketing activities, organize leads, and review performance. Available features and integrations depend on current product readiness.",
    commercialModel: "Monthly SaaS subscription",
    details: [
      "Your team operates the platform",
      "AI-assisted marketing and sales workflows",
      "Scope confirmed during consultation",
    ] as const,
    pricingLabel: "Self-Service AI Platform",
    pricingAmount: "From $149/month",
    pricingFallback: "Talk to us",
    pricingAudience: "For teams that want to operate AI agents themselves.",
    mainValue: "AI platform and workflows",
    whoOperates: "Your team",
    setup: "Customer-led with agreed onboarding support",
    approval: "Customer controls actions",
    scope: "Confirmed during demo",
    inclusions: [
      "Shared AI growth workspace",
      "Access to available agent workflows",
      "Customer-controlled reviews and approvals",
      "Demo-led onboarding discussion",
    ] as const,
    scopedItems: [
      "Which agents and channels are available for your account",
      "Users, connected accounts, and fair-use limits",
      "Onboarding support level and any setup fees",
      "Integrations that are live versus planned",
    ] as const,
    scopeNote: "Scope and supported integrations confirmed during consultation.",
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
      "AIVA Growth operates agreed workflows",
      "You approve important actions",
      "Scope confirmed in the service proposal",
    ] as const,
    pricingLabel: "Fully Managed AI Growth",
    pricingAmount: "From $799/month",
    pricingFallback: "Talk to us",
    pricingAudience: "For businesses that want our team to operate agreed workflows.",
    mainValue: "Platform plus ongoing managed execution",
    whoOperates: "AIVA Growth team",
    setup: "AIVA Growth configures agreed workflows",
    approval: "Customer approves important actions",
    scope: "Confirmed in service proposal",
    inclusions: [
      "Platform access for agreed workflows",
      "Initial workflow setup and configuration",
      "Ongoing human oversight and execution",
      "Regular review of activities and next steps",
    ] as const,
    scopedItems: [
      "Monthly deliverable quantities and channels",
      "Review cadence and client responsibilities",
      "Human review time and follow-up channels",
      "Contract minimum, setup fees, and cancellation terms",
    ] as const,
    scopeNote:
      "Your monthly deliverables, channels, review cadence, and responsibilities are defined in the service proposal.",
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
    label: "Setup",
    selfService: "Customer-led with agreed onboarding support",
    managed: "AIVA Growth configures agreed workflows",
  },
  {
    label: "Approval",
    selfService: "Customer controls actions",
    managed: "Customer approves important actions",
  },
  {
    label: "Scope",
    selfService: "Confirmed during demo",
    managed: "Confirmed in service proposal",
  },
] as const;

export const selfServiceSteps = [
  {
    step: "01",
    title: "Connect supported business accounts.",
    detail: "Link the channels you are allowed to use, based on what is currently available.",
  },
  {
    step: "02",
    title: "Configure available agents and workflows.",
    detail: "Set preferences, permissions, and review rules for the work you want to run.",
  },
  {
    step: "03",
    title: "Run and review marketing activities.",
    detail: "Use the workspace to prepare content, campaigns, leads, and follow-ups, then approve before they go out.",
  },
  {
    step: "04",
    title: "Track results in the platform.",
    detail: "Review activity and performance signals that your connected accounts provide.",
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
    detail: "Confirm deliverables, permissions, and approval points in a service proposal.",
  },
  {
    step: "03",
    title: "Our team configures and operates workflows.",
    detail: "AIVA Growth sets up and runs the agreed work using the same platform.",
  },
  {
    step: "04",
    title: "Approve key actions and review reports.",
    detail: "You stay informed, approve important actions, and refine the process together.",
  },
] as const;

export const managedServices = [
  {
    title: "Content Management",
    detail: "Prepare and schedule approved marketing content.",
  },
  {
    title: "Campaign Management",
    detail: "Plan and operate agreed campaigns on supported channels.",
  },
  {
    title: "Lead Management",
    detail: "Organize and qualify incoming enquiries for follow-up.",
  },
  {
    title: "Customer Follow-up",
    detail: "Configure and manage approved email or WhatsApp workflows where supported.",
  },
  {
    title: "Performance Reporting",
    detail: "Review activity, lead handling, and campaign performance.",
  },
] as const;

export const managedClientResponsibilities = [
  "Provide access, brand assets, and the information needed to run agreed work.",
  "Approve key content and important actions before they go live.",
  "Respond to sales-ready leads and business decisions that only your team can make.",
] as const;

export const managedProcess = ["Discover", "Agree Scope", "Configure", "Operate & Review"] as const;

export const platformUseCases = [
  {
    title: "Overview dashboard",
    caption: "See open tasks, recent activity, and what needs review in one place.",
  },
  {
    title: "Agent workspace",
    caption: "Open a specialized workflow to prepare marketing or sales work for review.",
  },
  {
    title: "Content calendar",
    caption: "Draft and schedule posts before anyone publishes them.",
  },
  {
    title: "Lead management",
    caption: "Organize enquiries and keep the next follow-up step visible.",
  },
  {
    title: "Unified inbox",
    caption: "Review customer conversations from supported channels together.",
  },
  {
    title: "Analytics",
    caption: "Read performance summaries grounded in connected data sources.",
  },
] as const;

export const pricingFootnote =
  "Prices are starting points. Final scope, agent access, onboarding fees, integrations, third-party charges, and terms are confirmed before engagement. Advertising budgets are separate.";

export const pricingConfirmation =
  "Final scope, supported channels, and any external costs are confirmed before onboarding.";

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
