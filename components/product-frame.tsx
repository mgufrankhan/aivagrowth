import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ProductFrame({
  children,
  caption,
  className,
}: {
  children: ReactNode;
  caption?: ReactNode;
  className?: string;
}) {
  return (
    <figure className={cn("product-frame", className)}>
      <div className="product-frame-chrome" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff8a1e]/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#20c8f4]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#1265f5]/70" />
        <span className="ml-2 rounded-md bg-white/80 px-2.5 py-1 text-[11px] font-medium tracking-wide text-muted">
          app.aivagrowth.com
        </span>
      </div>
      {children}
      {caption ? <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">{caption}</figcaption> : null}
    </figure>
  );
}
