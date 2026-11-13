import type { ReactNode } from "react";
import Link from "next/link";
import { Container, Section } from "@/components/container";
import { DraftNotice } from "@/components/draft-notice";
import { PageHeader } from "@/components/page-header";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Draft Privacy Policy",
  description:
    "Draft privacy policy for the AIVA Growth marketing website. This document needs legal review before it is treated as final.",
  path: "/privacy",
  index: false,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal draft"
        title="Privacy Policy"
        description="This draft describes the marketing website only. It is not a final privacy notice, a data processing agreement, or a description of every product system."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]}
      />
      <Section>
        <Container className="max-w-3xl space-y-8 text-base leading-7 text-muted">
          <DraftNotice documentName="privacy policy" />
          <p>Effective date: not yet adopted. Review date: not set.</p>
          <LegalBlock title="Who this draft is about">
            <p>
              The legal entity that operates AIVA Growth has not been published on this website. Until that name,
              address, and contact role are confirmed, this draft cannot identify a controller or a processor. Do not
              treat the domain name as that missing information.
            </p>
          </LegalBlock>
          <LegalBlock title="What the demo form collects">
            <p>If you submit the inquiry form, it asks for:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Full name, work email, and company name</li>
              <li>Website and business type, if you choose to provide them</li>
              <li>The main challenge you select</li>
              <li>An optional message</li>
              <li>Your consent to be contacted about the inquiry</li>
            </ul>
            <p>
              A hidden field exists to catch automated submissions. A real inquiry should leave it empty. The form is
              not a place for government identifiers, payment data, or other sensitive personal information.
            </p>
          </LegalBlock>
          <LegalBlock title="When an inquiry is actually stored">
            <p>
              An inquiry is delivered only when the site operator has configured an email provider, a database, or a
              webhook. In local development, inquiries can be written to a file on that machine and are not sent
              elsewhere. If delivery is not configured, the form says so and does not claim the message was sent.
            </p>
            <p>
              This draft does not set a retention period. Counsel and the operator need to decide how long each
              destination keeps an inquiry, who can read it, and how a person can ask about it.
            </p>
          </LegalBlock>
          <LegalBlock title="Analytics and cookies">
            <p>
              Optional analytics is off unless both a measurement id and a script address are configured, and it loads
              only after a visitor chooses Allow analytics. Declining does not block the site. No analytics id is
              shipped with the website by default. This draft does not list cookie names for a vendor that has not
              been selected.
            </p>
          </LegalBlock>
          <LegalBlock title="What this draft does not claim">
            <p>
              It does not claim a certification, a specific country of storage, a subprocessors list, or that personal
              information is sold or is not sold. Those statements belong in the reviewed policy, once the actual
              practice is known. The product application, once it stores customer content or connected-account data,
              will need its own notice. This page does not replace that notice.
            </p>
          </LegalBlock>
          <LegalBlock title="Children">
            <p>
              The website is aimed at people asking about a business product. It is not directed at children, and the
              form should not be used to send information about a child.
            </p>
          </LegalBlock>
          <LegalBlock title="How to ask a question">
            <p>
              Use the <Link href="/contact" className="font-semibold text-blue">contact form</Link>. A public email
              address, postal address, and privacy contact will be added here only after they are confirmed. This
              draft will be replaced after legal review.
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
