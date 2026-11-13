import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PricingCards, PricingComparisonTable } from "@/components/offer-choice";
import { PageHeader } from "@/components/page-header";
import { pricingFootnote } from "@/data/offers";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Compare Self-Service AI Platform from $149/month and Fully Managed AI Growth from $799/month. Package details are listed on each plan.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Compare what customers buy."
        description="Two primary packages: Growth at $149/month and Managed Growth at $799/month. Package details are listed below."
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
      <CTASection />
    </>
  );
}
