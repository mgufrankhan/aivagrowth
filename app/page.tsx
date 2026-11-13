import { AgentGrid } from "@/components/agent-grid";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { Hero } from "@/components/hero";
import { ModelPaths } from "@/components/model-paths";
import { OfferChoice } from "@/components/offer-choice";
import { OutcomeProps } from "@/components/outcome-props";
import { ProductScreenshots } from "@/components/product-screenshots";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { faqs } from "@/data/faqs";
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
      <Section id="ways-to-grow" labelledBy="ways-heading" className="surface-mist">
        <Container>
          <SectionHeading
            id="ways-heading"
            eyebrow="Two ways to work with us"
            title="Operate the platform yourself, or let us manage it."
            description="Exactly two commercial options. Growth starts at $149/month. Managed Growth starts at $799/month."
          />
          <OfferChoice />
        </Container>
      </Section>
      <Section className="border-y border-line surface-sheet">
        <Container>
          <SectionHeading
            id="help-heading"
            eyebrow="What AIVA Growth helps you do"
            title="Content, campaigns, leads, follow-ups, and reporting."
            description="Concrete marketing and sales work—not architecture jargon."
          />
          <OutcomeProps />
        </Container>
      </Section>
      <Section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 surface-mist" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            id="platform-heading"
            eyebrow="See the platform"
            title="One workspace for marketing and sales workflows."
            description="Product screenshots of the overview, agents, calendar, leads, inbox, and analytics."
          />
          <ProductScreenshots />
          <div className="mt-8">
            <Button href="/platform">Explore AI Platform</Button>
          </div>
        </Container>
      </Section>
      <Section className="border-y border-line surface-sheet">
        <Container>
          <SectionHeading
            id="agents-heading"
            eyebrow="Meet the AI agents"
            title="Specialized help for everyday growth work."
            description="Six agents are live on Growth. Performance Marketing and WhatsApp are in pilot."
          />
          <AgentGrid />
        </Container>
      </Section>
      <Section className="surface-mist">
        <Container>
          <SectionHeading
            id="workflow-heading"
            eyebrow="How it works"
            title="Two simple journeys. Approvals stay in both."
            description="Self-Service means your team runs the workflows. Fully Managed means our team operates agreed work with your oversight."
          />
          <ModelPaths />
        </Container>
      </Section>
      <Section className="relative overflow-hidden border-y border-line">
        <div className="absolute inset-0 surface-deep" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            id="audience-heading"
            eyebrow="Who it’s for"
            title="Built for B2B service companies."
            description="IT services, consultancies, agencies, professional services, and similar firms that need clearer marketing and sales workflows."
            tone="inverse"
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <li
                key={audience.title}
                className="rounded-2xl border border-white/12 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <h3 className="font-display text-lg font-semibold text-white">{audience.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#d5e2f7]">{audience.detail}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <Section className="surface-sheet">
        <Container>
          <SectionHeading
            id="faq-heading"
            eyebrow="Questions"
            title="Straight answers about the platform and managed services."
          />
          <FAQAccordion items={faqs} />
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
