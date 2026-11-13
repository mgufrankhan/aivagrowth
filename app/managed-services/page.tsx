import { ApprovalNote } from "@/components/approval-note";
import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { ManagedProcess } from "@/components/managed-process";
import { PageHeader } from "@/components/page-header";
import { contactHref, managedSteps, offers, offerPrice, pricingConfirmation } from "@/data/offers";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Managed Services",
  description:
    "Fully Managed AI Growth from AIVA Growth. Our team helps configure and operate agreed marketing and sales workflows with your oversight.",
  path: "/managed-services",
});

export default function ManagedServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Managed services"
        title="Your AI growth team, managed by us."
        description="You focus on serving customers. We help run the agreed marketing and sales workflows behind the scenes, using AIVA Growth agents with human review and clear approval rules."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Managed Services", path: "/managed-services" },
        ]}
      >
        <Button href={contactHref(offers.managed.contactInterest)}>{offers.managed.discussLabel}</Button>
        <Button href="/pricing" variant="secondary">
          Compare plans
        </Button>
      </PageHeader>
      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-navy">How managed delivery works</h2>
          <ManagedProcess />
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {managedSteps.map((step) => (
              <li key={step.step} className="rounded-2xl border border-line bg-white p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-blue">{step.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.detail}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <ApprovalNote />
          </div>
        </Container>
      </Section>
      <Section className="border-y border-line bg-white">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-navy">What a managed subscription covers</h2>
            <ul className="mt-6 space-y-3">
              {offers.managed.inclusions.map((item) => (
                <li key={item} className="rounded-2xl border border-line p-4 text-sm leading-6 text-muted">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-muted">{offers.managed.scopeNote}</p>
            <p className="mt-3 text-sm leading-6 text-muted">
              Advertising spend, third-party messaging or platform charges, and custom integrations are excluded unless
              separately agreed.
            </p>
          </div>
          <aside className="h-fit rounded-2xl border border-line bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{offers.managed.label}</p>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-navy">{offerPrice(offers.managed)}</p>
            <p className="mt-2 text-sm text-muted">{pricingConfirmation}</p>
            <p className="mt-4 text-sm leading-6 text-muted">{offers.managed.pricingAudience}</p>
            <div className="mt-6">
              <Button href={contactHref(offers.managed.contactInterest)}>{offers.managed.ctaLabel}</Button>
            </div>
          </aside>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
