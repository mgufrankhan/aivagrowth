import { AgentGrid } from "@/components/agent-grid";
import { ConnectedWorkspace } from "@/components/connected-workspace";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { Hero } from "@/components/hero";
import { IntegrationGrid } from "@/components/integration-grid";
import { ManagedProcess } from "@/components/managed-process";
import { ModelPaths } from "@/components/model-paths";
import { OfferChoice, PricingCards } from "@/components/offer-choice";
import { OutcomeProps } from "@/components/outcome-props";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { faqs } from "@/data/faqs";
import { contactHref, offers, pricingFootnote } from "@/data/offers";
import { audiences } from "@/data/solutions";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "AIVA Growth | Your AI Team for Business Growth",
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section id="ways-to-grow" labelledBy="ways-heading">
        <Container>
          <SectionHeading
            id="ways-heading"
            eyebrow="Choose how you work"
            title="One AI growth platform. Two ways to use it."
            description="Choose the level of hands-on involvement that works for your business."
          />
          <OfferChoice />
        </Container>
      </Section>
      <Section className="border-y border-line bg-white">
        <Container>
          <SectionHeading
            id="outcomes-heading"
            eyebrow="What teams want"
            title="Practical outcomes for marketing and sales work."
            description="These are the kinds of improvements AIVA Growth is designed to support. They are not numerical promises."
          />
          <OutcomeProps />
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            id="agents-heading"
            eyebrow="Eight agents"
            title="Specialized help for the work that usually gets split across tools."
            description="Each capability below is a platform workflow. These agents are not automatically included in every plan. Where a connection or automation is not confirmed, the detail page says so."
          />
          <AgentGrid />
        </Container>
      </Section>
      <Section className="border-y border-line bg-white">
        <Container>
          <SectionHeading
            id="workflow-heading"
            eyebrow="How it works"
            title="Two clear paths. Approvals stay in both."
            description="Choose Self-Service or Fully Managed. Permissions, consent, and review safeguards apply either way."
          />
          <ModelPaths />
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            id="workspace-heading"
            eyebrow="Connected workspace"
            title="Content, campaigns, leads, inbox, and analytics in one flow."
            description="A shared workspace is designed to cut down the context switching between drafting, launching, following up, replying, and reading results. Channels shown here are planned connections, not a claim that every integration is live."
          />
          <ConnectedWorkspace />
        </Container>
      </Section>
      <Section className="border-y border-line bg-white">
        <Container>
          <SectionHeading
            id="audience-heading"
            eyebrow="Who it is for"
            title="Built around B2B service-based SMEs."
            description="The same marketing and sales jobs show up in agencies, consultancies, IT services, professional services, and other service businesses. You can run the platform yourself or ask our team to manage agreed workflows."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <li key={audience.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-lg font-semibold text-navy">{audience.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{audience.detail}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <Section id="pricing" labelledBy="pricing-heading">
        <Container>
          <SectionHeading
            id="pricing-heading"
            eyebrow="Simple ways to get started"
            title="Choose your AI growth team."
            description="Exactly two ways to work with AIVA Growth. No pay-as-you-go storefront, hybrid package, or per-agent checkout on this site."
          />
          <PricingCards />
          <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">{pricingFootnote}</p>
        </Container>
      </Section>
      <Section className="border-y border-line bg-white" id="managed-services" labelledBy="managed-heading">
        <Container>
          <SectionHeading
            id="managed-heading"
            eyebrow="Managed services"
            title="Your AI growth team, managed by us."
            description="You focus on serving customers. We help run the agreed marketing and sales workflows behind the scenes, using AIVA Growth agents with human review and clear approval rules."
          />
          <ManagedProcess />
          <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">{offers.managed.scopeNote}</p>
          <div className="mt-8">
            <Button href={contactHref(offers.managed.contactInterest)}>{offers.managed.discussLabel}</Button>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            id="integrations-heading"
            eyebrow="Integrations"
            title="Channel categories, with an honest status."
            description="LinkedIn, Instagram, Facebook, WhatsApp, Gmail, and Google Analytics 4 are the candidate channels. None of them is described as a one-click install."
          />
          <IntegrationGrid />
        </Container>
      </Section>
      <Section className="border-t border-line bg-white">
        <Container>
          <SectionHeading
            id="faq-heading"
            eyebrow="Questions"
            title="Straight answers, including what is not confirmed yet."
          />
          <FAQAccordion items={faqs} />
        </Container>
      </Section>
      <CTASection
        title="Ready to put an AI growth team to work?"
        description="Tell us what you want to improve. We’ll help you choose between operating AIVA Growth yourself and having our team manage the workflows."
      />
    </>
  );
}
