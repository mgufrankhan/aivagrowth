import { Clock3, MessagesSquare, ScanSearch, Waypoints } from "lucide-react";
import { outcomePoints, type OutcomePointId } from "@/data/offers";

export function OutcomeProps() {
  return (
    <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {outcomePoints.map((point) => (
        <li key={point.id} className="bg-white p-6">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lavender text-blue">
            <OutcomeIcon id={point.id} />
          </span>
          <h3 className="mt-4 text-lg font-semibold text-navy">{point.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{point.detail}</p>
        </li>
      ))}
    </ul>
  );
}

function OutcomeIcon({ id }: { id: OutcomePointId }) {
  switch (id) {
    case "repetitive":
      return <Clock3 className="h-5 w-5" aria-hidden="true" />;
    case "leads":
      return <MessagesSquare className="h-5 w-5" aria-hidden="true" />;
    case "connected":
      return <Waypoints className="h-5 w-5" aria-hidden="true" />;
    case "review":
      return <ScanSearch className="h-5 w-5" aria-hidden="true" />;
    default: {
      const exhaustive: never = id;
      throw new Error(`Unknown outcome point: ${String(exhaustive)}`);
    }
  }
}
