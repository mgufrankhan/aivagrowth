import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ctaLabel } from "@/data/site";

export function CTASection({
  title = "Ready to put an AI growth team to work?",
  description = "Tell us what you want to improve. We’ll help you choose between operating AIVA Growth yourself and having our team manage the workflows.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-navy text-white" aria-labelledby="final-cta-title">
      <Container className="py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
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
      </Container>
    </section>
  );
}
