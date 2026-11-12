# AIVAgrowth Website: Codex / Cursor Build Brief

> **Instruction to coding agent:** Build a polished, responsive, production-quality marketing website for **AIVAgrowth** at **aivagrowth.com**. Implement the website, not merely a mockup. Use the requirements below as the source of truth. Do not invent customer logos, testimonials, prices, usage statistics, certifications, or completed integrations. Where information is unavailable, use clearly labeled configurable placeholders or omit the section.

## 1. Brand and product

- **Brand display:** `AIVAgrowth` (uppercase **AIVA**, lowercase **growth**).
- **Domain:** `aivagrowth.com` (user reports it is registered).
- **Brand explanation:** *AI Virtual Agents for Business Growth*. This is a brand interpretation, not a strict letter-by-letter acronym.
- **Primary tagline:** **Your AI Team for Business Growth.**
- **Supporting line:** *Create content, run campaigns, generate leads, engage customers, and understand performance from one AI-powered platform.*
- **Positioning:** An AI-powered marketing and sales automation platform for B2B service-based SMEs, with multiple specialized agents working together. Present as a practical growth platform, not an ERP replacement or generic chatbot.
- **Tone:** Clear, credible, modern, approachable, outcome-oriented. Avoid exaggerated claims and excessive AI jargon.
- **Primary conversion:** Request a demo / join the waitlist (make the CTA configurable). Do not imply the product is publicly launched unless confirmed.
- **Secondary conversion:** Explore AI agents / see how it works.

## 2. Visual direction

Use the approved visual concept as inspiration: a stylized blue gradient letter **A** crossed by an upward-curving orange growth arrow, with a navy `AIVA` and bright-blue `growth` wordmark. If the actual logo asset is supplied in the repository, use it; otherwise create a **temporary text-based wordmark** and an explicitly replaceable placeholder icon. Do not falsely present a reconstructed icon as the final approved logo.

- Primary navy: `#071A43`
- Primary blue: `#1265F5`
- Vivid cyan: `#20C8F4`
- Growth orange: `#FF8A1E`
- Background: `#F8FAFF` / white
- Text: `#101B35`
- Muted text: `#5C6880`
- Border: `#E3EAF4`
- Optional subtle lavender accents, sparingly.
- Light-first design, with a few navy sections for contrast. Keep the interface **decent and premium**, not overly colorful or neon-heavy.
- Clean SaaS typography (e.g. Inter or Geist), generous whitespace, restrained gradients, rounded cards, crisp icons, subtle shadows, accessible contrast.
- Avoid a cartoon robot as the dominant brand identity. If an AI assistant illustration is used, keep it secondary and tasteful.
- Hero should show a believable product dashboard mockup, built with HTML/CSS/components, not fake screenshots of a live system. Label sample metrics as illustrative where appropriate.
- Build desktop, tablet, and mobile layouts. No horizontal overflow.

## 3. Site structure and routes

Build these routes with consistent navigation and footer:

1. `/` — Home
2. `/platform` — Unified platform overview
3. `/ai-agents` — All agents overview
4. `/ai-agents/content` — Content Generation & Scheduling
5. `/ai-agents/campaigns` — Campaign Generation & Publishing
6. `/ai-agents/performance-marketing` — Performance Marketing
7. `/ai-agents/sales-leads` — Sales & Lead Generation
8. `/ai-agents/whatsapp` — WhatsApp Marketing
9. `/ai-agents/email` — Email Marketing
10. `/ai-agents/analytics` — GA4 Website Analytics
11. `/ai-agents/inbox` — Unified Inbox
12. `/solutions` — Use cases for B2B service SMEs
13. `/how-it-works` — Onboarding and workflow
14. `/about` — Product vision and brand story; do not invent founder details
15. `/contact` — Contact / demo inquiry
16. `/privacy` — Clearly labeled draft privacy policy requiring legal review
17. `/terms` — Clearly labeled draft terms requiring legal review

