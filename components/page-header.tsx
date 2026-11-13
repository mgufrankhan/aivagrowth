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
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_at_top,rgba(18,101,245,0.07),transparent_65%)]" />
      </div>
      <Container className="relative py-12 sm:py-16">
        <PageBreadcrumbs items={crumbs} />
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{description}</p>
        {children ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
      </Container>
    </header>
  );
}
