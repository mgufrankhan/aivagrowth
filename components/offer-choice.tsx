import { Button } from "@/components/button";
import {
  contactHref,
  offerPrice,
  offers,
  pricingComparison,
  pricingConfirmation,
} from "@/data/offers";

export function OfferChoice() {
  return (
    <div className="mt-12">
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-line bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{offers.selfService.label}</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-navy">{offerPrice(offers.selfService)}</p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-navy">{offers.selfService.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted sm:text-base">{offers.selfService.body}</p>
          <ul className="mt-5 space-y-2">
            {offers.selfService.details.map((item) => (
              <li key={item} className="text-sm font-medium text-navy">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href={contactHref(offers.selfService.contactInterest)}>{offers.selfService.ctaLabel}</Button>
          </div>
        </article>
        <article className="rounded-2xl border border-line bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{offers.managed.label}</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-navy">{offerPrice(offers.managed)}</p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-navy">{offers.managed.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted sm:text-base">{offers.managed.body}</p>
          <ul className="mt-5 space-y-2">
            {offers.managed.details.map((item) => (
              <li key={item} className="text-sm font-medium text-navy">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href={contactHref(offers.managed.contactInterest)}>{offers.managed.ctaLabel}</Button>
          </div>
        </article>
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">{pricingConfirmation}</p>
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
        <p className="mt-2 text-sm font-semibold text-navy">{offers.selfService.planName} plan</p>
        <p className="mt-4 text-3xl font-semibold tracking-tight text-navy">{offerPrice(offers.selfService)}</p>
        <p className="mt-2 text-sm text-muted">{pricingConfirmation}</p>
        <p className="mt-4 text-base leading-7 text-muted">{offers.selfService.pricingAudience}</p>
        <dl className="mt-6 space-y-3">
          <ComparisonRow label="Who operates it" value={offers.selfService.whoOperates} />
          <ComparisonRow label="Main value" value={offers.selfService.mainValue} />
          <ComparisonRow label="Setup" value={offers.selfService.setup} />
          <ComparisonRow label="Approval" value={offers.selfService.approval} />
          <ComparisonRow label="Package" value={offers.selfService.scope} />
        </dl>
        <ul className="mt-6 space-y-2">
          {offers.selfService.inclusions.map((item) => (
            <li key={item} className="text-sm leading-6 text-navy">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button href={contactHref(offers.selfService.contactInterest)}>{offers.selfService.ctaLabel}</Button>
        </div>
      </article>
      <article id="managed" className="scroll-mt-28 rounded-2xl border border-line bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{offers.managed.pricingLabel}</p>
        <p className="mt-2 text-sm font-semibold text-navy">{offers.managed.planName} plan</p>
        <p className="mt-4 text-3xl font-semibold tracking-tight text-navy">{offerPrice(offers.managed)}</p>
        <p className="mt-2 text-sm text-muted">{pricingConfirmation}</p>
        <p className="mt-4 text-base leading-7 text-muted">{offers.managed.pricingAudience}</p>
        <dl className="mt-6 space-y-3">
          <ComparisonRow label="Who operates it" value={offers.managed.whoOperates} />
          <ComparisonRow label="Main value" value={offers.managed.mainValue} />
          <ComparisonRow label="Setup" value={offers.managed.setup} />
          <ComparisonRow label="Approval" value={offers.managed.approval} />
          <ComparisonRow label="Package" value={offers.managed.scope} />
        </dl>
        <ul className="mt-6 space-y-2">
          {offers.managed.inclusions.map((item) => (
            <li key={item} className="text-sm leading-6 text-navy">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button href={contactHref(offers.managed.contactInterest)}>{offers.managed.ctaLabel}</Button>
        </div>
      </article>
    </div>
  );
}

export function PricingComparisonTable() {
  return (
    <div className="mt-12 overflow-x-auto rounded-2xl border border-line bg-white">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-line bg-background">
          <tr>
            <th scope="col" className="px-4 py-3 font-semibold text-navy sm:px-6">
              Compare
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-navy sm:px-6">
              {offers.selfService.label}
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-navy sm:px-6">
              {offers.managed.label}
            </th>
          </tr>
        </thead>
        <tbody>
          {pricingComparison.map((row) => (
            <tr key={row.label} className="border-b border-line last:border-b-0">
              <th scope="row" className="px-4 py-3 font-medium text-navy sm:px-6">
                {row.label}
              </th>
              <td className="px-4 py-3 text-muted sm:px-6">{row.selfService}</td>
              <td className="px-4 py-3 text-muted sm:px-6">{row.managed}</td>
            </tr>
          ))}
          <tr>
            <th scope="row" className="px-4 py-3 font-medium text-navy sm:px-6">
              Next step
            </th>
            <td className="px-4 py-3 sm:px-6">
              <Button href={contactHref(offers.selfService.contactInterest)} variant="secondary">
                {offers.selfService.ctaLabel}
              </Button>
            </td>
            <td className="px-4 py-3 sm:px-6">
              <Button href={contactHref(offers.managed.contactInterest)} variant="secondary">
                {offers.managed.ctaLabel}
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ComparisonRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-blue">{label}</dt>
      <dd className="mt-1 text-sm leading-6 text-navy">{value}</dd>
    </div>
  );
}
