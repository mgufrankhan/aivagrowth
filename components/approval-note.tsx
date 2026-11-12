import { ShieldCheck } from "lucide-react";

export function ApprovalNote() {
  return (
    <aside className="rounded-2xl border border-line bg-lavender p-5 sm:p-6">
      <div className="flex gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
        <div>
          <h3 className="font-semibold text-navy">People stay in control</h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            Set approval rules before an agent publishes, sends a message, or changes an ad. AIVAgrowth is not
            designed to spend budget, contact people, or publish content without the permissions and review you
            choose.
          </p>
        </div>
      </div>
    </aside>
  );
}
