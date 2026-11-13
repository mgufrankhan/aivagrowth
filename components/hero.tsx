"use client";

import { MotionConfig, motion } from "motion/react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { DashboardPreview } from "@/components/dashboard-preview";
import { ctaLabel, siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(ellipse_at_top_right,rgba(18,101,245,0.16),transparent_58%),radial-gradient(ellipse_at_left,rgba(255,138,30,0.10),transparent_46%)]" />
      </div>
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-24">
        <MotionConfig reducedMotion="user">
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-blue/15 bg-white/85 px-3 py-1 text-sm font-semibold text-blue shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
              {siteConfig.brandExplanation}
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl sm:leading-[1.05] lg:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{siteConfig.heroSupport}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">{ctaLabel()}</Button>
              <Button href="/ai-agents" variant="secondary">
                Explore AI Agents
              </Button>
            </div>
          </motion.div>
        </MotionConfig>
        <div className="relative min-w-0">
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(18,101,245,0.22),transparent_68%)]"
            aria-hidden="true"
          />
          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}
