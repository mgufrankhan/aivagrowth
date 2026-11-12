import { AgentCard } from "@/components/agent-card";
import { agents } from "@/data/agents";

export function AgentGrid() {
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {agents.map((agent) => (
        <li key={agent.slug}>
          <AgentCard agent={agent} />
        </li>
      ))}
    </ul>
  );
}
