# AIVA Growth Website Update: Cursor Implementation Brief

## 1. Mission
Update the **existing** website at `aivagrowth.com` to communicate a clear two-option business model for **AIVA Growth**. Preserve the current site's visual quality, working functionality, and reusable components. This is a positioning and conversion update, **not** a rebuild.

**Approved positioning:** AIVA Growth is an **AI Growth Workforce** for B2B service businesses, powered by an AI marketing and sales agent platform.

**Approved tagline:** **Your AI Team for Business Growth.**

**Two ways to work with AIVA Growth:**
1. **Self-Service AI Platform**: The customer operates the AI agents through a monthly SaaS subscription.
2. **Fully Managed AI Growth**: The AIVA Growth team configures, supervises, and operates the agents for the customer through a monthly managed-services subscription.

**Explicit exclusions for this launch:** NO pay-as-you-go, usage-credit storefront, hybrid package, individual-agent pricing, performance-based billing, or agency/white-label plan. Do not mention these models in public-facing copy, menus, pricing cards, FAQs, or structured metadata. Do not introduce a third commercial option.

## 2. Source of truth and implementation discipline
- Inspect the repository before editing. Identify framework, routes, shared navigation, content/data configuration, styling, forms, and existing tests.
- Preserve current design language, responsive behavior, accessibility, SEO conventions, and existing functioning integrations.
- Use the existing site as a base, not a blank template.
- Site reviewed November 13, 2026. Existing site has: Platform, AI Agents (eight pages), Solutions, How It Works, About, Contact, legal pages, homepage preview, integration-status notices, and demo form.
- Rename visible branding consistently from `AIVAgrowth` to **`AIVA Growth`**, including page titles, metadata, header, footer, alt text, FAQ, and Open Graph where appropriate. Keep the domain `aivagrowth.com` and existing routes unless there is a compelling technical reason to change them.
- Do not modify logo image artwork unless the repo already contains an approved asset with the spaced name; adjust accessible labels and text around it instead.
- Do not invent product availability, customer testimonials, results, integrations, technical capabilities, trial access, or payment flows.
- Keep existing explicit disclosures that dashboard numbers are illustrative and integrations are planned where applicable.

## 3. Business model and pricing to communicate
### Offer A: Self-Service AI Platform
- **Label:** Self-Service AI Platform
- **One-liner:** Run your own AI growth team.
- **Description:** Use one workspace to prepare content, manage leads, coordinate customer conversations, and review performance with specialized AI agents. Your team controls setup, approvals, and daily operation.
- **Commercial model:** Monthly SaaS subscription.
- **Featured proposed plan:** **Growth, $149/month**.
- **CTA:** `Request a Platform Demo` (link to the existing contact/demo form, preselecting Self-Service where feasible).
- **Optional future tier references:** Starter $49/month; Business $349/month. Only show these if an existing pricing implementation makes them easy to support and clearly mark plan inclusions as subject to confirmation. Prefer **one featured $149/month plan** for launch clarity.
- Do not promise all eight agents or specific usage allowances in the $149 plan unless product configuration confirms them. The public plan card may say `Scope and supported integrations confirmed during onboarding`.

### Offer B: Fully Managed AI Growth
- **Label:** Fully Managed AI Growth
- **One-liner:** We run your AI growth team for you.
- **Description:** The AIVA Growth team helps set up, operate, review, and improve agreed marketing and sales workflows using the same AI platform, with human oversight and customer approvals.
- **Commercial model:** Monthly managed-services subscription.
- **Featured proposed plan:** **Managed Growth, $799/month**.
- **CTA:** `Discuss Managed Growth` (link to the existing contact/demo form, preselecting Fully Managed where feasible).
- **Scope:** Agreed monthly activities, onboarding, workflow configuration, oversight, and performance review. Exact deliverables are confirmed in the proposal; avoid promises of unlimited content, leads, ad management, or dedicated personnel.
- **External costs:** Advertising spend, third-party messaging/platform charges, and custom integrations are excluded unless separately agreed.
- **Optional smaller package:** Managed Starter from $399/month, but avoid displaying it on the initial main pricing section to preserve the simple two-choice story.

**Pricing display rule:** The $149 and $799 amounts are **proposed starting commercial prices**. Display them as `From $149/month` and `From $799/month` with `Final scope, availability, and terms confirmed during consultation.` Do not claim checkout, instant activation, or a live free trial. If the business has not approved public pricing in the repo/config, add a single centralized flag/config option to switch prices to `Talk to us` without changing component code.

## 4. Homepage changes, in order
### 4.1 Header / navigation
Recommended navigation: `Platform` | `AI Agents` | `Solutions` | `How It Works` | `Pricing` | `Managed Services` | `Contact`.
- Add a `Pricing` anchor or route, depending on current architecture.
- `Managed Services` should link to a substantial homepage section or a dedicated route; use the simplest solution consistent with the site.
- Keep About and legal links accessible, e.g. footer.
- Header CTA: `Book a Demo`.

