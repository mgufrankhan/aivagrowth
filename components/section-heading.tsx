import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
  tone?: "default" | "inverse";
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl")}>
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            tone === "inverse" ? "text-cyan" : "text-blue",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-display mt-3 text-3xl font-semibold sm:text-4xl",
          tone === "inverse" ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-7 sm:text-lg",
            tone === "inverse" ? "text-[#d5e2f7]" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
