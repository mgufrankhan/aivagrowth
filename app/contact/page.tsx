import { Container, Section } from "@/components/container";
import { DemoForm } from "@/components/demo-form";
import { PageHeader } from "@/components/page-header";
import { parseInterest } from "@/data/offers";
import { ctaHeading, ctaLabel, siteConfig } from "@/data/site";
import { getPublicFormStatus, publishedContactEmail } from "@/lib/form-status";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Book a demo of AIVA Growth and tell us whether you are interested in Self-Service AI Platform or Fully Managed AI Growth. Submitting the form does not create an account.",
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const status = getPublicFormStatus();
  const email = publishedContactEmail();
  const initialInterest = parseInterest(params.interest);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={ctaHeading()}
        description="Tell us about your marketing and sales workflow, and we’ll help you explore whether Self-Service or Fully Managed is the better fit. Sending this form does not create an account or confirm that the product is publicly available."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <Section>
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <aside className="panel h-fit space-y-4 p-6">
            <h2 className="text-xl font-semibold text-navy">What happens next</h2>
            <p className="text-sm leading-6 text-muted">
              The form delivers an inquiry only when this site has a configured email, database, or webhook. If that
              destination is missing, the form says so and does not show a success confirmation.
            </p>
            <p className="text-sm leading-6 text-muted">
              A follow-up is not automatic. It depends on someone reading the destination that was configured for{" "}
              {siteConfig.domain}.
            </p>
            {email ? (
              <p className="text-sm leading-6 text-muted">
                You can also write to{" "}
                <a className="font-semibold text-blue" href={`mailto:${email}`}>
                  {email}
                </a>
                .
              </p>
            ) : (
              <p className="text-sm leading-6 text-muted">
                A public contact email has not been added yet. The form is the contact method on this site.
              </p>
            )}
            <p className="text-sm font-semibold text-navy">The button on this site says “{ctaLabel()}”.</p>
          </aside>
          <DemoForm status={status} ctaMode={siteConfig.ctaMode} initialInterest={initialInterest} />
        </Container>
      </Section>
    </>
  );
}
