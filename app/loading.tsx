import { Container } from "@/components/container";

export default function Loading() {
  return (
    <Container className="py-16" aria-busy="true" aria-live="polite">
      <p className="sr-only">Loading page</p>
      <div className="h-4 w-32 animate-pulse rounded bg-line motion-reduce:animate-none" />
      <div className="mt-6 h-12 max-w-xl animate-pulse rounded bg-line motion-reduce:animate-none" />
      <div className="mt-4 h-24 max-w-2xl animate-pulse rounded bg-line motion-reduce:animate-none" />
    </Container>
  );
}
