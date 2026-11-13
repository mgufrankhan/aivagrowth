import { workflowSteps } from "@/data/workflow";

export function WorkflowSteps({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className="mt-12 grid overflow-hidden rounded-2xl border border-line bg-white lg:grid-cols-4">
      {workflowSteps.map((step) => (
        <li key={step.step} className="border-b border-line p-6 last:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0">
          <p className="text-xs font-semibold tracking-[0.16em] text-blue">{step.step}</p>
          <h3 className="mt-3 text-lg font-semibold text-navy">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{step.detail}</p>
          {detailed ? (
            <div className="mt-4 space-y-3 border-t border-line pt-4 text-sm leading-6">
              <p>
                <span className="font-semibold text-navy">Your team: </span>
                <span className="text-muted">{step.youDo}</span>
              </p>
              <p>
                <span className="font-semibold text-navy">Designed to: </span>
                <span className="text-muted">{step.platformDoes}</span>
              </p>
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
