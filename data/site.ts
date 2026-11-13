export type CtaMode = "demo" | "waitlist";

export type SocialLink = {
  label: string;
  href: string;
};

/**
 * Logo files in /public, trimmed from the source files in the project root.
 * wordmarkSrc is the lockup for light backgrounds.
 * inverseWordmarkSrc is the lockup for the navy footer.
 * Leave wordmarkSrc null to fall back to the text wordmark.
 */
export const brandAssets: {
  markSrc: string | null;
  wordmarkSrc: string | null;
  wordmarkWidth: number;
  wordmarkHeight: number;
  inverseWordmarkSrc: string | null;
  inverseWordmarkWidth: number;
  inverseWordmarkHeight: number;
} = {
  markSrc: null,
  wordmarkSrc: "/aiva_logo.png",
  wordmarkWidth: 1685,
  wordmarkHeight: 618,
  inverseWordmarkSrc: "/aiva_logo_dark_bg.png",
  inverseWordmarkWidth: 1698,
  inverseWordmarkHeight: 617,
};

function resolveCtaMode(value: string | undefined): CtaMode {
  return value === "waitlist" ? "waitlist" : "demo";
}

export const siteConfig = {
  name: "AIVA Growth",
  domain: "aivagrowth.com",
  url: "https://aivagrowth.com",
  brandExplanation: "AI Virtual Agents for Business Growth",
  positioning: "AI Growth Workforce",
  tagline: "Your AI Team for Business Growth.",
  heroSubheading:
    "Create marketing content, manage campaigns, organize leads, follow up with customers, and understand performance with AI-powered workflows.",
  heroSupport: "Run the platform yourself, or let our team manage it for you.",
  supportingLine:
    "An AI growth workforce for marketing and sales. Operate the platform yourself, or have AIVA Growth operate agreed workflows for you.",
  description:
    "AI agents for B2B marketing and sales. Run AIVA Growth yourself from $149/month, or choose Fully Managed AI Growth from $799/month.",
  ctaMode: resolveCtaMode(process.env.NEXT_PUBLIC_CTA_MODE),
  locale: "en_US",
} as const;

/**
 * Add a profile here only after the handle is confirmed.
 * Do not invent social accounts from the domain name.
 */
export const socialLinks: readonly SocialLink[] = [];

export function ctaLabel(mode: CtaMode = siteConfig.ctaMode): string {
  switch (mode) {
    case "waitlist":
      return "Join Waitlist";
    case "demo":
      return "Book Demo";
    default: {
      const exhaustive: never = mode;
      return exhaustive;
    }
  }
}

export function ctaHeading(mode: CtaMode = siteConfig.ctaMode): string {
  switch (mode) {
    case "waitlist":
      return "Join the Waitlist";
    case "demo":
      return "Book Demo";
    default: {
      const exhaustive: never = mode;
      return exhaustive;
    }
  }
}
