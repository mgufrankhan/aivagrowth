"use client";

import { Container } from "@/components/container";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Container className="py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-navy">This page could not be displayed.</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted">
        The request failed before the page finished rendering. You can try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex min-h-11 items-center rounded-full bg-blue px-5 text-sm font-semibold text-white"
      >
        Try again
      </button>
    </Container>
  );
}