Optional `/pricing` route only if actual pricing is provided. Otherwise use a "Talk to us about pricing" CTA, without invented plans.

## 4. Homepage sections (in order)

### A. Header
- Logo/wordmark, Platform, AI Agents (dropdown), Solutions, How It Works, About, Contact.
- CTA: **Request a Demo** (or **Join Waitlist** based on a single config value).
- Sticky on scroll, accessible mobile menu.

### B. Hero
- Eyebrow: `AI Virtual Agents for Business Growth`
- H1: **Your AI Team for Business Growth.**
- Supporting copy: **Automate marketing, launch campaigns, generate leads, engage customers, and track results, all from one platform.**
- CTAs: **Request a Demo** and **Explore AI Agents**.
- Visual: an elegant dashboard preview with navigation for Overview, Agents, Campaigns, Leads, Inbox, Analytics. Use clearly marked **illustrative data**, not actual customer performance claims.

### C. Core value proposition
Headline: **One platform. Specialized AI agents. Less manual work.**
Three or four value cards: Save time on repetitive work; Keep marketing and sales connected; Respond to customers faster; Make decisions with better visibility.

### D. Eight capability cards
Present all eight items from Section 5, each with a short outcome-led summary, icon, and link to detail page.

### E. How it works
A simple four-step flow:
1. Connect your business channels and data sources (subject to supported integration availability).
2. Set goals, preferences, and approval rules.
3. Let AI agents prepare and execute approved workflows.
4. Review conversations, campaigns, leads, and performance.

**Important:** Do not imply that the platform can autonomously spend ad budgets, send messages, or publish content without permissions. Show human review and approval options.

### F. Connected workspace
Visualize a unified workflow: Content → Campaigns → Leads → Inbox → Analytics. Explain how a shared workspace can reduce context switching. Do not claim integrations are live unless confirmed.

### G. Audience / use cases
Focus on **B2B service-based SMEs**, including agencies, consultancies, IT services, professional services, and other service businesses. Avoid overcommitting to any vertical-specific features.

### H. Integrations
Show planned/supported integration categories clearly, with status controlled from data config. Candidate channels include LinkedIn, Instagram, Facebook, WhatsApp, Gmail, and Google Analytics 4. **Do not display official brand logos without approved assets and do not imply partner endorsement.** Avoid "one-click integration" claims unless implemented.

### I. FAQ
Cover what AIVAgrowth is, who it is for, how agents work, whether approvals are available, supported integrations, data security, and how to request access. Use careful language where details are not yet established.

### J. Final CTA
Headline: **Put your AI growth team to work.**
Copy: **Tell us about your marketing and sales workflow, and we’ll help you explore where automation can make a difference.**
CTA: **Request a Demo**.

### K. Footer
Brand, tagline, route links, social links if provided, legal links, and copyright year (dynamic). Do not invent email addresses, phone numbers, office locations, or social handles.

## 5. Agent capabilities: accurate scope and page copy

Use these as the canonical capability definitions. Make descriptions easy for nontechnical customers to understand. Where actual backend implementation is not yet confirmed, describe as **platform capabilities / planned workflows**, not verified live functionality.

### 5.1 Content Generation & Scheduling Agent
- Generate marketing content.
- Schedule and publish posts to LinkedIn, Instagram, and Facebook from a unified dashboard, subject to connected accounts and platform permissions.
- Track content performance, engagement, and audience analytics where APIs permit.
- Value proposition: **Plan, create, and manage your content in one place.**

### 5.2 Campaign Generation & Publishing Agent
- Help create marketing videos and advertising campaign assets.
- Prepare and publish advertising campaigns through supported channels and permissions.
- Monitor campaign status and performance.
- Value proposition: **Move from campaign idea to launch with less manual work.**

### 5.3 Performance Marketing Agent
- Monitor advertising performance and highlight stronger and weaker performers.
- Support rule-based pausing/resuming of ads, with configurable thresholds, safeguards, permissions, and approvals.
- Recommend optimization opportunities; never promise guaranteed ROAS or conversions.
- Value proposition: **Spot what works and act with more confidence.**

