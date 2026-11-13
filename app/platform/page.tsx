import { ApprovalNote } from "@/components/approval-note";
import { AgentGrid } from "@/components/agent-grid";
import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { DashboardPreview } from "@/components/dashboard-preview";
import { PageHeader } from "@/components/page-header";
import { contactHref, offers, platformUseCases } from "@/data/offers";
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
            No verified product screenshots are in this repository yet. The preview below is an accurately labeled
            illustrative sample, not a live customer dashboard. TODO: replace with verified screenshots of overview,
            agents, content calendar, leads, inbox, and analytics.
          </p>
          <div className="mt-10">
            <DashboardPreview />
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platformUseCases.map((item) => (
              <li key={item.title} className="rounded-2xl border border-line bg-white p-5">
                <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.caption}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <Section className="border-y border-line bg-white">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-navy">Practical use cases</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Use the Self-Service AI Platform when your team wants to operate the agents. The same software also powers
            Fully Managed engagements. Available features and integrations depend on current product readiness.
          </p>
          <div className="mt-6">
            <ApprovalNote />
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
            Eight workflows support everyday growth work. Open any card for outputs and safeguards. Agents are not
            automatically included in every plan.
          </p>
          <AgentGrid />
        </Container>
      </Section>
      <CTASection
        dual={false}
        primaryInterest="self-service"
        title="Request Platform Demo"
        description="Tell us about your business. We will confirm which workflows and channels are available for Self-Service."
      />
    </>
  );
}
