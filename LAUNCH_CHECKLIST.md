# Launch checklist

Do not guess these. The website is built so each item can be filled in without inventing it.

- [x] Logo: header uses `public/aiva_logo.png`. Footer uses `public/aiva_logo_dark_bg.png`. Favicon files are `app/icon.png` and `app/apple-icon.png`, cropped from the light mark.
- [ ] Confirm whether the product is publicly launched. Set `NEXT_PUBLIC_CTA_MODE` to `demo` or `waitlist` and rebuild.
- [ ] Add a real contact email, company legal name, address, and any confirmed social profiles. Email goes in `CONTACT_EMAIL`. Social links go in `socialLinks` in `data/site.ts`. Do not add a handle that has not been confirmed.
- [ ] Set each integration in `data/integrations.ts` to `live`, `beta`, `planned`, or `unavailable`. The site currently marks every channel as planned.
- [ ] Confirm whether video generation and ad publishing are available. The campaign page describes them as capabilities under confirmation until this is decided.
- [ ] Confirm the approval and safety controls the product actually enforces, and update the agent copy in `data/agents.ts` if the live behavior differs from the designed workflow.
- [ ] Choose a form destination and set `FORM_DELIVERY` to `webhook`, `email`, or `database`, with the matching secrets. Create `demo_requests` from `db/demo_requests.sql` before using database mode. Confirm spam protection beyond the built-in honeypot and per-process rate limit if you need a shared limiter.
- [ ] Have counsel review `app/privacy/page.tsx` and `app/terms/page.tsx`, including consent language and data-processing terms. Remove `index: false` from those pages after the drafts are replaced with final documents, and add the pages to `indexableRoutes` in `data/navigation.ts`.
- [ ] Finish hosting: DNS for aivagrowth.com, TLS, analytics (`NEXT_PUBLIC_ANALYTICS_ID` and `NEXT_PUBLIC_ANALYTICS_SRC`), and monitoring. No analytics vendor is installed until both values are set and a visitor consents.
