"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "aivagrowth.analytics-consent";
type Consent = "granted" | "denied" | "unknown";

const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID?.trim() ?? "";
const analyticsSrc = process.env.NEXT_PUBLIC_ANALYTICS_SRC?.trim() ?? "";

function readConsent(): Consent {
  if (typeof window === "undefined") {
    return "unknown";
  }
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "granted" || stored === "denied") {
    return stored;
  }
  return "unknown";
}

export function AnalyticsConsent() {
  const enabled = analyticsId.length > 0 && analyticsSrc.startsWith("https://");
  const [consent, setConsent] = useState<Consent>(readConsent);

  useEffect(() => {
    if (!enabled || consent !== "granted") {
      return;
    }
    if (document.querySelector("script[data-aivagrowth-analytics]")) {
      return;
    }
    const script = document.createElement("script");
    script.src = analyticsSrc;
    script.async = true;
    script.dataset.aivagrowthAnalytics = "true";
    script.dataset.analyticsId = analyticsId;
    document.head.appendChild(script);
  }, [consent, enabled]);

  if (!enabled || consent !== "unknown") {
    return null;
  }

  function choose(next: Exclude<Consent, "unknown">) {
    window.localStorage.setItem(STORAGE_KEY, next);
    setConsent(next);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-line bg-white p-4 shadow-[0_20px_50px_-24px_rgba(7,26,67,0.45)] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-navy">
          Optional analytics stays off until you allow it. Declining will not block the rest of the site.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-semibold text-navy"
            onClick={() => choose("denied")}
          >
            Decline
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full bg-blue px-4 text-sm font-semibold text-white"
            onClick={() => choose("granted")}
          >
            Allow analytics
          </button>
        </div>
      </div>
    </div>
  );
}
