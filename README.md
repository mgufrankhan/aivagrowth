# AIVAgrowth website

Marketing site for [aivagrowth.com](https://aivagrowth.com). It describes an AI marketing and sales workspace for B2B service businesses. It does not include a signed-in product, invented customers, prices, or logos of other companies.

## Requirements

- Node.js 20 or newer
- npm

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` starts the local site
- `npm run lint` runs ESLint
- `npm run typecheck` runs the TypeScript compiler
- `npm run build` creates the production build
- `npm start` serves that build

## Update the copy

Marketing content lives in typed files under `data/`:

| File | What it controls |
| --- | --- |
| `data/site.ts` | Name, tagline, canonical URL, CTA mode fallback, logo paths, social links |
| `data/agents.ts` | The eight agents, including detail-page copy and SEO descriptions |
| `data/faqs.ts` | Homepage questions |
| `data/integrations.ts` | Channel names and `live`, `beta`, `planned`, or `unavailable` status |
| `data/workflow.ts` | The four-step flow and the connected workspace |
| `data/solutions.ts` | Audiences, solution examples, and homepage value cards |
| `data/navigation.ts` | Header, footer, and sitemap paths |
| `data/dashboard.ts` | Illustrative sample figures in the homepage preview |

Do not add testimonials, customer logos, prices, usage counts, certifications, or a claim that an integration is live unless that is confirmed. Planned is the honest default.

## Logo

The header uses `public/aiva_logo.png`. The footer uses `public/aiva_logo_dark_bg.png`. Both are the supplied lockups with the empty margin trimmed. Source files are `aiva_logo.png` and `aiva_logo_dark_bg.png` in the project root. The favicon and apple icon are the mark from the light lockup (`app/icon.png`, `app/apple-icon.png`).

To swap the artwork, replace the public files and update the width and height values in `data/site.ts`. Set `wordmarkSrc` to `null` to fall back to the text wordmark.

## Call to action

`NEXT_PUBLIC_CTA_MODE=demo` labels buttons “Request a Demo”. `waitlist` labels them “Join Waitlist”. The value is public and is included at build time, so rebuild after changing it.

## Inquiry form

The contact form checks entries in the browser and again on the server. It includes a honeypot field and a best-effort limit of 5 submissions per network address per 15 minutes inside one server process. That limiter is not shared across multiple servers.

`FORM_DELIVERY` chooses the destination:

- `webhook` posts JSON to `FORM_WEBHOOK_URL`. Set `FORM_WEBHOOK_SECRET` if the receiver should require `Authorization: Bearer <secret>`. Production requires `https`. Redirects are not followed.
- `email` sends a plain-text message through the Resend API. Set `RESEND_API_KEY`, `FORM_EMAIL_FROM`, and `FORM_EMAIL_TO`.
- `database` inserts a row with the `postgres` package. Create the table from `db/demo_requests.sql` first, then set `DATABASE_URL`.
- `local`, or an empty value while developing, appends one JSON line to `.data/demo-requests.ndjson`. The form tells you this is development-only. The `.data` directory is gitignored.

In production, an empty or `local` value does not store the inquiry and does not show a success confirmation. A delivery error also does not show a success confirmation. Honeypot submissions are discarded and receive only a generic thank-you, so the trap is not confirmed.

Set `CONTACT_EMAIL` only when a real address exists. It is shown on the contact page and in the footer. It is not invented from the domain.

## Analytics

Leave `NEXT_PUBLIC_ANALYTICS_ID` and `NEXT_PUBLIC_ANALYTICS_SRC` empty to ship with no analytics. If both are set, and the script URL starts with `https://`, a banner asks before the script is added. The script receives `data-analytics-id`. No vendor snippet is included by default.

## SEO

Each route sets its own title, description, and canonical URL under `https://aivagrowth.com`. `app/sitemap.ts` and `app/robots.ts` generate the sitemap and robots file. Draft privacy and terms pages are `noindex` until counsel replaces them. Organization structured data includes the name, URL, description, and logo. It omits reviews, ratings, prices, and social profiles.

## Production

Responses send a content security policy, `X-Frame-Options: DENY`, `nosniff`, a strict referrer policy, and a locked-down permissions policy. HTTPS and HSTS stay with the host so a local production server on `http://localhost` is not forced onto HTTPS.

On production startup the server logs a warning when `FORM_DELIVERY` cannot actually deliver, and when `CONTACT_EMAIL` is empty. Request failures are logged with the method, path, and error digest. Inquiry contents are not written to the log.

`npm run build` still succeeds without those variables. A deployed site with no delivery destination keeps the form on screen and refuses the submission. Set the host environment from `.env.example` before expecting inquiries to arrive. The host should terminate TLS for `aivagrowth.com`. Items that still need a confirmed business or legal decision stay in `LAUNCH_CHECKLIST.md`.

## Deploy

The site is a Next.js App Router project and can run on Vercel or another Node host.

1. Set the environment variables from `.env.example` in the host, not in the repository.
2. Use `webhook`, `email`, or `database` for `FORM_DELIVERY` before launch.
3. Build with `npm run build`.
4. Point `aivagrowth.com` at the host and confirm TLS.

Changing a public variable such as the CTA mode requires a new build. Server delivery variables are read when a form is submitted, but the notice on the contact page is rendered with the environment available to that render.

Items that still need a human decision are listed in `LAUNCH_CHECKLIST.md`.
