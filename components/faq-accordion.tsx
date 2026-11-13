"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Faq } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FAQAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="panel mt-10 divide-y divide-line overflow-hidden">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question} className={cn("px-5 transition-colors", open && "bg-background/60")}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-navy"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span className="pr-2">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted transition-transform duration-200 motion-reduce:transition-none",
                    open && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="pb-5"
            >
              <p className="max-w-3xl text-sm leading-7 text-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
