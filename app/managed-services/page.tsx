import { ApprovalNote } from "@/components/approval-note";
import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { ManagedProcess } from "@/components/managed-process";
import { PageHeader } from "@/components/page-header";
import { managedFaqs } from "@/data/faqs";
import {
  contactHref,
  managedClientResponsibilities,
  managedServices,
  offers,
  pricingConfirmation,
  startingAtPrice,
} from "@/data/offers";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Managed Services",
  description:
    "Fully Managed AI Growth from $799/month. AIVA Growth manages agreed marketing and sales workflows with your approvals.",
  path: "/managed-services",
});

export default function ManagedServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Managed services"
        title="We Manage Your Marketing and Sales Workflows Using AI."
        description="Our team uses AIVA Growth to create content, coordinate agreed campaigns, support lead follow-up, and review results. You stay informed and approve important actions."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Managed Services", path: "/managed-services" },
        ]}
      >
        <Button href={contactHref(offers.managed.contactInterest)}>{offers.managed.ctaLabel}</Button>
        <Button href="/pricing" variant="secondary">
          Compare pricing
        </Button>
      </PageHeader>
      <Section>
        <Container>
          <p className="text-3xl font-semibold tracking-tight text-navy">{startingAtPrice(offers.managed)}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{pricingConfirmation}</p>
        </Container>
      </Section>
      <Section className="border-y border-line bg-white">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-navy">What we manage</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            These are the service areas we can operate. They are not unlimited inclusions in the base price.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {managedServices.map((item) => (
              <li key={item.title} className="rounded-2xl border border-line bg-white p-5">
                <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">{offers.managed.scopeNote}</p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-navy">What the client does</h2>
            <ul className="mt-6 space-y-3">
              {managedClientResponsibilities.map((item) => (
                <li key={item} className="rounded-2xl border border-line bg-white p-4 text-sm leading-6 text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-navy">What’s included and what’s scoped</h2>
            <div className="mt-6 space-y-4">
              <article className="rounded-2xl border border-line bg-white p-5">
                <h3 className="font-semibold text-navy">Included at a high level</h3>
                <ul className="mt-3 space-y-2">
                  {offers.managed.inclusions.map((item) => (
                    <li key={item} className="text-sm leading-6 text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-2xl border border-line bg-white p-5">
                <h3 className="font-semibold text-navy">Defined in your agreed plan</h3>
                <ul className="mt-3 space-y-2">
                  {offers.managed.scopedItems.map((item) => (
                    <li key={item} className="text-sm leading-6 text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="border-y border-line bg-white">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-navy">Simple delivery process</h2>
          <ManagedProcess />
          <div className="mt-6">
            <ApprovalNote />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-navy">External costs and exclusions</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Advertising spend, third-party messaging or platform charges, and custom integrations are excluded unless
            separately agreed.
          </p>
        </Container>
      </Section>
      <Section className="border-t border-line bg-white">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-navy">Managed services FAQs</h2>
          <div className="mt-8">
            <FAQAccordion items={managedFaqs} />
          </div>
        </Container>
      </Section>
      <CTASection
        title="Discuss Managed Services"
        description="Tell us about your business. We will confirm fit, monthly scope, and starting price before any engagement begins."
        dual={false}
        primaryInterest="managed"
      />
    </>
  );
}
