import { ApprovalNote } from "@/components/approval-note";
import { AgentGrid } from "@/components/agent-grid";
import { Button } from "@/components/button";
import { ConnectedWorkspace } from "@/components/connected-workspace";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { ctaLabel } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Platform",
  description:
    "See how AIVAgrowth brings content, campaigns, leads, inbox, and analytics into one marketing and sales workspace for B2B service teams.",
  path: "/platform",
});

const boundaries = [
  {
    title: "A marketing and sales workspace",
    detail:
      "The platform is designed so content, campaigns, leads, conversations, and performance review can share context instead of starting over in another tool.",
  },
  {
    title: "Not an ERP",
    detail:
      "It does not replace finance, inventory, HR, or the rest of a back office. The scope is growth work: marketing, sales follow-up, and the customer conversations attached to them.",
  },
  {
    title: "Not a generic chatbot",
    detail:
      "The agents are specialized workflows with review points. They are not a single bot dropped onto every department.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform"
        title="One workspace for the growth work your team already does."
        description="AIVAgrowth is designed to keep specialized agents in the same place, with people setting the goals and the approval rules. It is a practical growth platform, not a system that runs the business unattended."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Platform", path: "/platform" },
        ]}
      >
        <Button href="/contact">{ctaLabel()}</Button>
        <Button href="/ai-agents" variant="secondary">
          Explore AI Agents
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
            claim that every channel is already connected.
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
            unified inbox. Open any card for the exact scope, including what still depends on permissions.
          </p>
          <AgentGrid />
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
