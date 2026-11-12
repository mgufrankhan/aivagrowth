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
  wordmarkWidth: 2014,
  wordmarkHeight: 403,
  inverseWordmarkSrc: "/aiva_logo_dark_bg.png",
  inverseWordmarkWidth: 1989,
  inverseWordmarkHeight: 401,
};

function resolveCtaMode(value: string | undefined): CtaMode {
  return value === "waitlist" ? "waitlist" : "demo";
}

export const siteConfig = {
  name: "AIVAgrowth",
  domain: "aivagrowth.com",
  url: "https://aivagrowth.com",
  brandExplanation: "AI Virtual Agents for Business Growth",
  tagline: "Your AI Team for Business Growth.",
  supportingLine:
    "Create content, run campaigns, generate leads, engage customers, and understand performance from one AI-powered platform.",
  heroSupport:
    "Automate marketing, launch campaigns, generate leads, engage customers, and track results, all from one platform.",
  description:
    "Meet AIVAgrowth, your AI team for business growth. Explore agents for content, campaigns, lead generation, customer engagement, and analytics.",
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
      return "Request a Demo";
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
      return "Request a Demo";
    default: {
      const exhaustive: never = mode;
      return exhaustive;
    }
  }
}
