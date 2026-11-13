import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "inverse" | "inverse-secondary";

const variants: Record<Variant, string> = {
  primary:
    "bg-blue text-white hover:bg-[#0d57d4] active:bg-[#0b4cbb] shadow-[0_8px_20px_-12px_rgba(18,101,245,0.8)]",
  secondary:
    "border border-line bg-white text-navy hover:border-navy/30 hover:bg-background active:bg-lavender/60",
  inverse: "bg-white text-navy hover:bg-[#f3f6ff] active:bg-[#e8effc]",
  "inverse-secondary":
    "border border-white/35 bg-white/5 text-white hover:bg-white/10 active:bg-white/15",
};

const baseClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors";

export function Button({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={cn(baseClass, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function FormButton({
  variant = "primary",
  className,
  children,
  type = "submit",
  disabled,
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  type?: "submit" | "button";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        baseClass,
        variants[variant],
        "disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none",
        className,
      )}
    >
      {children}
    </button>
  );
}
