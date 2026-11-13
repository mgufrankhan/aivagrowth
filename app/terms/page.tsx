import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Section } from "@/components/container";
import { DraftNotice } from "@/components/draft-notice";
import { PageHeader } from "@/components/page-header";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Draft Terms of Use",
  description:
    "Draft terms for using the AIVA Growth marketing website. This document needs legal review before it is treated as final.",
  path: "/terms",
  index: false,
});

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal draft"
        title="Terms of Use"
        description="These draft terms cover use of this marketing website. They are not a subscription agreement and they do not confirm that a product feature is generally available."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]}
      />
      <Section>
        <Container className="max-w-3xl space-y-8 text-base leading-7 text-muted">
          <DraftNotice documentName="terms of use" />
          <p>Effective date: not yet adopted. Governing law: to be confirmed by counsel.</p>
          <LegalBlock title="The website and the product">
            <p>
              This website describes AIVA Growth, an AI-powered marketing and sales platform that is being built for
              B2B service businesses. Pages may describe planned workflows. A description is not a warranty that a
              channel, an automation, or a public launch is available to you.
            </p>
          </LegalBlock>
          <LegalBlock title="Inquiries">
            <p>
              The contact form is a request for a conversation. Submitting it does not create an account, a contract,
              or a place on a customer list. If delivery is not configured, the site will not treat the submission as
              sent. Any later access to a product would be covered by a separate agreement that does not exist on
              this page yet.
            </p>
          </LegalBlock>
          <LegalBlock title="Acceptable use">
            <p>Do not misuse the website. That includes trying to break the form, probe systems you are not allowed to access, or send unlawful content through the inquiry. The site may ignore automated submissions.</p>
          </LegalBlock>
          <LegalBlock title="Website content">
            <p>
              The text, layout, and logo on this website are provided for this site. Do not copy the site and present
              it as your own product. Product names of other companies are used to identify intended channels. They do
              not indicate sponsorship or endorsement.
            </p>
          </LegalBlock>
          <LegalBlock title="No professional advice">
            <p>
              Nothing on this website is legal, financial, or advertising-compliance advice. You are responsible for
              consent, opt-out, advertising, and privacy rules that apply to your own campaigns.
            </p>
          </LegalBlock>
          <LegalBlock title="Liability and law">
            <p>
              A limitation of liability, a disclaimer of warranties, and a governing-law clause still need to be
              written by counsel for the correct entity and jurisdiction. Those clauses are intentionally left out of
              this draft rather than invented. Until the reviewed terms are published, do not rely on this page as
              the allocation of risk between you and the operator.
            </p>
          </LegalBlock>
          <LegalBlock title="Changes and contact">
            <p>
              The reviewed terms should say how changes will be posted. Until then, this draft can change as the
              website is prepared for launch. Questions can be sent through the{" "}
              <Link href="/contact" className="font-semibold text-blue">
                contact form
              </Link>
              .
            </p>
          </LegalBlock>
        </Container>
      </Section>
    </>
  );
}

function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold text-navy">{title}</h2>
      {children}
    </section>
  );
}
