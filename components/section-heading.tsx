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
        <p className="inline-flex items-center gap-2 rounded-full border border-blue/15 bg-white px-3 py-1 text-sm font-semibold text-blue shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
