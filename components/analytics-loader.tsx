"use client";

import dynamic from "next/dynamic";

const AnalyticsConsent = dynamic(
  () => import("@/components/analytics-consent").then((mod) => mod.AnalyticsConsent),
  { ssr: false },
);

export function AnalyticsLoader() {
  return <AnalyticsConsent />;
}