### 5.4 Sales & Lead Generation Agent
- Discover potential business leads from permitted data sources.
- Support lead organization, qualification, and outreach workflows.
- Respect privacy, consent, and channel policies; no scraping or unsolicited messaging claims.
- Value proposition: **Spend more time on qualified opportunities.**

### 5.5 WhatsApp Marketing Agent
- Create and manage permitted WhatsApp marketing campaigns.
- Engage opted-in customers and prospects through approved WhatsApp business integrations.
- Respect opt-in, template, messaging, and opt-out requirements.
- Value proposition: **Reach customers through conversations they choose to receive.**

### 5.6 Email Marketing Agent
- Draft professional marketing emails.
- Manage email campaigns and customer engagement workflows.
- Include unsubscribe and consent-aware messaging requirements.
- Value proposition: **Create better email campaigns without starting from scratch.**

### 5.7 GA4 Website Analytics
- Connect Google Analytics 4 when authorized.
- View traffic, visitor behavior, engagement, and key website insights.
- Present understandable summaries and trends.
- Value proposition: **Understand how visitors find and use your website.**

### 5.8 Unified Inbox Agent
- Bring customer conversations from supported WhatsApp, Instagram messaging, and Gmail connections into a single inbox.
- Organize and respond to incoming queries; support AI-generated replies and optional approved automation.
- Show human handoff and auditability.
- Value proposition: **One inbox for your customer conversations.**

## 6. Functional requirements

### Demo / waitlist form
Fields: Full name, Work email, Company name, Website (optional), Business type (optional), Main challenge (select), Message (optional), consent checkbox. Validate on client and server. Include loading, success, error, spam prevention (honeypot + rate limit), and accessible labels.

- Do **not** silently discard submissions. Implement a configurable delivery adapter: email provider, database, or webhook, selected by environment configuration.
- If no backend credentials are configured, show a clear development-only notice and keep a documented local test mode; do not display a fake "sent" confirmation in production.
- Never hardcode secrets in the client bundle.

### Content management
Store agent definitions, feature copy, FAQs, navigation, integration statuses, and SEO metadata in typed local data files so nondevelopers can edit them easily. A CMS is not required for v1.

### Analytics
Prepare optional privacy-aware analytics integration; only enable after consent and configuration where required. Do not invent tracking IDs.

### SEO
- Unique title/meta description per route, canonical URLs under `https://aivagrowth.com`.
- Open Graph and Twitter card metadata, sitemap, robots.txt, semantic headings, descriptive alt text.
- Structured data for Organization and SoftwareApplication **only with verified fields**; omit fake reviews, ratings, prices, or social profiles.
- Clean URL structure, fast rendering, proper internal links.
- Homepage SEO title suggestion: `AIVAgrowth | AI Agents for Marketing & Sales Growth`.
- Homepage meta description suggestion: `Meet AIVAgrowth, your AI team for business growth. Explore agents for content, campaigns, lead generation, customer engagement, and analytics.`

### Accessibility and performance
- Aim for WCAG 2.2 AA: keyboard navigation, focus states, contrast, reduced-motion support, labels, semantic structure.
- Optimize images, lazy-load below-fold media, use responsive sizes and font optimization.
- Target Lighthouse scores of 90+ for Performance, Accessibility, Best Practices, and SEO on representative pages, subject to environment constraints.

## 7. Recommended technology

Use this stack unless the existing repository dictates otherwise:

- Next.js App Router + TypeScript
- Tailwind CSS
- Accessible reusable components (shadcn/ui or equivalent)
- Lucide icons
- Framer Motion / Motion for **subtle** animations only
- React Hook Form + Zod for forms
- Server-side route handlers or server actions for secure form processing
- Deployment-ready for Vercel or a standard Node host

Avoid adding a database or authentication system for a public marketing site unless genuinely required. Do not build a fake logged-in product dashboard. The hero dashboard is a **marketing illustration**, not an application.

