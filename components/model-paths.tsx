"use client";

import { useState } from "react";
import { ApprovalNote } from "@/components/approval-note";
import { managedSteps, offers, selfServiceSteps } from "@/data/offers";
import { cn } from "@/lib/utils";

type PathId = "self-service" | "managed";

export function ModelPaths() {
  const [current, setCurrent] = useState<PathId>("self-service");
  const steps = current === "self-service" ? selfServiceSteps : managedSteps;
  const label = current === "self-service" ? offers.selfService.label : offers.managed.label;

  return (
    <div className="mt-12">
      <div className="inline-flex rounded-full border border-line bg-white p-1" role="tablist" aria-label="Delivery model">
        <PathTab
          id="self-service"
          selected={current === "self-service"}
          label={offers.selfService.label}
          onSelect={setCurrent}
        />
        <PathTab
          id="managed"
          selected={current === "managed"}
          label={offers.managed.label}
          onSelect={setCurrent}
        />
      </div>
      <div
        role="tabpanel"
        id={`path-panel-${current}`}
        aria-labelledby={`path-tab-${current}`}
        className="mt-6"
      >
        <p className="text-sm font-semibold text-navy">{label}</p>
        <ol className="mt-4 grid overflow-hidden rounded-2xl border border-line bg-white lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.step}
              className="border-b border-line p-6 last:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-blue">{step.step}</p>
              <h3 className="mt-3 text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-4">
        <ApprovalNote />
      </div>
    </div>
  );
}

function PathTab({
  id,
  selected,
  label,
  onSelect,
}: {
  id: PathId;
  selected: boolean;
  label: string;
  onSelect: (id: PathId) => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      id={`path-tab-${id}`}
      aria-selected={selected}
      aria-controls={`path-panel-${id}`}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
        selected ? "bg-navy text-white" : "text-muted hover:text-navy",
      )}
      onClick={() => onSelect(id)}
    >
      {label}
    </button>
  );
}
