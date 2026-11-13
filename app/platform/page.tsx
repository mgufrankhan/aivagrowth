import { ApprovalNote } from "@/components/approval-note";
import { AgentGrid } from "@/components/agent-grid";
import { Button } from "@/components/button";
import { ConnectedWorkspace } from "@/components/connected-workspace";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { offers } from "@/data/offers";
import { ctaLabel } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Platform",
  description:
    "See how the AIVA Growth SaaS workspace powers Self-Service and Fully Managed marketing and sales workflows for B2B service teams.",
  path: "/platform",
});

const boundaries = [
  {
    title: "A marketing and sales workspace",
    detail:
      "The platform is designed so content, campaigns, leads, conversations, and performance review can share context instead of starting over in another tool.",
  },
  {
    title: "Powers both ways of working",
    detail:
      "The same AI growth workspace supports Self-Service teams that operate the agents themselves and Fully Managed engagements where AIVA Growth operates agreed workflows.",
  },
  {
    title: "Not an ERP or a generic chatbot",
    detail:
      "It does not replace finance, inventory, or HR, and the agents are specialized workflows with review points rather than a single bot for every department.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform"
        title="One workspace for the growth work your team already does."
        description="AIVA Growth is an AI growth workforce powered by one marketing and sales agent platform. You can run that workspace yourself, or ask our team to manage agreed workflows with your oversight."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Platform", path: "/platform" },
        ]}
      >
        <Button href="/contact">{ctaLabel()}</Button>
        <Button href="/pricing" variant="secondary">
          Explore plans
        </Button>
      </PageHeader>
      <Section>
        <Container className="grid gap-4 lg:grid-cols-3">
          {boundaries.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-white p-5">
              <h2 className="text-lg font-semibold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
            </article>
          ))}
        </Container>
      </Section>
      <Section className="bg-white pt-0">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-navy">How the pieces sit together</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            A campaign is easier to judge when the content, the lead list, the replies, and the website trend are
            visible together. That is the point of the shared workspace. It reduces context switching. It does not
            claim that every channel is already connected or that every agent is included in every plan.
          </p>
          <ConnectedWorkspace />
          <div className="mt-6">
            <ApprovalNote />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-navy">The agents inside the workspace</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Eight workflows cover content, campaigns, performance, leads, WhatsApp, email, GA4 analytics, and a
            unified inbox. Open any card for the exact scope, including what still depends on permissions. These are
            platform capabilities, not a promise that every plan includes every agent.
          </p>
          <AgentGrid />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/pricing">{offers.selfService.exploreLabel}</Button>
            <Button href="/managed-services" variant="secondary">
              {offers.managed.exploreLabel}
            </Button>
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
