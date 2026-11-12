import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-sm font-semibold text-blue">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">That page is not on this site.</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted">
        The link may be out of date. You can go back to the homepage or look through the agents.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back home</Button>
        <Button href="/ai-agents" variant="secondary">
          Explore AI Agents
        </Button>
      </div>
    </Container>
  );
}
