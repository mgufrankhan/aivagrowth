import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { ModelPaths } from "@/components/model-paths";
import { PageHeader } from "@/components/page-header";
import { ctaLabel } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "How It Works",
  description:
    "See Self-Service and Fully Managed journeys for AIVA Growth, with approval gates, permissions, and review safeguards in both paths.",
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
        title="Two journeys. Approvals stay in both."
        description="Operate the AI platform yourself, or ask AIVA Growth to manage agreed workflows. Either path starts with scope, permissions, and a person at the review step."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works" },
        ]}
      >
        <Button href="/contact">{ctaLabel()}</Button>
        <Button href="/pricing" variant="secondary">
          Explore plans
        </Button>
      </PageHeader>
      <Section>
        <Container>
          <ModelPaths />
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
              actually returns. In Fully Managed engagements, AIVA Growth helps operate that loop for agreed
              workflows while you keep the business decisions.
            </p>
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