### 4.2 Hero
Eyebrow: `AI Virtual Agents for Business Growth`

H1: `Your AI Team for Business Growth.`

Supporting copy:
`AIVA Growth brings AI agents together to help B2B service businesses create content, manage leads, follow up with prospects, and keep marketing and sales moving. Run the platform yourself, or let our team manage it for you.`

Primary CTA: `Explore Plans` -> pricing section.
Secondary CTA: `Book a Demo` -> existing contact form.

Under CTAs, show a concise two-option line or small chips:
`Self-Service Platform`  |  `Fully Managed Growth`

Keep the existing illustrative dashboard preview and its clear sample-data disclaimer.

### 4.3 New section immediately after hero: Two ways to grow
Eyebrow: `Choose how you work`
H2: `One AI growth platform. Two ways to use it.`
Intro: `Choose the level of hands-on involvement that works for your business.`

**Card 1: Self-Service AI Platform**
Title: `Run it yourself.`
Body: `Give your team AI agents for content, leads, conversations, and reporting. You manage the workflows, permissions, and approvals in one workspace.`
Details: `Monthly SaaS subscription` / `Your team operates the platform` / `AIVA Growth provides the tools`
CTA: `Explore Self-Service`

**Card 2: Fully Managed AI Growth**
Title: `Let us run it for you.`
Body: `Our team helps configure and operate agreed AI-powered marketing and sales workflows, reviews output, and works with you to improve the process.`
Details: `Monthly managed service` / `Our team operates agreed workflows` / `You retain approval and business control`
CTA: `Explore Managed Growth`

Use a balanced two-column design on desktop, stacked on mobile. Neither model should appear as a third-party add-on or a separate platform.

### 4.4 Outcome section
Replace feature-first messaging where helpful with customer outcomes, without promising numerical results:
- `Spend less time on repetitive marketing tasks.`
- `Respond to incoming leads with a clearer process.`
- `Keep content, outreach, and conversations connected.`
- `Review what is happening before deciding what to do next.`

Keep the existing eight-agent directory and links. Explain that these are platform capabilities and **not automatically included in every plan**.

### 4.5 How it works: show model-specific paths
Use two tabs or adjacent columns, not a confusing combined process.

**Self-Service**
1. `Discuss your needs and confirm access.`
2. `Connect supported channels and configure workflows.`
3. `Review and approve agent output.`
4. `Track leads, conversations, and activity.`

**Fully Managed**
1. `Tell us your goals and current process.`
2. `Agree on scope, channels, and approval rules.`
3. `Our team operates and reviews the agreed workflows.`
4. `Review progress together and refine the process.`

Keep permissions, consent, and approval safeguards visible for both paths.

### 4.6 Pricing section
Eyebrow: `Simple ways to get started`
H2: `Choose your AI growth team.`

**Pricing card 1**
`Self-Service AI Platform`
`From $149/month`
`For teams that want to operate AI agents themselves.`
Inclusions phrased safely: `Shared AI growth workspace`, `Agent-assisted marketing and sales workflows`, `Customer-controlled reviews and approvals`, `Demo-led onboarding and scope confirmation`.
CTA: `Request a Platform Demo`.

**Pricing card 2**
`Fully Managed AI Growth`
`From $799/month`
`For businesses that want our team to operate agreed workflows.`
Inclusions phrased safely: `Platform access for agreed workflows`, `Initial workflow setup and configuration`, `Ongoing human oversight and execution`, `Regular review of activities and next steps`.
CTA: `Discuss Managed Growth`.

Footnote: `Prices are starting points. Final scope, agent access, onboarding fees, integrations, third-party charges, and terms are confirmed before engagement. Advertising budgets are separate.`

Do not add a checkout or fake payment buttons.

### 4.7 Managed Services section
H2: `Your AI growth team, managed by us.`
Body: `You focus on serving customers. We help run the agreed marketing and sales workflows behind the scenes, using AIVA Growth agents with human review and clear approval rules.`
Use a short process visual: `Plan → Configure → Operate → Review → Improve`.
Add a scope boundary: `A managed subscription covers the agreed work, not unlimited marketing services or guaranteed lead volumes.`
CTA: `Talk About Managed Growth`.

### 4.8 Final CTA
H2: `Ready to put an AI growth team to work?`
Body: `Tell us what you want to improve. We’ll help you choose between operating AIVA Growth yourself and having our team manage the workflows.`
CTA: `Book a Demo`.

## 5. Existing pages to update
- **Platform:** Explain the underlying SaaS workspace and that it also powers the managed offering. Avoid implying every agent/integration is live.
- **AI Agents index and detail pages:** Retain all eight agent descriptions, accurate statuses, permissions, and disclaimers. Add a small contextual CTA: `Use this capability in your own workspace or discuss a managed workflow.` Do not invent inclusion or readiness.
- **Solutions:** Emphasize B2B service SMEs, IT services, consultancies, agencies, and professional services. Show relevant business outcomes and both ways of delivery.
- **How It Works:** Separate Self-Service and Fully Managed journeys, with approval gates.
- **About:** Explain AIVA Growth as an AI Growth Workforce powered by one platform, not a conventional marketing agency and not a generic chatbot.
- **Contact:** Add required field `Interested in` with exactly `Self-Service AI Platform`, `Fully Managed AI Growth`, `Not sure yet`. Ensure value is included in form submission payload and any configured delivery. Do not break existing form behavior or falsely report submission success.
- **FAQ:** Add model, price, setup, approvals, and availability questions; remove any contradictory commercial language.
- **Footer/legal:** Update visible brand spelling. Preserve current legal wording and status notices; flag legal text for review rather than silently changing legal commitments.

