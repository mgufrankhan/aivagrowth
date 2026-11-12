import type { NextConfig } from "next";

function analyticsOrigin(): string | null {
  const src = process.env.NEXT_PUBLIC_ANALYTICS_SRC?.trim();
  if (!src) {
    return null;
  }
  try {
    const url = new URL(src);
    return url.protocol === "https:" ? url.origin : null;
  } catch {
    return null;
  }
}

function contentSecurityPolicy(): string {
  const dev = process.env.NODE_ENV !== "production";
  const analytics = analyticsOrigin();
  const scriptSrc = ["'self'", "'unsafe-inline'", dev ? "'unsafe-eval'" : null, analytics]
    .filter(Boolean)
    .join(" ");
  const connectSrc = ["'self'", dev ? "ws: wss:" : null, analytics].filter(Boolean).join(" ");

  return [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' blob: data:",
    "font-src 'self'",
    `connect-src ${connectSrc}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-src 'none'",
    "frame-ancestors 'self' https://vercel.com https://*.vercel.com https://vercel.live",
    "worker-src 'self'",
  ].join("; ");
}

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Content-Security-Policy", value: contentSecurityPolicy() },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
