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
    oneLiner: "Run your own AI growth team.",
    title: "Run it yourself.",
    body: "Give your team AI agents for content, leads, conversations, and reporting. You manage the workflows, permissions, and approvals in one workspace.",
    commercialModel: "Monthly SaaS subscription",
    details: [
      "Monthly SaaS subscription",
      "Your team operates the platform",
      "AIVA Growth provides the tools",
    ] as const,
    pricingLabel: "Self-Service AI Platform",
    pricingAmount: "From $149/month",
    pricingFallback: "Talk to us",
    pricingAudience: "For teams that want to operate AI agents themselves.",
    inclusions: [
      "Shared AI growth workspace",
      "Agent-assisted marketing and sales workflows",
      "Customer-controlled reviews and approvals",
      "Demo-led onboarding and scope confirmation",
    ] as const,
    scopeNote: "Scope and supported integrations confirmed during onboarding",
    ctaLabel: "Request a Platform Demo",
    exploreLabel: "Explore Self-Service",
    contactInterest: "self-service" as const,
  },
  managed: {
    id: "managed" as const,
    label: "Fully Managed AI Growth",
    oneLiner: "We run your AI growth team for you.",
    title: "Let us run it for you.",
    body: "Our team helps configure and operate agreed AI-powered marketing and sales workflows, reviews output, and works with you to improve the process.",
    commercialModel: "Monthly managed-services subscription",
    details: [
      "Monthly managed service",
      "Our team operates agreed workflows",
      "You retain approval and business control",
    ] as const,
    pricingLabel: "Fully Managed AI Growth",
    pricingAmount: "From $799/month",
    pricingFallback: "Talk to us",
    pricingAudience: "For businesses that want our team to operate agreed workflows.",
    inclusions: [
      "Platform access for agreed workflows",
      "Initial workflow setup and configuration",
      "Ongoing human oversight and execution",
      "Regular review of activities and next steps",
    ] as const,
    scopeNote:
      "A managed subscription covers the agreed work, not unlimited marketing services or guaranteed lead volumes.",
    ctaLabel: "Discuss Managed Growth",
    exploreLabel: "Explore Managed Growth",
    discussLabel: "Talk About Managed Growth",
    contactInterest: "managed" as const,
  },
} as const;

export const interestOptions = [
  { value: "self-service", label: "Self-Service AI Platform" },
  { value: "managed", label: "Fully Managed AI Growth" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const outcomePoints = [
  {
    id: "repetitive",
    title: "Spend less time on repetitive marketing tasks.",
    detail:
      "Agents are designed to draft, organize, and prepare repeatable marketing and sales work so your team reviews a starting point instead of a blank page.",
  },
  {
    id: "leads",
    title: "Respond to incoming leads with a clearer process.",
    detail:
      "Organize permitted opportunities, prepare follow-up, and keep the next step visible without inventing a volume of leads you have not earned.",
  },
  {
    id: "connected",
    title: "Keep content, outreach, and conversations connected.",
    detail:
      "Content, campaigns, leads, and customer conversations are meant to share one workspace instead of living in tools that never quite match.",
  },
  {
    id: "review",
    title: "Review what is happening before deciding what to do next.",
    detail:
      "Campaign status, lead queues, and connected activity signals are meant to be readable before a person decides what to publish, send, or change.",
  },
] as const;

export type OutcomePointId = (typeof outcomePoints)[number]["id"];

export const selfServiceSteps = [
  {
    step: "01",
    title: "Discuss your needs and confirm access.",
    detail: "Describe your marketing and sales workflow so we can confirm what is available and suitable.",
  },
  {
    step: "02",
    title: "Connect supported channels and configure workflows.",
    detail: "Bring in the accounts you are allowed to connect and set the preferences the agents should follow.",
  },
  {
    step: "03",
    title: "Review and approve agent output.",
    detail: "Publishing, messaging, and ad changes stay behind the approval rules your team sets.",
  },
  {
    step: "04",
    title: "Track leads, conversations, and activity.",
    detail: "Use the same workspace to review queues and connected signals before deciding the next step.",
  },
] as const;

export const managedSteps = [
  {
    step: "01",
    title: "Tell us your goals and current process.",
    detail: "Share what you want to improve and how marketing and sales work happens today.",
  },
  {
    step: "02",
    title: "Agree on scope, channels, and approval rules.",
    detail: "Confirm the workflows, permissions, and review points before ongoing work begins.",
  },
  {
    step: "03",
    title: "Our team operates and reviews the agreed workflows.",
    detail: "AIVA Growth helps configure and run the agreed work using the same platform, with human oversight.",
  },
  {
    step: "04",
    title: "Review progress together and refine the process.",
    detail: "Look at activity together and adjust scope, approvals, and next steps as needed.",
  },
] as const;

export const managedProcess = ["Plan", "Configure", "Operate", "Review", "Improve"] as const;

export const pricingFootnote =
  "Prices are starting points. Final scope, agent access, onboarding fees, integrations, third-party charges, and terms are confirmed before engagement. Advertising budgets are separate.";

export const pricingConfirmation =
  "Final scope, availability, and terms confirmed during consultation.";

export function offerPrice(offer: typeof offers.selfService | typeof offers.managed): string {
  return showPublicPrices ? offer.pricingAmount : offer.pricingFallback;
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
