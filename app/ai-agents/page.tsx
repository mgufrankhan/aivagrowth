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
    "Explore AIVA Growth agents for content, campaigns, performance, leads, WhatsApp, email, website SEO, analytics, and a unified inbox.",
  path: "/ai-agents",
});

export default function AgentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI agents"
        title="What each agent helps you produce."
        description="Six agents are live on the Growth plan. Performance Marketing and WhatsApp are in pilot. Website SEO is planned. Status badges show readiness for each workflow."
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
