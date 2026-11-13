import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PricingCards, PricingComparisonTable } from "@/components/offer-choice";
import { PageHeader } from "@/components/page-header";
import { offers, pricingFootnote } from "@/data/offers";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Compare Self-Service AI Platform from $149/month and Fully Managed AI Growth from $799/month. Final scope is confirmed during consultation.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Compare what customers buy."
        description="Two primary options. Starting prices are shown below. Exact inclusions, channels, and terms are confirmed before onboarding—not invented on this page."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]}
      >
        <Button href="/managed-services" variant="secondary">
          Managed Services
        </Button>
        <Button href="/platform" variant="secondary">
          Platform
        </Button>
      </PageHeader>
      <Section>
        <Container>
          <PricingCards />
          <PricingComparisonTable />
          <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">{pricingFootnote}</p>
        </Container>
      </Section>
      <Section className="border-y border-line bg-white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-navy">What is included</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Capabilities described at a high level. Specific agents, usage, and channels are defined in your agreed
              plan.
            </p>
            <div className="mt-6 grid gap-4">
              <InclusionList title={offers.selfService.label} items={offers.selfService.inclusions} />
              <InclusionList title={offers.managed.label} items={offers.managed.inclusions} />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-navy">What is confirmed during onboarding</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              These details are not published as fixed public package numbers. Where undefined, they are confirmed in
              consultation or a service proposal.
            </p>
            <div className="mt-6 grid gap-4">
              <InclusionList title={offers.selfService.label} items={offers.selfService.scopedItems} />
              <InclusionList title={offers.managed.label} items={offers.managed.scopedItems} />
            </div>
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}

function InclusionList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <article className="rounded-2xl border border-line bg-white p-5">
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-6 text-muted">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
