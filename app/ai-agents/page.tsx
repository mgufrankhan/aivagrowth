import { AgentGrid } from "@/components/agent-grid";
import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { contactHref, offers } from "@/data/offers";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "AI Agents",
  description:
    "Explore eight AIVA Growth agents for content, campaigns, performance, leads, WhatsApp, email, analytics, and a unified inbox.",
  path: "/ai-agents",
});

export default function AgentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI agents"
        title="What each agent helps you produce."
        description="Plain-English summaries of outputs for everyday marketing and sales work. Status badges reflect verified readiness. Agents are platform capabilities and are not automatically included in every plan."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "AI Agents", path: "/ai-agents" },
        ]}
      >
        <Button href={contactHref(offers.selfService.contactInterest)}>{offers.selfService.ctaLabel}</Button>
        <Button href="/platform" variant="secondary">
          See the platform
        </Button>
      </PageHeader>
      <Section>
        <Container>
          <AgentGrid />
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
