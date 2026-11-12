import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";

export type Crumb = {
  name: string;
  path: string;
};

export function PageBreadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          {items.map((item, index) => {
            const last = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-line">
                    /
                  </span>
                ) : null}
                {last ? (
                  <span aria-current="page" className="font-medium text-navy">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-blue">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
