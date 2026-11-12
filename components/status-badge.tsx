import { statusLabel, type IntegrationStatus } from "@/data/integrations";
import { cn } from "@/lib/utils";

const tones: Record<IntegrationStatus, string> = {
  live: "bg-cyan/20 text-navy",
  beta: "bg-orange/15 text-navy",
  planned: "bg-blue/10 text-navy",
  unavailable: "bg-line text-muted",
};

export function StatusBadge({ status }: { status: IntegrationStatus }) {
  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-1 text-xs font-semibold", tones[status])}>
      {statusLabel(status)}
    </span>
  );
}
