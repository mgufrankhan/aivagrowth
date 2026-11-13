"use client";

import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BrandLockup } from "@/components/brand-mark";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { MobileNav } from "@/components/mobile-nav";
import { agentNav, primaryNav } from "@/data/navigation";
import { ctaLabel } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  return <HeaderControls key={pathname} pathname={pathname} />;
}

function HeaderControls({ pathname }: { pathname: string }) {
  const [agentsOpen, setAgentsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!agentsOpen) {
      return;
    }
    function onPointerDown(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setAgentsOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setAgentsOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [agentsOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/80 shadow-[0_12px_30px_-24px_rgba(7,26,67,0.7)] backdrop-blur-md">
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-3">
        <Link href="/" aria-label="AIVAgrowth home" className="rounded-md">
          <BrandLockup />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            item.href === "/ai-agents" ? (
              <div key={item.href} className="relative" ref={menuRef}>
                <button
                  type="button"
                  className={cn(
                    "inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-sm font-medium hover:bg-background",
                    pathname.startsWith("/ai-agents") ? "bg-lavender text-blue" : "text-navy",
                  )}
                  aria-expanded={agentsOpen}
                  aria-controls={menuId}
                  onClick={() => setAgentsOpen((open) => !open)}
                >
                  AI Agents
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </button>
                <div
                  id={menuId}
                  hidden={!agentsOpen}
                  className="absolute left-0 top-[calc(100%+0.5rem)] w-[min(34rem,calc(100vw-2rem))] rounded-2xl border border-line bg-white p-3 shadow-[0_24px_60px_-32px_rgba(7,26,67,0.45)]"
                >
                  <Link
                    href="/ai-agents"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-navy hover:bg-background"
                  >
                    All AI agents
                  </Link>
                  <ul className="mt-1 grid grid-cols-2 gap-1">
                    {agentNav.map((agent) => (
                      <li key={agent.href}>
                        <Link
                          href={agent.href}
                          className="block rounded-xl px-3 py-2 text-sm text-muted hover:bg-background hover:text-navy"
                          aria-current={pathname === agent.href ? "page" : undefined}
                        >
                          {agent.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium hover:bg-background",
                  pathname === item.href ? "bg-lavender text-blue" : "text-navy",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden lg:block">
          <Button href="/contact">{ctaLabel()}</Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </Container>
      {mobileOpen ? createPortal(<MobileNav onClose={closeMobile} />, document.body) : null}
    </header>
  );
}

export function HeaderFallback() {
  return (
    <div className="h-[var(--header-height)] border-b border-line/80 bg-white/80 shadow-[0_12px_30px_-24px_rgba(7,26,67,0.7)] backdrop-blur-md">
      <Container className="flex h-full items-center">
        <BrandLockup />
      </Container>
    </div>
  );
}
