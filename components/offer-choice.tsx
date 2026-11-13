import { Check } from "lucide-react";
import { Button } from "@/components/button";
import {
  contactHref,
  offerPrice,
  offers,
  pricingComparison,
  pricingConfirmation,
} from "@/data/offers";
import { cn } from "@/lib/utils";

export function OfferChoice() {
  return (
    <div className="mt-12">
      <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
        <OfferCard
          eyebrow={offers.selfService.label}
          planName={offers.selfService.planName}
          price={offerPrice(offers.selfService)}
          title={offers.selfService.title}
          body={offers.selfService.body}
          details={offers.selfService.details}
          ctaHref={contactHref(offers.selfService.contactInterest)}
          ctaLabel={offers.selfService.ctaLabel}
        />
        <OfferCard
          eyebrow={offers.managed.label}
          planName={offers.managed.planName}
          price={offerPrice(offers.managed)}
          title={offers.managed.title}
          body={offers.managed.body}
          details={offers.managed.details}
          ctaHref={contactHref(offers.managed.contactInterest)}
          ctaLabel={offers.managed.ctaLabel}
          featured
        />
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">{pricingConfirmation}</p>
    </div>
  );
}

export function PricingCards() {
  return (
    <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:items-stretch">
      <PricingCard
        id="self-service"
        offer={offers.selfService}
        price={offerPrice(offers.selfService)}
      />
      <PricingCard
        id="managed"
        offer={offers.managed}
        price={offerPrice(offers.managed)}
        featured
      />
    </div>
  );
}

export function PricingComparisonTable() {
  return (
    <div className="mt-12 overflow-x-auto rounded-2xl border border-line bg-white">
      <table className="min-w-[44rem] w-full text-left text-sm">
        <thead className="border-b border-line bg-background">
          <tr>
            <th
              scope="col"
              className="sticky left-0 z-10 bg-background px-4 py-3 font-semibold text-navy sm:px-6"
            >
              Compare
            </th>
            <th scope="col" className="min-w-[12rem] px-4 py-3 font-semibold text-navy sm:px-6">
              {offers.selfService.label}
            </th>
            <th scope="col" className="min-w-[12rem] px-4 py-3 font-semibold text-navy sm:px-6">
              {offers.managed.label}
            </th>
          </tr>
        </thead>
        <tbody>
          {pricingComparison.map((row) => (
            <tr key={row.label} className="border-b border-line last:border-b-0">
              <th
                scope="row"
                className="sticky left-0 z-10 bg-white px-4 py-3 font-medium text-navy sm:px-6"
              >
                {row.label}
              </th>
              <td className="px-4 py-3 text-muted sm:px-6">{row.selfService}</td>
              <td className="px-4 py-3 text-muted sm:px-6">{row.managed}</td>
            </tr>
          ))}
          <tr>
            <th
              scope="row"
              className="sticky left-0 z-10 bg-white px-4 py-3 font-medium text-navy sm:px-6"
            >
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

function OfferCard({
  eyebrow,
  planName,
  price,
  title,
  body,
  details,
  ctaHref,
  ctaLabel,
  featured = false,
}: {
  eyebrow: string;
  planName: string;
  price: string;
  title: string;
  body: string;
  details: readonly string[];
  ctaHref: string;
  ctaLabel: string;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border bg-white p-6 transition-colors sm:p-8",
        featured
          ? "border-blue/35 bg-white shadow-[0_28px_60px_-36px_rgba(7,26,67,0.45)]"
          : "border-line/90 bg-white/85 backdrop-blur-sm hover:border-navy/20",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{eyebrow}</p>
        <span className="rounded-full bg-lavender px-2.5 py-1 text-xs font-semibold text-navy">{planName}</span>
      </div>
      <p className="font-display mt-4 text-3xl font-semibold text-navy">{price}</p>
      <h3 className="font-display mt-3 text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted sm:text-base">{body}</p>
      <ul className="mt-5 space-y-2.5">
        {details.map((item) => (
          <li key={item} className="flex gap-2 text-sm font-medium text-navy">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <Button href={ctaHref}>{ctaLabel}</Button>
      </div>
    </article>
  );
}

function PricingCard({
  id,
  offer,
  price,
  featured = false,
}: {
  id: string;
  offer: typeof offers.selfService | typeof offers.managed;
  price: string;
  featured?: boolean;
}) {
  return (
    <article
      id={id}
      className={cn(
        "scroll-mt-28 flex h-full flex-col rounded-2xl border bg-white p-6 transition-colors sm:p-8",
        featured
          ? "border-blue/35 bg-white shadow-[0_28px_60px_-36px_rgba(7,26,67,0.45)]"
          : "border-line/90 bg-white/85 backdrop-blur-sm hover:border-navy/20",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{offer.pricingLabel}</p>
        <span className="rounded-full bg-lavender px-2.5 py-1 text-xs font-semibold text-navy">
          {offer.planName}
        </span>
      </div>
      <p className="font-display mt-4 text-3xl font-semibold text-navy">{price}</p>
      <p className="mt-2 text-sm text-muted">{pricingConfirmation}</p>
      <p className="mt-4 text-base leading-7 text-muted">{offer.pricingAudience}</p>

      <dl className="mt-6 grid gap-3 rounded-2xl border border-line bg-background/70 p-4 sm:grid-cols-2">
        <ComparisonRow label="Who operates it" value={offer.whoOperates} />
        <ComparisonRow label="Main value" value={offer.mainValue} />
        <ComparisonRow label="Setup" value={offer.setup} />
        <ComparisonRow label="Approval" value={offer.approval} />
      </dl>

      <div className="mt-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-blue">Included</h3>
        <ul className="mt-3 space-y-2.5">
          {offer.inclusions.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-6 text-navy">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">Sold separately</h3>
        <ul className="mt-3 space-y-2">
          {offer.scopedItems.map((item) => (
            <li key={item} className="text-sm leading-6 text-muted">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6">
        <Button href={contactHref(offer.contactInterest)}>{offer.ctaLabel}</Button>
      </div>
    </article>
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
