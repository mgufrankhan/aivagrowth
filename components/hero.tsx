"use client";

import { MotionConfig, motion } from "motion/react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import Image from "next/image";
import { offerPrice, offers } from "@/data/offers";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,rgba(18,101,245,0.08),transparent_62%)]" />
      </div>
      <Container className="relative grid items-center gap-14 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:py-20">
        <MotionConfig reducedMotion="user">
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
              {siteConfig.brandExplanation}
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl sm:leading-[1.05] lg:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{siteConfig.heroSubheading}</p>
            <p className="mt-3 max-w-xl text-base font-medium leading-7 text-navy">{siteConfig.heroSupport}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/platform">{offers.selfService.exploreLabel}</Button>
              <Button href="/managed-services" variant="secondary">
                {offers.managed.exploreLabel}
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-navy">
              <span>
                Self-Service {offerPrice(offers.selfService)}
              </span>
              <span className="text-muted" aria-hidden="true">
                |
              </span>
              <span>
                Fully Managed {offerPrice(offers.managed)}
              </span>
            </div>
          </motion.div>
        </MotionConfig>
        <div className="relative min-w-0">
          <figure className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_50px_-36px_rgba(7,26,67,0.45)]">
            <Image
              src="/product/aiva-overview.jpg"
              alt="AIVA Growth overview dashboard"
              width={1600}
              height={900}
              className="h-auto w-full"
              priority
            />
            <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">
              Product screenshot · Overview dashboard
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
