import { ApprovalNote } from "@/components/approval-note";
import { AgentGrid } from "@/components/agent-grid";
import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { IntegrationGrid } from "@/components/integration-grid";
import { PageHeader } from "@/components/page-header";
import { ProductScreenshots } from "@/components/product-screenshots";
import { contactHref, offers } from "@/data/offers";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Platform",
  description:
    "See the AIVA Growth AI platform for content, campaigns, leads, follow-ups, and reporting. Run it yourself from $149/month.",
  path: "/platform",
});

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform"
        title="The AI software your team can operate."
        description="AIVA Growth is a workspace for marketing and sales workflows. Prepare content, manage campaigns, organize leads, follow up with customers, and review performance—with approvals before anything goes out."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Platform", path: "/platform" },
        ]}
      >
        <Button href={contactHref(offers.selfService.contactInterest)}>{offers.selfService.ctaLabel}</Button>
        <Button href="/managed-services" variant="secondary">
          {offers.managed.exploreLabel}
        </Button>
      </PageHeader>
      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-navy">See the workspace</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Product screenshots of the AIVA Growth workspace: overview, agents, content calendar, leads, inbox, and
            analytics.
          </p>
          <ProductScreenshots />
        </Container>
      </Section>
      <Section className="border-y border-line bg-white">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-navy">Practical use cases</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Use the Self-Service Growth plan when your team wants to operate the agents. The same software powers Fully
            Managed engagements. The Growth plan includes six live agents, two pilot agents, and the live channels listed
            below.
          </p>
          <div className="mt-6">
            <ApprovalNote />
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-navy">Channels</h3>
            <IntegrationGrid />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={contactHref(offers.selfService.contactInterest)}>{offers.selfService.ctaLabel}</Button>
            <Button href="/pricing" variant="secondary">
              Compare pricing
            </Button>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-navy">Agents inside the platform</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Six agents are live on the Growth plan. Performance Marketing and WhatsApp are in pilot. Open any card for
            outputs and safeguards.
          </p>
          <AgentGrid />
        </Container>
      </Section>
      <CTASection
        dual={false}
        primaryInterest="self-service"
        title="Request Platform Demo"
        description="Tell us about your business. We will activate the Growth plan agents and connect your accounts."
      />
    </>
  );
}
