import type { Metadata, Viewport } from "next";
import { Geist, Syne } from "next/font/google";
import type { ReactNode } from "react";
import { Suspense } from "react";
import { AnalyticsLoader } from "@/components/analytics-loader";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { HeaderFallback, SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";
import { organizationJsonLd, softwareJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AIVA Growth | Your AI Team for Business Growth",
    template: "%s | AIVA Growth",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#071A43",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${syne.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <JsonLd data={[organizationJsonLd(), softwareJsonLd()]} />
        <Suspense fallback={<HeaderFallback />}>
          <SiteHeader />
        </Suspense>
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
