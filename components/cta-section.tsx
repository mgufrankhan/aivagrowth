import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { contactHref, offers, type InterestValue } from "@/data/offers";
import { ctaLabel } from "@/data/site";

export function CTASection({
  title = "Ready to put an AI growth team to work?",
  description = "Choose Self-Service if you want to operate the platform, or Fully Managed if you want our team to run agreed workflows.",
  dual = true,
  primaryInterest,
}: {
  title?: string;
  description?: string;
  dual?: boolean;
  primaryInterest?: InterestValue;
}) {
  const singleHref = contactHref(primaryInterest);
  const singleLabel =
    primaryInterest === "managed"
      ? offers.managed.ctaLabel
      : primaryInterest === "self-service"
        ? offers.selfService.ctaLabel
        : ctaLabel();

  return (
    <section className="bg-navy text-white" aria-labelledby="final-cta-title">
      <Container className="py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
          <h2 id="final-cta-title" className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[#d5e2f7] sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {dual ? (
              <>
                <Button href={contactHref(offers.selfService.contactInterest)} variant="inverse">
                  {offers.selfService.ctaLabel}
                </Button>
                <Button href={contactHref(offers.managed.contactInterest)} variant="inverse-secondary">
                  {offers.managed.ctaLabel}
                </Button>
              </>
            ) : (
              <Button href={singleHref} variant="inverse">
                {singleLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
