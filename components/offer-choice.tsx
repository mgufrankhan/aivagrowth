import { Button } from "@/components/button";
import {
  contactHref,
  offerPrice,
  offers,
  pricingConfirmation,
} from "@/data/offers";

export function OfferChoice() {
  return (
    <div className="mt-12 grid gap-4 lg:grid-cols-2">
      <article className="rounded-2xl border border-line bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{offers.selfService.label}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy">{offers.selfService.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted sm:text-base">{offers.selfService.body}</p>
        <ul className="mt-5 space-y-2">
          {offers.selfService.details.map((item) => (
            <li key={item} className="text-sm font-medium text-navy">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button href="/pricing#self-service">{offers.selfService.exploreLabel}</Button>
        </div>
      </article>
      <article className="rounded-2xl border border-line bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{offers.managed.label}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy">{offers.managed.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted sm:text-base">{offers.managed.body}</p>
        <ul className="mt-5 space-y-2">
          {offers.managed.details.map((item) => (
            <li key={item} className="text-sm font-medium text-navy">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button href="/managed-services">{offers.managed.exploreLabel}</Button>
        </div>
      </article>
    </div>
  );
}

export function PricingCards() {
  return (
    <div className="mt-12 grid gap-4 lg:grid-cols-2">
      <article id="self-service" className="scroll-mt-28 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
          {offers.selfService.pricingLabel}
        </p>
        <p className="mt-4 text-3xl font-semibold tracking-tight text-navy">{offerPrice(offers.selfService)}</p>
        <p className="mt-2 text-sm text-muted">{pricingConfirmation}</p>
        <p className="mt-4 text-base leading-7 text-muted">{offers.selfService.pricingAudience}</p>
        <ul className="mt-6 space-y-3">
          {offers.selfService.inclusions.map((item) => (
            <li key={item} className="text-sm leading-6 text-navy">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-6 text-muted">{offers.selfService.scopeNote}</p>
        <div className="mt-6">
          <Button href={contactHref(offers.selfService.contactInterest)}>{offers.selfService.ctaLabel}</Button>
        </div>
      </article>
      <article id="managed" className="scroll-mt-28 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{offers.managed.pricingLabel}</p>
        <p className="mt-4 text-3xl font-semibold tracking-tight text-navy">{offerPrice(offers.managed)}</p>
        <p className="mt-2 text-sm text-muted">{pricingConfirmation}</p>
        <p className="mt-4 text-base leading-7 text-muted">{offers.managed.pricingAudience}</p>
        <ul className="mt-6 space-y-3">
          {offers.managed.inclusions.map((item) => (
            <li key={item} className="text-sm leading-6 text-navy">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-6 text-muted">{offers.managed.scopeNote}</p>
        <div className="mt-6">
          <Button href={contactHref(offers.managed.contactInterest)}>{offers.managed.ctaLabel}</Button>
        </div>
      </article>
    </div>
  );
}
