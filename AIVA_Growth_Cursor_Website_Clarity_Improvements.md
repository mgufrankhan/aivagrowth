# AIVA Growth Website Clarity Improvement Brief for Cursor

## Objective
Update the existing AIVA Growth website to make the product, two buying options, and next steps immediately understandable. This is an **incremental content and UX improvement**, not a redesign or rebuild.

**Brand:** AIVA Growth  
**Tagline:** Your AI Team for Business Growth.  
**Core positioning:** An AI growth workforce for marketing and sales. Customers can operate the platform themselves or have AIVA Growth operate agreed workflows for them.

## Non-negotiable business decisions
- Offer exactly **two commercial models** on the public website:
  1. **Self-Service AI Platform**, starting at **$149/month**. Customer operates the platform and AI agents.
  2. **Fully Managed AI Growth**, starting at **$799/month**. AIVA Growth team operates agreed marketing and sales workflows, with client approvals where needed.
- Do **not** introduce pay-as-you-go, hybrid, per-agent subscriptions, white-label, or performance-based pricing.
- Do not promise leads, revenue, conversions, or results.
- Do not claim integrations, automation capabilities, or agent features are live unless verified in the codebase or confirmed by the product owner.
- Do not invent specific monthly deliverable quotas, usage credits, user seats, included integrations, onboarding terms, setup fees, contract minimums, or service-level guarantees. Where these are undefined, use clear **“Scope confirmed during consultation”** wording or an internal TODO, rather than fabricated numbers.
- Keep the eight-agent architecture and existing routes where useful.
- Preserve the existing visual identity, logo, colors, responsive layout, SEO metadata, analytics, working forms, and functionality.

## Working method
1. Audit the current routes, navigation, components, pricing copy, and CTA destinations before editing.
2. Identify which claims describe live functionality versus planned or pilot capabilities.
3. Reuse existing components and styles. Make focused changes rather than rewriting the application.
4. Implement the page changes below.
5. Run project lint, typecheck, tests, and build where available; fix any issues introduced.
6. Provide a concise change log listing modified files, verification results, and unresolved commercial decisions.

## 1. Homepage: explain the offer above the fold (P0)

### Hero
**Headline:** Your AI Team for Business Growth.

**Subheading:** Create marketing content, manage campaigns, organize leads, follow up with customers, and understand performance with AI-powered workflows.

**Support line:** Run the platform yourself, or let our team manage it for you.

**Primary CTA:** Explore AI Platform → existing platform page.

**Secondary CTA:** Explore Managed Services → existing managed-services page.

Avoid generic claims such as “revolutionize growth,” “10x results,” or “fully autonomous marketing.”

### Immediately below hero: Two Ways to Work With Us
Create two balanced, easily scannable cards:

**Self-Service AI Platform**  
**From $149/month**  
*You operate the agents.*  
Use AI-assisted workflows to prepare content, manage marketing activities, organize leads, and review performance. Available features and integrations depend on current product readiness.  
**CTA:** Request Platform Demo.

**Fully Managed AI Growth**  
**From $799/month**  
*We operate agreed workflows for you.*  
Our team plans, configures, runs, and reviews agreed content, campaign, lead-management, and follow-up activities, with your approval where required.  
**CTA:** Discuss Managed Services.

Add a concise note: “Final scope, supported channels, and any external costs are confirmed before onboarding.”

### Homepage section order
1. Hero
2. Two Ways to Work With Us
3. What AIVA Growth Helps You Do: content, campaigns, leads, follow-ups, reporting
4. See the Platform: actual screenshots if available
5. Meet the AI Agents: short summaries, not deep technical explanations
6. How It Works: short self-service and managed journeys
7. Who It’s For: B2B service companies, IT services, consultancies, agencies, professional services
8. FAQs
9. Final dual CTA

Remove duplicated copy and repeated feature grids. Keep the page short and concrete.

## 2. Pricing page: compare what customers buy (P0)
Show **two** primary pricing cards, not a confusing multi-tier matrix.

| | Self-Service AI Platform | Fully Managed AI Growth |
|---|---|---|
| Starting price | $149/month | $799/month |
| Who operates it | Your team | AIVA Growth team |
| Main value | AI platform and workflows | Platform plus ongoing managed execution |
| Setup | Customer-led with agreed onboarding support | AIVA Growth configures agreed workflows |
| Approval | Customer controls actions | Customer approves important actions |
| Scope | Confirmed during demo | Confirmed in service proposal |
| CTA | Request Platform Demo | Discuss Managed Services |

Below the cards, add **What is included / What is confirmed during onboarding**. Clearly distinguish confirmed included capabilities from items requiring scoping.

### Commercial questions to resolve internally before publishing detailed inclusions
- Which agents are live and included in the $149 offer?
- Number of users and connected accounts?
- Monthly AI usage or fair-use limits?
- Supported social channels and integrations?
- Whether onboarding is included?
- Managed monthly post, campaign, and reporting quantities?
- Supported follow-up channels and human review time?
- Setup fee, contract minimum, and cancellation policy?
- Whether taxes, ad spend, WhatsApp/email provider charges, and other third-party fees are excluded?

**Do not fabricate answers.** If a detail is not verified, display “Defined in your agreed plan” where appropriate, and leave a developer-facing TODO list.

## 3. Managed Services page: lead with deliverables (P0)

**Headline:** We Manage Your Marketing and Sales Workflows Using AI.

**Subheading:** Our team uses AIVA Growth to create content, coordinate agreed campaigns, support lead follow-up, and review results. You stay informed and approve important actions.

**Price:** Starting at $799/month.

