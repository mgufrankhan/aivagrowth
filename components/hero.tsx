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
        <div className="absolute -top-24 right-[-4rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(18,101,245,0.16),transparent_68%)]" />
        <svg className="absolute bottom-0 left-[-2rem] h-36 w-72 text-orange/50" viewBox="0 0 280 120">
          <path
            d="M8 104C78 104 126 46 272 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <Container className="relative grid items-center gap-12 py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-20">
        <MotionConfig reducedMotion="user">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
              {siteConfig.brandExplanation}
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl sm:leading-[1.08]">
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
        <DashboardPreview />
      </Container>
    </section>
  );
}
