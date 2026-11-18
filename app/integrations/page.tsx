import { Button } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { IntegrationWorkspace } from "@/components/integration-workspace";
import { PageHeader } from "@/components/page-header";
import { contactHref, offers } from "@/data/offers";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Integrations",
  description:
    "See the social, analytics, and inbox integrations AIVA Growth provides, including Instagram, Facebook, LinkedIn, and WhatsApp.",
  path: "/integrations",
});

export default function IntegrationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Integrations"
        title="Integrations on the AIVA Growth platform."
        description="A look at the social, analytics, ads, and inbox accounts the platform supports. This page does not connect an account."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Integrations", path: "/integrations" },
        ]}
      >
        <Button href={contactHref(offers.selfService.contactInterest)}>{offers.selfService.ctaLabel}</Button>
        <Button href="/how-it-works" variant="secondary">
          See how it works
        </Button>
      </PageHeader>
      <Section>
        <Container>
          <IntegrationWorkspace />
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
