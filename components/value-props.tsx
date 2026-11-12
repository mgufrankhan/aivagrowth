import { Clock3, MessagesSquare, ScanSearch, Waypoints } from "lucide-react";
import { valuePoints, type ValuePointId } from "@/data/solutions";

export function ValueProps() {
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {valuePoints.map((point) => (
        <li key={point.id} className="rounded-2xl border border-line bg-white p-5">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-lavender text-blue">
            <ValueIcon id={point.id} />
          </span>
          <h3 className="mt-4 text-lg font-semibold text-navy">{point.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{point.detail}</p>
        </li>
      ))}
    </ul>
  );
}

function ValueIcon({ id }: { id: ValuePointId }) {
  switch (id) {
    case "time":
      return <Clock3 className="h-5 w-5" aria-hidden="true" />;
    case "connected":
      return <Waypoints className="h-5 w-5" aria-hidden="true" />;
    case "respond":
      return <MessagesSquare className="h-5 w-5" aria-hidden="true" />;
    case "visibility":
      return <ScanSearch className="h-5 w-5" aria-hidden="true" />;
    default: {
      const exhaustive: never = id;
      throw new Error(`Unknown value point: ${String(exhaustive)}`);
    }
  }
}
