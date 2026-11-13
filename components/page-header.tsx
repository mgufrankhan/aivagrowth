import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { PageBreadcrumbs, type Crumb } from "@/components/page-breadcrumbs";

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(18,101,245,0.12),transparent_52%)]"
        aria-hidden="true"
      />
      <Container className="relative py-12 sm:py-16">
        <PageBreadcrumbs items={crumbs} />
        <p className="inline-flex items-center gap-2 rounded-full border border-blue/15 bg-white px-3 py-1 text-sm font-semibold text-blue shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{description}</p>
        {children ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
      </Container>
    </header>
  );
}
