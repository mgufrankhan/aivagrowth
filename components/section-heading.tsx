import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{eyebrow}</p>
      ) : null}
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
