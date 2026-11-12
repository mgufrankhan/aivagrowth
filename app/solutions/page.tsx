import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { audiences, solutionWorkflows } from "@/data/solutions";
import { ctaLabel } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Solutions",
  description:
    "Explore how B2B service businesses can use AIVAgrowth to prepare content, campaigns, leads, and customer conversations with human review.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Use cases for B2B service businesses."
        description="Agencies, consultancies, IT services, professional services, and similar firms often share the same workload: publish consistently, launch campaigns carefully, qualify leads, and answer customers. These examples stay general on purpose."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ]}
      >
        <Button href="/contact">{ctaLabel()}</Button>
        <Button href="/ai-agents" variant="secondary">
          Explore AI Agents
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
            permission, and a person where the approval rule says so.
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
        </Container>
      </Section>
      <CTASection
        title="Tell us which workflow is heaviest."
        description="A short description of how your team publishes, follows up, and replies is enough to start a useful conversation."
      />
    </>
  );
}
