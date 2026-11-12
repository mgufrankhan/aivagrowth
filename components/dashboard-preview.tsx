"use client";

import { useState, type KeyboardEvent } from "react";
import { dashboardTabs, sampleChart, type DashboardTabId } from "@/data/dashboard";
import { cn } from "@/lib/utils";

export function DashboardPreview() {
  const [current, setCurrent] = useState<DashboardTabId>("overview");
  const active = dashboardTabs.find((tab) => tab.id === current) ?? dashboardTabs[0];

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = dashboardTabs.findIndex((tab) => tab.id === current);
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
      return;
    }
    event.preventDefault();
    const offset = event.key === "ArrowRight" ? 1 : -1;
    const next = dashboardTabs[(index + offset + dashboardTabs.length) % dashboardTabs.length];
    if (next) {
      setCurrent(next.id);
    }
  }

  return (
    <figure className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_30px_80px_-36px_rgba(7,26,67,0.55)]">
      <figcaption className="sr-only">
        Illustrative product preview using sample data. It is not a live customer dashboard and the figures are not
        performance claims.
      </figcaption>
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <p className="rounded-full bg-orange/15 px-2.5 py-1 text-xs font-semibold text-navy">Illustrative sample</p>
      </div>
      <div
        className="flex gap-1 overflow-x-auto border-b border-line px-3 py-2"
        role="tablist"
        aria-label="Illustrative dashboard sections"
        onKeyDown={onKeyDown}
      >
        {dashboardTabs.map((tab) => {
          const selected = tab.id === current;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`dashboard-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`dashboard-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              className={cn(
                "shrink-0 rounded-full px-3 py-2 text-sm font-medium",
                selected ? "bg-navy text-white" : "text-muted hover:bg-background hover:text-navy",
              )}
              onClick={() => setCurrent(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`dashboard-panel-${active.id}`}
        aria-labelledby={`dashboard-tab-${active.id}`}
        className="space-y-4 p-4 sm:p-5"
      >
        <p className="text-sm leading-6 text-muted">{active.intro}</p>
        {active.metrics.length > 0 ? (
          <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {active.metrics.map((metric) => (
              <li key={metric.label} className="rounded-2xl border border-line bg-background p-3">
                <p className="text-xs font-medium text-muted">{metric.label}</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-navy">{metric.value}</p>
                <p className="text-xs text-muted">Sample</p>
              </li>
            ))}
          </ul>
        ) : null}
        {active.id === "analytics" ? <SampleBars /> : null}
        <ul className="space-y-2">
          {active.rows.map((row) => (
            <li key={row} className="rounded-xl border border-line px-3 py-2 text-sm leading-6 text-navy">
              {row}
            </li>
          ))}
        </ul>
        <p className="text-xs leading-5 text-muted">
          Sample figures for layout only. They are not customer results, product benchmarks, or a promise of outcomes.
        </p>
      </div>
    </figure>
  );
}

function SampleBars() {
  return (
    <div className="rounded-2xl border border-line p-3">
      <p className="text-xs font-medium text-muted">Sample visits chart</p>
      <div className="mt-3 flex h-24 items-end gap-2" aria-hidden="true">
        {sampleChart.map((bar) => (
          <div key={bar.label} className="flex flex-1 flex-col items-center gap-1">
            <div className="w-full rounded-t-md bg-blue/80" style={{ height: `${bar.value}%` }} />
            <span className="text-[10px] text-muted">{bar.label}</span>
          </div>
        ))}
      </div>
      <p className="sr-only">Decorative sample bar chart. The bar heights are not measurements.</p>
    </div>
  );
}
