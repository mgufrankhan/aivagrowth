import { ApprovalNote } from "@/components/approval-note";
import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { WorkflowSteps } from "@/components/workflow-steps";
import { ctaLabel } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "How It Works",
  description:
    "See the AIVAgrowth workflow: connect permitted channels, set approval rules, review agent work, and check conversations, campaigns, leads, and performance.",
  path: "/how-it-works",
});

const limits = [
  "An agent does not publish, send, or change an ad until the permission and the approval rule allow that step.",
  "A connected channel appears only after an authorized account grants access. A planned status on this website is not that grant.",
  "Suggested replies and campaign assets stay drafts until a person approves them, unless you have explicitly allowed a narrower automation.",
  "Recommendations about ads are not a promise of return on spend, conversions, or revenue.",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="A workflow with a person at the approval step."
        description="Onboarding is designed as four moves: connect what you are allowed to connect, set the rules, let agents prepare approved work, and review the result in one place."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works" },
        ]}
      >
        <Button href="/contact">{ctaLabel()}</Button>
        <Button href="/ai-agents" variant="secondary">
          Explore AI Agents
        </Button>
      </PageHeader>
      <Section>
        <Container>
          <WorkflowSteps detailed />
          <div className="mt-6">
            <ApprovalNote />
          </div>
        </Container>
      </Section>
      <Section className="bg-white pt-0">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-navy">What stays manual unless you allow it</h2>
            <ul className="mt-6 space-y-3">
              {limits.map((item) => (
                <li key={item} className="rounded-2xl border border-line p-4 text-sm leading-6 text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-navy p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold">After the first setup</h2>
            <p className="mt-4 text-sm leading-6 text-[#d5e2f7]">
              The ongoing loop is review, not a handoff. Teams look at drafts waiting for approval, conversations
              that need a person, leads that are not qualified yet, and the performance signals a connected source
              actually returns. The workspace is meant to make that review faster. It is not a promise that the work
              runs without anyone watching it.
            </p>
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
