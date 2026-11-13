import Link from "next/link";
import { AgentIcon } from "@/components/agent-icon";
import { Button } from "@/components/button";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { Section, Container } from "@/components/container";
import { agentPath, relatedAgents, type Agent } from "@/data/agents";
import { ctaLabel } from "@/data/site";

export function AgentDetail({ agent }: { agent: Agent }) {
  const related = relatedAgents(agent.slug);

  return (
    <>
      <PageHeader
        eyebrow="AI agent"
        title={agent.name}
        description={agent.valueProposition}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "AI Agents", path: "/ai-agents" },
          { name: agent.name, path: agentPath(agent.slug) },
        ]}
      >
        <Button href="/contact">{ctaLabel()}</Button>
        <Button href="/how-it-works" variant="secondary">
          See how it works
        </Button>
      </PageHeader>
      <Section>
        <Container className="grid gap-10">
          <p className="rounded-2xl border border-line bg-white px-5 py-4 text-sm leading-6 text-muted">
            Use this capability in your own workspace or discuss a managed workflow. Inclusion and readiness depend on
            the plan and configuration confirmed during onboarding.
          </p>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
            <div>
              <h2 className="text-2xl font-semibold text-navy">What this agent is designed to do</h2>
              <p className="mt-4 text-base leading-7 text-muted">{agent.overview}</p>
              <ul className="mt-8 space-y-4">
                {agent.capabilities.map((capability) => (
                  <li key={capability.title} className="rounded-2xl border border-line bg-white p-5">
                    <h3 className="font-semibold text-navy">{capability.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{capability.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="h-fit rounded-3xl border border-line bg-white p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue/10 text-blue">
                <AgentIcon slug={agent.slug} className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-navy">Before anything goes out</h2>
              <ul className="mt-4 space-y-3">
                {agent.safeguards.map((item) => (
                  <li key={item} className="text-sm leading-6 text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </Section>
      <Section className="bg-white pt-0">
        <Container>
          <h2 className="text-2xl font-semibold text-navy">A practical sequence</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {agent.workflow.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-line p-5">
                <p className="text-sm font-semibold text-ember">0{index + 1}</p>
                <h3 className="mt-2 font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <h2 className="text-2xl font-semibold text-navy">Other agents</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={agentPath(item.slug)}
                  className="block h-full rounded-2xl border border-line bg-white p-5 hover:border-blue/30"
                >
                  <h3 className="font-semibold text-navy">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CTASection
        title={`Talk through ${agent.navLabel.toLowerCase()}.`}
        description="Tell us how this part of the work happens today. We can walk through the workflow without assuming a public launch or a live integration."
      />
    </>
  );
}
