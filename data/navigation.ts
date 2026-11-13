import { agentPath, agents } from "@/data/agents";

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Platform", href: "/platform" },
  { label: "AI Agents", href: "/ai-agents" },
  { label: "Solutions", href: "/solutions" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Managed Services", href: "/managed-services" },
  { label: "Contact", href: "/contact" },
];

export const agentNav: NavItem[] = agents.map((agent) => ({
  label: agent.navLabel,
  href: agentPath(agent.slug),
}));

export const footerProduct: NavItem[] = [
  { label: "Platform", href: "/platform" },
  { label: "AI Agents", href: "/ai-agents" },
  { label: "Solutions", href: "/solutions" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Managed Services", href: "/managed-services" },
];

export const footerCompany: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLegal: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export type SitemapEntry = {
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

export const indexableRoutes: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/platform", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ai-agents", changeFrequency: "monthly", priority: 0.9 },
  ...agents.map((agent) => ({
    path: agentPath(agent.slug),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
  { path: "/solutions", changeFrequency: "monthly", priority: 0.8 },
  { path: "/how-it-works", changeFrequency: "monthly", priority: 0.8 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/managed-services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
];
