import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { contactHref, offers } from "@/data/offers";
import { audiences, solutionWorkflows } from "@/data/solutions";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Solutions",
  description:
    "Explore how B2B service businesses can use AIVA Growth through Self-Service or Fully Managed delivery for content, campaigns, leads, and conversations.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Use cases for B2B service businesses."
        description="Agencies, consultancies, IT services, professional services, and similar firms often share the same workload: publish consistently, launch campaigns carefully, qualify leads, and answer customers. Deliver those workflows yourself on the platform, or ask AIVA Growth to manage agreed work."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ]}
      >
        <Button href={contactHref(offers.selfService.contactInterest)}>{offers.selfService.ctaLabel}</Button>
        <Button href={contactHref(offers.managed.contactInterest)} variant="secondary">
          {offers.managed.ctaLabel}
        </Button>
      </PageHeader>
      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-navy">Where it fits</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <li key={audience.title} className="rounded-2xl border border-line bg-white p-5">
                <h3 className="text-lg font-semibold text-navy">{audience.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{audience.detail}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <Section className="bg-white pt-0">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-navy">Workflows teams can explore</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Nothing here depends on an industry-specific feature. Each workflow still needs the relevant account,
            permission, and a person where the approval rule says so. The same workflows can be operated by your team
            or managed by AIVA Growth under an agreed scope.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {solutionWorkflows.map((item, index) => (
              <li key={item.title} className="rounded-2xl border border-line p-5">
                <p className="text-sm font-semibold text-ember">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-line p-5">
              <h3 className="font-semibold text-navy">{offers.selfService.label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{offers.selfService.oneLiner}</p>
              <div className="mt-4">
                <Button href={contactHref(offers.selfService.contactInterest)} variant="secondary">
                  {offers.selfService.ctaLabel}
                </Button>
              </div>
            </article>
            <article className="rounded-2xl border border-line p-5">
              <h3 className="font-semibold text-navy">{offers.managed.label}</h3>
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
      <CTASection
        title="Tell us which workflow is heaviest."
        description="A short description of how your team publishes, follows up, and replies is enough to start a useful conversation about Self-Service or Fully Managed."
      />
    </>
  );
}
