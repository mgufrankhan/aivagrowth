import { ApprovalNote } from "@/components/approval-note";
import { AgentGrid } from "@/components/agent-grid";
import { ConnectedWorkspace } from "@/components/connected-workspace";
import { Container, Section } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { Hero } from "@/components/hero";
import { IntegrationGrid } from "@/components/integration-grid";
import { SectionHeading } from "@/components/section-heading";
import { ValueProps } from "@/components/value-props";
import { WorkflowSteps } from "@/components/workflow-steps";
import { faqs } from "@/data/faqs";
import { audiences } from "@/data/solutions";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "AIVAgrowth | AI Agents for Marketing & Sales Growth",
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section>
        <Container>
          <SectionHeading
            id="value-heading"
            eyebrow="Why teams look at it"
            title="One platform. Specialized AI agents. Less manual work."
            description="AIVAgrowth is designed as a practical marketing and sales workspace for B2B service businesses. The agents prepare work. People decide what is allowed to go out."
          />
          <ValueProps />
        </Container>
      </Section>
      <Section className="bg-white">
        <Container>
          <SectionHeading
            id="agents-heading"
            eyebrow="Eight agents"
            title="Specialized help for the work that usually gets split across tools."
            description="Each capability below is a product workflow. Where a connection or automation is not confirmed, the detail page says so."
          />
          <AgentGrid />
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            id="workflow-heading"
            eyebrow="How it works"
            title="Connect, set the rules, review, then measure."
            description="The sequence is intentionally simple. An agent can prepare and carry out a step only inside the approvals and permissions you set."
          />
          <WorkflowSteps />
          <div className="mt-6">
            <ApprovalNote />
          </div>
        </Container>
      </Section>
      <Section className="bg-white">
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
      <Section>
        <Container>
          <SectionHeading
            id="audience-heading"
            eyebrow="Who it is for"
            title="Built around B2B service-based SMEs."
            description="The same marketing and sales jobs show up in agencies, consultancies, IT services, professional services, and other service businesses. This site does not promise a separate product for each industry."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <li key={audience.title} className="panel p-5">
                <h3 className="text-lg font-semibold text-navy">{audience.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{audience.detail}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <Section className="bg-white">
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
      <Section>
        <Container>
          <SectionHeading
            id="faq-heading"
            eyebrow="Questions"
            title="Straight answers, including what is not confirmed yet."
          />
          <FAQAccordion items={faqs} />
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
