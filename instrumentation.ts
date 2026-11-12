import type { Instrumentation } from "next";

export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs" || process.env.NODE_ENV !== "production") {
    return;
  }
  const { reportProductionConfig } = await import("./instrumentation-node");
  reportProductionConfig();
}

export const onRequestError: Instrumentation.onRequestError = (error, request, context) => {
  const digest =
    typeof error === "object" && error !== null && "digest" in error ? String(error.digest) : undefined;
  console.error("[aivagrowth] request failed", {
    method: request.method,
    path: request.path,
    route: context.routePath,
    digest,
  });
};