### What we manage
Use five simple service cards or a compact table:
- **Content Management:** Prepare and schedule approved marketing content.
- **Campaign Management:** Plan and operate agreed campaigns on supported channels.
- **Lead Management:** Organize and qualify incoming enquiries for follow-up.
- **Customer Follow-up:** Configure and manage approved email or WhatsApp workflows where supported.
- **Performance Reporting:** Review activity, lead handling, and campaign performance.

Do not imply every listed activity is included without limits in the base price. Add: “Your monthly deliverables, channels, review cadence, and responsibilities are defined in the service proposal.”

### Page order
1. Headline, short explanation, starting price, CTA
2. What We Manage
3. What the Client Does: provides access/assets, approves key content/actions, responds to sales-ready leads
4. What’s Included and What’s Scoped: specific quantities agreed in proposal
5. Simple delivery process: Discover → Agree Scope → Configure → Operate & Review
6. External costs and exclusions (ad spend, third-party messaging fees, custom integrations if applicable)
7. FAQs
8. Discuss Managed Services CTA

Move operational process and governance details below the tangible service description.

## 4. Platform page: show the software (P0)
Use real screenshots from the existing product **only if available**. Candidate views:
- Overview dashboard
- Agent workspace
- Content calendar
- Lead management
- Unified inbox
- Analytics

For each image, include a plain-English caption explaining the action or output. If no real screenshot is available, **do not generate a fake UI and present it as real**. Keep an accurately labeled “Illustrative preview” only if one already exists, and add a TODO to replace it with verified screenshots.

Keep technical details below the practical use cases. If possible, link to an existing working product demo. Do not invent a demo video or destination.

## 5. AI Agents: focus on outputs (P1)
Keep all eight agents but simplify their public descriptions:

| Agent | Plain-English description |
|---|---|
| Content Agent | Creates drafts of social posts and content calendars. |
| Campaign Agent | Helps plan and manage marketing campaigns. |
| Performance Agent | Reviews campaign performance and suggests improvements. |
| Sales & Lead Agent | Organizes leads, supports qualification, and recommends follow-ups. |
| WhatsApp Agent | Supports approved customer conversations and follow-up workflows. |
| Email Agent | Helps prepare email campaigns and follow-up sequences. |
| Analytics Agent | Explains website and marketing performance data. |
| Unified Inbox Agent | Helps teams manage customer conversations in one place. |

On agent cards/detail pages, answer:
1. What does it do?
2. What output does the customer receive?
3. What business problem does it address?

Show **Available / Pilot / Planned** status when verified. Never silently turn planned integrations into live claims. If status is uncertain, ask for confirmation rather than guessing.

## 6. How It Works: two simple journeys (P1)

**Self-Service**
1. Connect supported business accounts.
2. Configure available agents and workflows.
3. Run and review marketing activities.
4. Track results in the platform.

**Fully Managed**
1. Tell us about your business and goals.
2. Agree on services, channels, and monthly scope.
3. Our team configures and operates workflows.
4. Approve key actions and review reports.

Keep a short note about permissions and human approvals. Move lengthy technical governance detail to FAQs or docs.

## 7. Navigation and CTA cleanup (P1)
Preferred primary navigation:
**Platform | AI Agents | Managed Services | Pricing | Book Demo**

Move How It Works and Solutions to footer or secondary navigation if this can be done without losing important pages or SEO access.

Use consistent CTA wording throughout:
- Self-service: **Request Platform Demo**
- Managed: **Discuss Managed Services**
- General navigation: **Book Demo**

Every CTA must go to a real working route, form, or booking link. If an appropriate destination does not exist, use an existing contact form with a preselected enquiry type rather than a dead link.

For forms, distinguish enquiry type: Platform Demo vs Managed Services. Capture only essential fields: name, work email, company, website (optional), and brief requirement. Preserve existing privacy/consent handling.

## 8. FAQs to answer directly (P1)
- What is AIVA Growth?
- What is the difference between the platform and managed services?
- Do I need a marketing team to use the platform?
- What does the $149/month starting price cover?
- What does the $799/month starting price cover?
- Are ad spend and third-party fees included?
- Which integrations are available now?
- Will AIVA Growth publish or message customers without approval?
- How do I get started?

Only provide specific contractual or technical answers when supported by current policy and product implementation. Otherwise state that details are confirmed during consultation.

## 9. Copy and UX standards
- Write for nontechnical SME owners, not AI developers.
- Prefer “what you get” over “agent orchestration” or architecture explanations.
- Use short sentences, clear headings, and concrete actions.
- Avoid repetitive slogans and unverified outcome claims.
- Ensure prices always say **starting at/from**, unless an exact scope is published.
- Make both commercial paths equally visible on mobile and desktop.
- Preserve accessibility: heading hierarchy, button labels, keyboard navigation, contrast, image alt text.
- Keep page titles, descriptions, canonical URLs, and structured data accurate after changes.

## 10. Acceptance criteria
- A first-time visitor can identify **what AIVA Growth does**, **who operates it**, and **the two starting prices** without scrolling far.
- Exactly two public commercial offers are promoted: $149/month self-service and $799/month managed.
- Pricing and managed services pages explain responsibilities and clearly identify scope that must be agreed.
- No fabricated quotas, feature availability, customer results, testimonials, or integrations.
- All CTA destinations work, including mobile.
- Existing agent pages, routes, and SEO are preserved.
- Build/lint/typecheck/tests pass where configured.
- Cursor reports changed files, test results, and unresolved questions.

## Suggested final Cursor response
Summarize:
1. Pages/components changed.
2. Key copy and navigation improvements.
3. Working CTA routes.
4. Verification performed and results.
5. Any unresolved product readiness or pricing-scope decisions needing approval.

**Implementation instruction:** Apply the changes directly to the existing codebase. Do not stop after drafting a plan. Do not introduce unrelated visual redesigns or new business models.
