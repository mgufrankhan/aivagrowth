import Link from "next/link";
import { AgentIcon } from "@/components/agent-icon";
import { Button } from "@/components/button";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { Section, Container } from "@/components/container";
import { agentPath, agentReadinessLabel, relatedAgents, type Agent } from "@/data/agents";
import { contactHref, offers } from "@/data/offers";

export function AgentDetail({ agent }: { agent: Agent }) {
  const related = relatedAgents(agent.slug);

  return (
    <>
      <PageHeader
        eyebrow="AI agent"
        title={agent.name}
        description={agent.summary}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "AI Agents", path: "/ai-agents" },
          { name: agent.name, path: agentPath(agent.slug) },
        ]}
      >
        <Button href={contactHref(offers.selfService.contactInterest)}>{offers.selfService.ctaLabel}</Button>
        <Button href={contactHref(offers.managed.contactInterest)} variant="secondary">
          {offers.managed.ctaLabel}
        </Button>
      </PageHeader>
      <Section>
        <Container className="grid gap-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-navy">
              {agentReadinessLabel(agent.readiness)}
            </span>
            <p className="text-sm leading-6 text-muted">
              Use this capability in your own Growth workspace or discuss a managed workflow. Live agents are included
              in Self-Service Growth; pilot agents are available with limited support.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-line bg-white p-5">
              <h2 className="text-lg font-semibold text-navy">What does it do?</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{agent.summary}</p>
            </article>
            <article className="rounded-2xl border border-line bg-white p-5">
              <h2 className="text-lg font-semibold text-navy">What output do you get?</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{agent.output}</p>
            </article>
            <article className="rounded-2xl border border-line bg-white p-5">
              <h2 className="text-lg font-semibold text-navy">What problem does it address?</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{agent.problem}</p>
            </article>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
            <div>
              <h2 className="text-2xl font-semibold text-navy">More detail</h2>
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
        description="Tell us how this part of the work happens today. We can walk through Self-Service or Managed Services without inventing live integrations."
      />
    </>
  );
}
