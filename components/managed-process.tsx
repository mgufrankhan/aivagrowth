import { managedProcess } from "@/data/offers";

export function ManagedProcess() {
  return (
    <ol className="mt-10 flex flex-wrap items-center gap-3">
      {managedProcess.map((step, index) => (
        <li key={step} className="flex items-center gap-3">
          <span className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy">
            {step}
          </span>
          {index < managedProcess.length - 1 ? (
            <span className="text-muted" aria-hidden="true">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
