import { workspaceStages } from "@/data/workflow";

export function ConnectedWorkspace() {
  return (
    <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
      {workspaceStages.map((stage, index) => (
        <li key={stage.title} className="border-t border-navy/15 pt-4">
          <p className="text-xs font-semibold tracking-[0.16em] text-blue">0{index + 1}</p>
          <h3 className="mt-2 text-lg font-semibold text-navy">{stage.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{stage.detail}</p>
        </li>
      ))}
    </ol>
  );
}
