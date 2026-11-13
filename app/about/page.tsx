import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { contactHref, offers } from "@/data/offers";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn what AIVA Growth is building: an AI growth workforce for B2B service businesses, offered as Self-Service or Fully Managed.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="An AI growth workforce for service businesses."
        description="AIVA Growth is powered by one AI marketing and sales agent platform. It is not a conventional marketing agency and not a generic chatbot."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      >
        <Button href={contactHref(offers.selfService.contactInterest)}>{offers.selfService.ctaLabel}</Button>
        <Button href={contactHref(offers.managed.contactInterest)} variant="secondary">
          {offers.managed.ctaLabel}
        </Button>
      </PageHeader>
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-7 text-muted">
            <h2 className="text-2xl font-semibold text-navy">The name</h2>
            <p>
              AIVA Growth is a brand name. The idea behind it is {siteConfig.brandExplanation}. That phrase is an
              explanation, not a claim that each letter is a formal acronym.
            </p>
            <p>
              The tagline is “{siteConfig.tagline}” The work behind it is specific: content, campaigns, leads,
              customer conversations, and performance, handled by specialized agents in one workspace.
            </p>
          </div>
          <div className="space-y-4 text-base leading-7 text-muted">
            <h2 className="text-2xl font-semibold text-navy">The product vision</h2>
            <p>
              Service firms rarely need another generic chatbot, and they do not need this product to pretend it is
              an ERP. They need help preparing the growth work they already do, with a person able to approve what
              gets published, sent, or changed.
            </p>
            <p>
              Customers can operate the platform themselves through a monthly SaaS subscription, or choose Fully
              Managed AI Growth where the AIVA Growth team operates agreed workflows with customer oversight.
            </p>
          </div>
        </Container>
      </Section>
      <Section className="bg-white pt-0">
        <Container>
          <h2 className="text-2xl font-semibold text-navy">Two ways to work with us</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-line p-5">
              <h3 className="font-semibold text-navy">{offers.selfService.label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{offers.selfService.oneLiner}</p>
            </li>
            <li className="rounded-2xl border border-line p-5">
              <h3 className="font-semibold text-navy">{offers.managed.label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{offers.managed.oneLiner}</p>
            </li>
          </ul>
          <h2 className="mt-12 text-2xl font-semibold text-navy">What this site will not do</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Invent testimonials, logos, usage numbers, or certifications.",
              "Treat a planned integration as if it were already switched on.",
              "Promise that an agent can spend budget or contact people without review.",
            ].map((item) => (
              <li key={item} className="rounded-2xl border border-line p-5 text-sm leading-6 text-muted">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
