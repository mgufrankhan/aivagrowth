import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AgentIcon } from "@/components/agent-icon";
import { agentPath, agentReadinessLabel, type Agent, type AgentReadiness } from "@/data/agents";
import { cn } from "@/lib/utils";

const readinessTone: Record<AgentReadiness, string> = {
  available: "bg-cyan/20 text-navy",
  pilot: "bg-orange/15 text-navy",
  planned: "bg-blue/10 text-navy",
};

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link
      href={agentPath(agent.slug)}
      className="panel panel-interactive group flex h-full flex-col p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue transition-transform group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <AgentIcon slug={agent.slug} className="h-5 w-5" />
        </span>
        <span
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold",
            readinessTone[agent.readiness],
          )}
        >
          {agentReadinessLabel(agent.readiness)}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-navy">{agent.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">{agent.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
