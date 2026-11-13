"use client";

import Image from "next/image";
import { useId, useState, type KeyboardEvent } from "react";
import { ProductFrame } from "@/components/product-frame";
import { platformScreenshots } from "@/data/offers";
import { cn } from "@/lib/utils";

type ShotId = (typeof platformScreenshots)[number]["id"];

export function ProductScreenshots({
  featuredId = "overview",
}: {
  featuredId?: ShotId;
}) {
  const baseId = useId();
  const initial = platformScreenshots.find((item) => item.id === featuredId) ?? platformScreenshots[0];
  const [currentId, setCurrentId] = useState<ShotId>(initial.id);
  const active = platformScreenshots.find((item) => item.id === currentId) ?? platformScreenshots[0];

  function onTabListKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = platformScreenshots.findIndex((item) => item.id === currentId);
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") {
      return;
    }
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % platformScreenshots.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + platformScreenshots.length) % platformScreenshots.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else {
      nextIndex = platformScreenshots.length - 1;
    }
    const next = platformScreenshots[nextIndex];
    if (next) {
      setCurrentId(next.id);
      document.getElementById(`${baseId}-tab-${next.id}`)?.focus();
    }
  }

  return (
    <div className="mt-10">
      <div
        className="flex gap-2 overflow-x-auto pb-1"
        role="tablist"
        aria-label="Product screenshots"
        onKeyDown={onTabListKeyDown}
      >
        {platformScreenshots.map((item) => {
          const selected = item.id === currentId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              className={cn(
                "shrink-0 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                selected
                  ? "bg-navy text-white shadow-[0_12px_28px_-18px_rgba(7,26,67,0.7)]"
                  : "border border-line/90 bg-white/80 text-muted backdrop-blur-sm hover:border-navy/20 hover:text-navy",
              )}
              onClick={() => setCurrentId(item.id)}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active.id}`}
        className="mt-5"
      >
        <ProductFrame
          caption={
            <>
              <span className="font-semibold text-navy">{active.title}</span>
              <span className="mt-1 block leading-6">{active.caption}</span>
            </>
          }
        >
          <Image
            src={active.src}
            alt={active.alt}
            width={1600}
            height={900}
            className="h-auto w-full"
            priority={active.id === featuredId}
          />
        </ProductFrame>
      </div>

      <ul className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6" aria-hidden="true">
        {platformScreenshots.map((item) => {
          const selected = item.id === currentId;
          return (
            <li key={item.id}>
              <button
                type="button"
                tabIndex={-1}
                className={cn(
                  "overflow-hidden rounded-xl border transition-colors",
                  selected ? "border-blue ring-2 ring-blue/20" : "border-line hover:border-navy/25",
                )}
                onClick={() => setCurrentId(item.id)}
              >
                <Image
                  src={item.src}
                  alt=""
                  width={320}
                  height={180}
                  className="aspect-video h-auto w-full object-cover"
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
