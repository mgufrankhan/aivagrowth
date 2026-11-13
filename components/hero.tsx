"use client";

import { MotionConfig, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { offerPrice, offers } from "@/data/offers";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,rgba(18,101,245,0.08),transparent_62%)]" />
      </div>
      <Container className="relative grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-14 lg:py-16">
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
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl sm:leading-[1.05] lg:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-muted">{siteConfig.heroSubheading}</p>
            <p className="mt-2 max-w-xl text-base font-medium leading-7 text-navy">{siteConfig.heroSupport}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/platform">{offers.selfService.exploreLabel}</Button>
              <Button href="/managed-services" variant="secondary">
                {offers.managed.exploreLabel}
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/pricing#self-service"
                className="inline-flex items-center rounded-full border border-line bg-white px-3.5 py-2 text-sm font-semibold text-navy transition-colors hover:border-navy/25"
              >
                Self-Service {offerPrice(offers.selfService)}
              </Link>
              <Link
                href="/pricing#managed"
                className="inline-flex items-center rounded-full border border-line bg-white px-3.5 py-2 text-sm font-semibold text-navy transition-colors hover:border-navy/25"
              >
                Fully Managed {offerPrice(offers.managed)}
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="relative min-w-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          >
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
          </motion.div>
        </MotionConfig>
      </Container>
    </section>
  );
}
