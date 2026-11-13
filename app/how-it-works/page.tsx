import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { ModelPaths } from "@/components/model-paths";
import { PageHeader } from "@/components/page-header";
import { contactHref, offers } from "@/data/offers";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "How It Works",
  description:
    "See Self-Service and Fully Managed journeys for AIVA Growth, with approval gates in both paths.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="Two simple journeys."
        description="Self-Service means your team runs available agents. Fully Managed means our team operates agreed workflows and you approve important actions."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works" },
        ]}
      >
        <Button href={contactHref(offers.selfService.contactInterest)}>{offers.selfService.ctaLabel}</Button>
        <Button href={contactHref(offers.managed.contactInterest)} variant="secondary">
          {offers.managed.ctaLabel}
        </Button>
      </PageHeader>
      <Section>
        <Container>
          <ModelPaths />
          <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">
            Permissions and human approvals stay in both paths. Longer governance detail belongs in the FAQ and your
            agreed plan rather than this overview.
          </p>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
