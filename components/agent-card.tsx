import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AgentIcon } from "@/components/agent-icon";
import { agentPath, type Agent } from "@/data/agents";

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link
      href={agentPath(agent.slug)}
      className="panel group flex h-full flex-col p-5 transition-colors hover:border-navy/20"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue">
        <AgentIcon slug={agent.slug} className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-navy">{agent.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">{agent.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
      </span>
    </Link>
  );
}
