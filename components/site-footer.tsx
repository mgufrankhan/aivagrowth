import Link from "next/link";
import { Suspense } from "react";
import { BrandLockup } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { CopyrightYear } from "@/components/copyright-year";
import { agentNav, footerCompany, footerLegal, footerProduct } from "@/data/navigation";
import { siteConfig, socialLinks } from "@/data/site";
import { publishedContactEmail } from "@/lib/form-status";

export function SiteFooter() {
  const email = publishedContactEmail();

  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <BrandLockup tone="inverse" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#d5e2f7]">{siteConfig.tagline}</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-[#d5e2f7]">{siteConfig.supportingLine}</p>
          {email ? (
            <a href={`mailto:${email}`} className="mt-4 inline-block text-sm font-medium text-cyan">
              {email}
            </a>
          ) : null}
          {socialLinks.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-cyan"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <FooterColumn title="Product" items={footerProduct} />
        <div>
          <FooterColumn title="Agents" items={agentNav} />
        </div>
        <div className="space-y-8">
          <FooterColumn title="Company" items={footerCompany} />
          <FooterColumn title="Legal" items={footerLegal} />
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-sm text-[#d5e2f7] sm:flex-row sm:items-center sm:justify-between">
          <p>
            ©{" "}
            <Suspense fallback={<span className="inline-block w-[4ch]" />}>
              <CopyrightYear />
            </Suspense>{" "}
            {siteConfig.name}. All rights reserved.
          </p>
          <p>Capabilities depend on configuration, permissions, and availability.</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-[#d5e2f7] hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
