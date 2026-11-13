import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ctaLabel } from "@/data/site";

export function CTASection({
  title = "Put your AI growth team to work.",
  description = "Tell us about your marketing and sales workflow, and we’ll help you explore where automation can make a difference.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="pb-16 sm:pb-20" aria-labelledby="final-cta-title">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-white sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-blue/50 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-16 left-8 h-40 w-56 rounded-full bg-orange/30 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <p className="h-1.5 w-12 rounded-full bg-orange" aria-hidden="true" />
            <h2 id="final-cta-title" className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#d5e2f7] sm:text-lg">{description}</p>
            <div className="mt-8">
              <Button href="/contact" variant="inverse">
                {ctaLabel()}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
