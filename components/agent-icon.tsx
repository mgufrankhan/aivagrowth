import {
  CalendarDays,
  ChartColumn,
  ChartLine,
  Inbox,
  Mail,
  Megaphone,
  MessageCircle,
  Search,
  Users,
} from "lucide-react";
import type { AgentSlug } from "@/data/agents";

export function AgentIcon({ slug, className }: { slug: AgentSlug; className?: string }) {
  switch (slug) {
    case "content":
      return <CalendarDays className={className} aria-hidden="true" />;
    case "campaigns":
      return <Megaphone className={className} aria-hidden="true" />;
    case "performance-marketing":
      return <ChartLine className={className} aria-hidden="true" />;
    case "sales-leads":
      return <Users className={className} aria-hidden="true" />;
    case "whatsapp":
      return <MessageCircle className={className} aria-hidden="true" />;
    case "email":
      return <Mail className={className} aria-hidden="true" />;
    case "analytics":
      return <ChartColumn className={className} aria-hidden="true" />;
    case "seo":
      return <Search className={className} aria-hidden="true" />;
    case "inbox":
      return <Inbox className={className} aria-hidden="true" />;
    default: {
      const exhaustive: never = slug;
      throw new Error(`Unknown agent: ${String(exhaustive)}`);
    }
  }
}