## 8. Component architecture

Suggested reusable components:
- `SiteHeader`, `MobileNav`, `SiteFooter`
- `Hero`, `DashboardPreview`, `SectionHeading`
- `AgentCard`, `AgentGrid`, `AgentDetailHero`
- `BenefitCard`, `WorkflowSteps`, `IntegrationGrid`
- `FAQAccordion`, `CTASection`, `DemoForm`
- `PageBreadcrumbs`, `StatusBadge`

Keep design tokens centralized. Prefer data-driven rendering over duplicated markup. Include a clear `siteConfig` for brand, URL, contact destinations, CTA mode, and integration statuses.

## 9. Content and trust rules

**Never invent:**
- Customer testimonials, customer logos, case studies, growth percentages, ROI numbers, user counts, uptime guarantees, certifications, pricing, founding dates, or team biographies.
- Claims that an integration, autonomous action, or AI agent is fully operational without evidence.
- Contact email or social accounts simply because the domain exists.

Use realistic but clearly marked **sample data** in product illustrations. If product availability is uncertain, use language such as "Designed to help..." or "Explore capabilities..." rather than "Already used by thousands...".

## 10. Design quality checklist

- Cohesive navy/blue/orange brand, no rainbow UI.
- Elegant typography and excellent mobile readability.
- Strong visual hierarchy and generous whitespace.
- Distinctive hero, not a generic template clone.
- Each agent detail page has its own clear benefit, process, and CTA.
- Product mockup is consistent with the eight listed capabilities.
- CTAs are visible but not intrusive.
- Footer and legal links work.
- No broken images, placeholder lorem ipsum, or dead buttons.

## 11. Implementation sequence

1. Inspect repository and existing assets; preserve working code and conventions.
2. Initialize the stack only if the project is empty.
3. Define theme tokens, typography, brand config, and reusable layout.
4. Build homepage to polished desktop and mobile quality.
5. Build the platform, agents listing, and eight agent detail pages from typed content data.
6. Build solutions, how-it-works, about, contact, and legal draft pages.
7. Implement secure lead capture with configurable delivery and clear test behavior.
8. Add SEO, accessibility, loading/error states, and performance optimizations.
9. Run lint, typecheck, build, and any available tests; fix errors.
10. Review at 375px, 768px, 1024px, and 1440px widths; correct spacing and overflow.
11. Provide a README with setup, environment variables, how to replace the logo, how to update content, form delivery configuration, and deployment instructions.

## 12. Definition of done

- All required routes render and link correctly.
- Responsive site with polished layouts and no overflow.
- All eight capabilities represented accurately.
- Lead form works in configured mode; production does not falsely report successful delivery.
- No invented proof points or unsupported live-product claims.
- SEO metadata and sitemap are generated.
- Accessibility and reduced-motion considerations implemented.
- `npm run lint`, `npm run build`, and TypeScript checks pass (or equivalent project scripts).
- Clear README and `.env.example` provided, with no credentials committed.

## 13. Items to confirm before launch

Leave these in an explicit `LAUNCH_CHECKLIST.md` rather than guessing:

- Final logo SVG/PNG and favicon assets
- Confirmed product launch status and whether CTA should be Demo or Waitlist
- Real contact email, company information, and social handles
- Which integrations are live, beta, planned, or unavailable
- Whether video generation and ad publishing are live capabilities
- Supported AI automation approval and safety controls
- Real form delivery endpoint / inbox and spam protection
- Legal review of privacy policy, terms, consent language, and data processing
- Final hosting, domain DNS, SSL, analytics, and monitoring setup

---

## Final instruction to Codex / Cursor

**Proceed to implement the full website now.** Make sensible design decisions within this brief. Do not stop at a plan or ask for approval for routine styling choices. Where a real integration, brand asset, or legal fact is missing, build a clearly configurable interface and document the dependency. Deliver a runnable, polished website with a clean codebase, working navigation, responsive pages, and a verified build.
