import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { ctaLabel, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn what AIVAgrowth is building: AI virtual agents that help B2B service businesses with marketing and sales, with people still in control.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A practical AI team for service businesses that need to grow."
        description="AIVAgrowth is being built for B2B service-based SMEs that spend too much of the week recreating the same marketing and sales work in separate tools."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      >
        <Button href="/contact">{ctaLabel()}</Button>
      </PageHeader>
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-7 text-muted">
            <h2 className="text-2xl font-semibold text-navy">The name</h2>
            <p>
              AIVAgrowth is a brand name. The idea behind it is {siteConfig.brandExplanation}. That phrase is an
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
              This website describes that direction. It does not invent customers, results, prices, or a launch date.
              If a channel or an automation is not confirmed, the copy says it is planned or that it depends on
              permission.
            </p>
          </div>
        </Container>
      </Section>
      <Section className="bg-white pt-0">
        <Container>
          <h2 className="text-2xl font-semibold text-navy">What this site will not do</h2>
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
