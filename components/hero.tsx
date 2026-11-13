"use client";

import { MotionConfig, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ProductFrame } from "@/components/product-frame";
import { offerPrice, offers } from "@/data/offers";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 surface-mist" />
        <div className="absolute inset-0 surface-ruled opacity-40" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue/10 blur-3xl" />
        <div className="absolute -right-16 top-32 h-80 w-80 rounded-full bg-cyan/10 blur-3xl" />
      </div>
      <Container className="relative grid items-center gap-10 py-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-14 lg:py-20">
        <MotionConfig reducedMotion="user">
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
              AIVA <span className="text-blue">Growth</span>
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue">
              {siteConfig.brandExplanation}
            </p>
            <h1 className="font-display mt-4 max-w-xl text-4xl font-semibold text-navy sm:text-5xl sm:leading-[1.02] lg:text-[3.65rem]">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{siteConfig.heroSubheading}</p>
            <p className="mt-2 max-w-xl text-base font-medium leading-7 text-navy">{siteConfig.heroSupport}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/platform">{offers.selfService.exploreLabel}</Button>
              <Button href="/managed-services" variant="secondary">
                {offers.managed.exploreLabel}
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/pricing#self-service"
                className="inline-flex items-center rounded-full border border-line/90 bg-white/80 px-3.5 py-2 text-sm font-semibold text-navy shadow-[0_8px_24px_-18px_rgba(7,26,67,0.45)] backdrop-blur-sm transition-colors hover:border-navy/25"
              >
                Self-Service {offerPrice(offers.selfService)}
              </Link>
              <Link
                href="/pricing#managed"
                className="inline-flex items-center rounded-full border border-line/90 bg-white/80 px-3.5 py-2 text-sm font-semibold text-navy shadow-[0_8px_24px_-18px_rgba(7,26,67,0.45)] backdrop-blur-sm transition-colors hover:border-navy/25"
              >
                Fully Managed {offerPrice(offers.managed)}
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="relative min-w-0"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue/15 via-transparent to-cyan/15 blur-2xl" aria-hidden="true" />
            <ProductFrame caption="Product screenshot · Overview dashboard" className="relative">
              <Image
                src="/product/aiva-overview.jpg"
                alt="AIVA Growth overview dashboard"
                width={1600}
                height={900}
                className="h-auto w-full"
                priority
              />
            </ProductFrame>
          </motion.div>
        </MotionConfig>
      </Container>
    </section>
  );
}
