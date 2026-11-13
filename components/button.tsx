import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "inverse" | "inverse-secondary";

const variants: Record<Variant, string> = {
  primary:
    "bg-blue text-white shadow-[0_12px_24px_-14px_rgba(18,101,245,0.9)] hover:bg-[#0d57d4]",
  secondary: "border border-line bg-white text-navy shadow-sm hover:border-blue/40 hover:bg-lavender",
  inverse: "bg-white text-navy shadow-[0_12px_24px_-16px_rgba(0,0,0,0.45)] hover:bg-[#f3f6ff]",
  "inverse-secondary": "border border-white/35 bg-white/5 text-white hover:bg-white/10",
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
        "disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
    >
      {children}
    </button>
  );
}
