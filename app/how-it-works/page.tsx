import { Button } from "@/components/button";
import { ChannelIcon } from "@/components/channel-icon";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { ModelPaths } from "@/components/model-paths";
import { PageHeader } from "@/components/page-header";
import type { IntegrationId } from "@/data/integrations";
import { contactHref, offers } from "@/data/offers";
import { createPageMetadata } from "@/lib/seo";

const socialAccounts: { id: IntegrationId; name: string; detail: string }[] = [
  { id: "instagram", name: "Instagram", detail: "Publishing from a professional account." },
  { id: "facebook", name: "Facebook", detail: "Page publishing. Messenger is included." },
  { id: "linkedin", name: "LinkedIn", detail: "Company page posts and scheduling." },
  { id: "whatsapp", name: "WhatsApp", detail: "Pilot. Opted-in business messaging." },
];

export const metadata = createPageMetadata({
  title: "How It Works",
  description:
    "Connect Instagram, Facebook, LinkedIn, and WhatsApp, then review social performance and analytics on the AIVA Growth platform.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="Two simple journeys."
        description="First connect Instagram, Facebook, LinkedIn, and WhatsApp. After those accounts are connected, you can see their performance, analytics, and related activity on the AIVA Growth platform."
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
          <h2 className="text-3xl font-semibold tracking-tight text-navy">Connect your social accounts first.</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            You connect the social accounts your business is allowed to manage: Instagram, Facebook, LinkedIn, and
            WhatsApp. Once those accounts are connected, their performance and analytics show up on AIVA Growth, next
            to the content, campaigns, and conversations those accounts are used for. WhatsApp is in pilot. Gmail and
            Google Analytics 4 can be connected for inbox conversations and website analytics.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {socialAccounts.map((account) => (
              <li key={account.id} className="rounded-2xl border border-line bg-white p-5">
                <ChannelIcon id={account.id} />
                <h3 className="mt-4 font-semibold text-navy">{account.name}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{account.detail}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/integrations" variant="secondary">
              Open the integrations page
            </Button>
          </div>
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
