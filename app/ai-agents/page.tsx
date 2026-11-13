import { AgentGrid } from "@/components/agent-grid";
import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { ctaLabel } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "AI Agents",
  description:
    "Explore eight AIVA Growth agents for content, campaigns, performance, leads, WhatsApp, email, GA4 analytics, and a unified inbox.",
  path: "/ai-agents",
});

export default function AgentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI agents"
        title="Eight agents. One growth workspace."
        description="Each agent is aimed at a job a service business already does: creating content, preparing campaigns, reviewing ads, organizing leads, messaging opted-in contacts, drafting email, reading the website, or answering customers. They are platform capabilities and are not automatically included in every plan."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "AI Agents", path: "/ai-agents" },
        ]}
      >
        <Button href="/contact">{ctaLabel()}</Button>
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