## 6. FAQ copy
**What is AIVA Growth?**
`AIVA Growth is an AI growth workforce for B2B service businesses. It brings specialized AI agents together to support marketing, lead management, customer conversations, and reporting.`

**What are the two ways to use AIVA Growth?**
`You can operate the AI platform yourself with a monthly SaaS subscription, or choose a fully managed monthly service where our team operates agreed workflows with your oversight.`

**What is the difference between the plans?**
`With Self-Service, your team runs the workflows. With Fully Managed, our team handles the agreed setup and ongoing operations. Both use the AIVA Growth platform.`

**Can I approve content and messages before they are sent?**
`Yes. Workflows are designed around permissions and approval rules. What can be automated depends on the supported integrations and the controls agreed for your account.`

**Are advertising and messaging charges included?**
`Advertising spend and external messaging or platform fees are separate unless explicitly included in your proposal.`

**Is every agent and integration available today?**
`No. Some capabilities and integrations are planned or subject to configuration. We confirm what is available and suitable for your workflow during the demo.`

**How do I get started?**
`Book a demo and tell us about your business. We’ll discuss whether Self-Service or Fully Managed is the better fit and confirm scope and availability.`

## 7. SEO and structured content
- Homepage title suggestion: `AIVA Growth | Your AI Team for Business Growth`
- Meta description: `AI agents for B2B marketing and sales. Run AIVA Growth yourself with a monthly platform subscription, or choose fully managed AI growth services.`
- Update OG title/description and any JSON-LD organization/product references to `AIVA Growth`.
- Preserve canonical URLs and existing redirects. Do not claim awards, testimonials, partner status, or guaranteed outcomes.
- If a pricing route is created, ensure navigation, sitemap, and internal links are updated.

## 8. UI/UX guidance
- Preserve current typography, colors, visual rhythm, and dashboard preview; make the two commercial options immediately clear above the fold and again in pricing.
- Use the same components for pricing cards, CTAs, badges, and FAQ items; avoid duplicate custom implementations.
- Design for desktop and mobile; check 320px, 375px, 768px, and 1440px widths.
- Ensure buttons have clear destinations, keyboard focus, sufficient contrast, and semantic headings.
- Prefer concise copy and generous whitespace. Avoid marketing hype such as `guaranteed 10x growth`, `fully autonomous`, or `zero human involvement`.

## 9. Engineering tasks
1. Audit existing pages, components, content configuration, routing, and form delivery.
2. Centralize offer names, starting prices, CTAs, and availability notes in one configuration/content module.
3. Implement new homepage sections and adjust navigation.
4. Update relevant internal pages and FAQs consistently.
5. Extend contact/demo form with selected offer, including query-string or state preselection if supported.
6. Update SEO metadata, footer, accessibility labels, and site copy to `AIVA Growth`.
7. Run project lint, typecheck, tests, and production build where available; fix regressions.
8. Verify all CTAs and form payloads; do not mark a submission successful if delivery is not configured.
9. Provide a concise summary of modified files, tested routes, and any items needing business confirmation.

## 10. Acceptance criteria
- A first-time visitor can understand within 5 seconds that AIVA Growth is an AI growth team for business, offered as **Self-Service** or **Fully Managed**.
- Exactly **two** customer-facing business models are presented.
- Self-Service clearly means monthly SaaS, customer-operated.
- Fully Managed clearly means monthly recurring service, AIVA Growth-operated with customer oversight.
- The pricing area displays `From $149/month` and `From $799/month`, or consultative placeholders if prices are deliberately disabled via configuration.
- No pay-as-you-go, hybrid, credits storefront, per-agent checkout, performance pricing, or white-label offers are shown.
- Existing eight-agent pages remain available and their actual capability/integration status is not overstated.
- All brand mentions read `AIVA Growth` except URLs, file names, or identifiers where changing them would break functionality.
- Demo form can capture the preferred business model and accurately communicates delivery status.
- Responsive layout, SEO, accessibility, and production build remain intact.

## 11. Instructions for Cursor
**Implement these changes directly in the current repository.** Start by inspecting the codebase and briefly listing the files/components you intend to modify. Then make the changes, run available checks, and report what changed. Do not stop at a plan or generate an unrelated standalone mockup. When the brief conflicts with actual implemented capabilities, preserve truthfulness and surface the discrepancy rather than making unsupported claims. Ask for clarification only if blocked by a material business or technical decision.
