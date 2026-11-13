import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PricingCards } from "@/components/offer-choice";
import { PageHeader } from "@/components/page-header";
import { contactHref, offers, pricingFootnote } from "@/data/offers";
import { ctaLabel } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Choose Self-Service AI Platform from $149/month or Fully Managed AI Growth from $799/month. Final scope is confirmed during consultation.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Choose your AI growth team."
        description="AIVA Growth offers exactly two ways to work together: a monthly Self-Service platform subscription, or a monthly Fully Managed service. Final scope, availability, and terms are confirmed during consultation."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]}
      >
        <Button href="/contact">{ctaLabel()}</Button>
        <Button href="/managed-services" variant="secondary">
          Managed Services
        </Button>
      </PageHeader>
      <Section>
        <Container>
          <PricingCards />
          <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">{pricingFootnote}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-line bg-white p-5">
              <h2 className="text-lg font-semibold text-navy">{offers.selfService.label}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{offers.selfService.oneLiner}</p>
              <div className="mt-4">
                <Button href={contactHref(offers.selfService.contactInterest)} variant="secondary">
                  {offers.selfService.ctaLabel}
                </Button>
              </div>
            </article>
            <article className="rounded-2xl border border-line bg-white p-5">
              <h2 className="text-lg font-semibold text-navy">{offers.managed.label}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{offers.managed.oneLiner}</p>
              <div className="mt-4">
                <Button href={contactHref(offers.managed.contactInterest)} variant="secondary">
                  {offers.managed.ctaLabel}
                </Button>
              </div>
            </article>
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
