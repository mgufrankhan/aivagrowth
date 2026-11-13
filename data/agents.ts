export const agentSlugs = [
  "content",
  "campaigns",
  "performance-marketing",
  "sales-leads",
  "whatsapp",
  "email",
  "analytics",
  "inbox",
] as const;

export type AgentSlug = (typeof agentSlugs)[number];

export type AgentPoint = {
  title: string;
  detail: string;
};

export type AgentReadiness = "available" | "pilot" | "planned";

export type Agent = {
  slug: AgentSlug;
  name: string;
  navLabel: string;
  summary: string;
  valueProposition: string;
  output: string;
  problem: string;
  readiness: AgentReadiness;
  overview: string;
  capabilities: AgentPoint[];
  workflow: AgentPoint[];
  safeguards: string[];
  seo: {
    title: string;
    description: string;
  };
};

export function agentReadinessLabel(status: AgentReadiness): string {
  switch (status) {
    case "available":
      return "Available";
    case "pilot":
      return "Pilot";
    case "planned":
      return "Planned";
    default: {
      const exhaustive: never = status;
      return exhaustive;
    }
  }
}

export const agents: Agent[] = [
  {
    slug: "content",
    name: "Content Generation & Scheduling",
    navLabel: "Content",
    summary: "Creates drafts of social posts and content calendars.",
    valueProposition: "Creates drafts of social posts and content calendars.",
    output: "Draft posts, calendar entries, and scheduling steps ready for review.",
    problem: "Keeps content planning from stalling when the team lacks time to start from scratch.",
    readiness: "available",
    overview:
      "The content agent is designed to draft marketing posts and organize a publishing calendar for LinkedIn, Instagram, and Facebook. Scheduling and publishing stay tied to the accounts you connect and the permissions those platforms grant. Engagement and audience figures appear only where the relevant APIs provide them.",
    capabilities: [
      {
        title: "Generate marketing content",
        detail:
          "Draft posts and supporting copy that a teammate can edit. The draft is a starting point, not an automatic publication.",
      },
      {
        title: "Schedule and publish from one dashboard",
        detail:
          "Prepare a calendar and publish to LinkedIn, Instagram, and Facebook when those accounts are connected and the platform permissions allow it.",
      },
      {
        title: "Review performance where APIs allow it",
        detail:
          "Track content performance, engagement, and audience analytics only to the extent the source platform permits.",
      },
    ],
    workflow: [
      {
        title: "Choose the channels you can use",
        detail: "Connect LinkedIn, Instagram, or Facebook accounts that your business is allowed to publish from.",
      },
      {
        title: "Set topics, tone, and approvals",
        detail: "Describe the offer and mark what must be reviewed before it is scheduled or published.",
      },
      {
        title: "Edit the calendar",
        detail: "Adjust drafts, timing, and the destination account. Nothing needs to go out until that review is done.",
      },
      {
        title: "Publish, then read what the API returns",
        detail: "After an approved publish, review the engagement data the platform actually sends back.",
      },
    ],
    safeguards: [
      "Publishing depends on a connected account, platform permission, and the approval rule you set.",
      "A planned channel status on this website is not a promise that the connection is available today.",
      "Performance numbers are omitted when the source API does not provide them.",
    ],
    seo: {
      title: "Content Generation & Scheduling",
      description:
        "Plan, create, and manage LinkedIn, Instagram, and Facebook content in one AIVA Growth workspace, with review before publishing.",
    },
  },
  {
    slug: "campaigns",
    name: "Campaign Generation & Publishing",
    navLabel: "Campaigns",
    summary: "Helps plan and manage marketing campaigns.",
    valueProposition: "Helps plan and manage marketing campaigns.",
    output: "Campaign structure, assets, and launch steps prepared for approval.",
    problem: "Reduces the manual work between a campaign idea and a reviewable launch plan.",
    readiness: "available",
    overview:
      "This agent is designed to help a team prepare marketing videos, advertising assets, and the structure of a campaign. Publishing is meant to go through supported channels and only with the permissions those channels require. Treat video generation and ad publishing as product capabilities under confirmation, not as a verified live service, until your launch checklist says otherwise.",
    capabilities: [
      {
        title: "Prepare campaign assets",
        detail:
          "Help create marketing videos and other advertising assets for a person to review before they are used.",
      },
      {
        title: "Set up publishing",
        detail:
          "Assemble a campaign so it can be published through a supported channel when the account permissions are in place.",
      },
      {
        title: "Watch status and performance",
        detail:
          "Show whether a campaign is still in draft, in review, or accepted by the channel, plus the performance data that channel returns.",
      },
    ],
    workflow: [
      {
        title: "Describe the offer and the channel",
        detail: "Start with the audience, the claim you can support, and the channel you are allowed to advertise on.",
      },
      {
        title: "Review assets and setup",
        detail: "Check creative, destination, and budget fields before anyone treats the campaign as ready.",
      },
      {
        title: "Approve the launch",
        detail: "A person approves publishing. The agent is not a substitute for that decision.",
      },
      {
        title: "Read the result",
        detail: "After the channel accepts the campaign, review status and the performance figures it provides.",
      },
    ],
    safeguards: [
      "A campaign is not described as running until a person has approved the launch and the channel has accepted it.",
      "Creative should be checked for accuracy before it is used.",
      "Confirm that video generation and ad publishing are available in your environment before you depend on them.",
    ],
    seo: {
      title: "Campaign Generation & Publishing",
      description:
        "Prepare campaign assets and publishing steps with AIVA Growth, then review performance. Launch still depends on approval and channel permissions.",
    },
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    navLabel: "Performance",
    summary: "Reviews campaign performance and suggests improvements.",
    valueProposition: "Reviews campaign performance and suggests improvements.",
    output: "Performance comparisons and recommended next steps for review.",
    problem: "Helps teams see which ads look stronger or weaker before changing anything.",
    readiness: "pilot",
    overview:
      "The performance agent is designed to watch advertising results, point out stronger and weaker ads, and support rule-based pausing or resuming. Rules use thresholds you configure, together with safeguards, permissions, and approvals. Recommendations are options for a person to consider. They are not a promise of return on ad spend, conversions, or revenue.",
    capabilities: [
      {
        title: "Compare performance",
        detail: "Highlight ads that appear to be performing better or worse, using the data the ad account provides.",
      },
      {
        title: "Use rules with limits",
        detail:
          "Support pausing or resuming ads when a threshold you set is crossed, and only inside the safeguards and approvals you configure.",
      },
      {
        title: "Recommend a next step",
        detail:
          "Suggest optimization ideas. A suggestion is not a guaranteed outcome, and it can stay manual.",
      },
    ],
    workflow: [
      {
        title: "Connect an account you may manage",
        detail: "Use an advertising account your business is authorized to access.",
      },
      {
        title: "Set thresholds and approvers",
        detail: "Decide what “weaker” means, what the rule may change, and who must approve it.",
      },
      {
        title: "Review the highlight",
        detail: "Read the comparison and the recommended action before anything is paused or resumed.",
      },
      {
        title: "Keep or loosen the approval",
        detail: "Leave every change manual, or allow a rule to run only inside the limits you already set.",
      },
    ],
    safeguards: [
      "Budget is not spent outside the rules, permissions, and approvals you configure.",
      "The product does not promise a ROAS, a conversion rate, or a revenue result.",
      "A person can require approval for every pause, resume, or edit.",
    ],
    seo: {
      title: "Performance Marketing",
      description:
        "Review which ads look stronger or weaker and set approval rules before any pause or resume. AIVA Growth does not promise ROAS.",
    },
  },
  {
    slug: "sales-leads",
    name: "Sales & Lead Generation",
    navLabel: "Sales & leads",
    summary: "Organizes leads, supports qualification, and recommends follow-ups.",
    valueProposition: "Organizes leads, supports qualification, and recommends follow-ups.",
    output: "Organized lead lists, qualification notes, and draft follow-up steps.",
    problem: "Makes it easier to spend follow-up time on better-fit opportunities.",
    readiness: "available",
    overview:
      "This agent is designed to help teams discover potential business leads from data sources they are permitted to use, then organize, qualify, and prepare outreach. It is not a scraping tool and it is not a system for unsolicited messaging. Privacy, consent, and the rules of each channel still apply to every step.",
    capabilities: [
      {
        title: "Discover permitted leads",
        detail: "Surface potential businesses from sources your team is allowed to use.",
      },
      {
        title: "Qualify and organize",
        detail: "Help sort records so the team can see which opportunities look like a better fit.",
      },
      {
        title: "Prepare outreach",
        detail:
          "Support a follow-up workflow a person can review. Sending still depends on consent and the policy of the channel.",
      },
    ],
    workflow: [
      {
        title: "Define the fit and the source",
        detail: "Say which kinds of businesses you want to talk to and which sources you may legally use.",
      },
      {
        title: "Review the list",
        detail: "Remove anyone who should not be contacted before the record is treated as qualified.",
      },
      {
        title: "Draft the outreach",
        detail: "Prepare the message and approve it. The draft is not the same thing as a sent message.",
      },
      {
        title: "Keep one shared list",
        detail: "Leave qualification notes where marketing and sales can both see them.",
      },
    ],
    safeguards: [
      "The workflow does not include scraping websites or buying contact lists.",
      "It does not include unsolicited bulk messaging.",
      "Consent and channel policy apply before any outreach is sent.",
    ],
    seo: {
      title: "Sales & Lead Generation",
      description:
        "Organize permitted business leads and prepare outreach you can review. AIVA Growth does not scrape sites or send unsolicited messages.",
    },
  },
  {
    slug: "whatsapp",
    name: "WhatsApp Marketing",
    navLabel: "WhatsApp",
    summary: "Supports approved customer conversations and follow-up workflows.",
    valueProposition: "Supports approved customer conversations and follow-up workflows.",
    output: "Permitted WhatsApp campaign drafts and follow-up workflows for opted-in contacts.",
    problem: "Helps teams run customer messaging without inventing a cold-blast process.",
    readiness: "pilot",
    overview:
      "The WhatsApp agent is designed for permitted marketing: campaigns and conversations with people who have opted in, sent through an approved WhatsApp business integration. Template, opt-in, messaging, and opt-out requirements are part of the workflow. The channel is planned until a live integration is confirmed.",
    capabilities: [
      {
        title: "Create permitted campaigns",
        detail: "Draft and manage WhatsApp marketing campaigns that fit the rules of the business integration you use.",
      },
      {
        title: "Message opted-in contacts",
        detail: "Engage customers and prospects who have agreed to receive WhatsApp messages from the business.",
      },
      {
        title: "Honor templates and opt-outs",
        detail: "Keep template, messaging-window, and opt-out requirements in the sending path.",
      },
    ],
    workflow: [
      {
        title: "Connect an approved business integration",
        detail: "Use the WhatsApp business path your organization is allowed to operate. Personal messaging is not the model.",
      },
      {
        title: "Confirm opt-in",
        detail: "Start from people who chose to hear from you, and record that permission.",
      },
      {
        title: "Review the template",
        detail: "Check the message against the template and content rules before it is submitted or sent.",
      },
      {
        title: "Stop when someone opts out",
        detail: "Treat an opt-out as the end of marketing messages to that person on this channel.",
      },
    ],
    safeguards: [
      "This is not a channel for cold or unsolicited WhatsApp blasts.",
      "Opt-in, template, messaging, and opt-out requirements apply.",
      "Availability depends on an approved WhatsApp business integration.",
    ],
    seo: {
      title: "WhatsApp Marketing",
      description:
        "Plan WhatsApp campaigns for people who opted in, using approved business messaging rules, templates, and opt-outs.",
    },
  },
  {
    slug: "email",
    name: "Email Marketing",
    navLabel: "Email",
    summary: "Helps prepare email campaigns and follow-up sequences.",
    valueProposition: "Helps prepare email campaigns and follow-up sequences.",
    output: "Email drafts, campaign structure, and follow-up sequences ready for approval.",
    problem: "Gives teams a usable starting point for email campaigns without skipping consent rules.",
    readiness: "available",
    overview:
      "The email agent is designed to draft professional marketing emails and help manage campaigns and engagement workflows. Messages should go to people you have a valid reason to contact, and every marketing email needs a working unsubscribe. This page does not name a sending vendor as already connected.",
    capabilities: [
      {
        title: "Draft the email",
        detail: "Prepare subject lines and body copy that the team can edit before a campaign exists.",
      },
      {
        title: "Organize the campaign",
        detail: "Keep the audience, the message, and the send step in one workflow that can require approval.",
      },
      {
        title: "Keep consent in the path",
        detail: "Include unsubscribe and consent-aware requirements instead of treating them as a later cleanup.",
      },
    ],
    workflow: [
      {
        title: "Describe the audience and the offer",
        detail: "Start with who may receive the email and what you can accurately say.",
      },
      {
        title: "Edit the draft",
        detail: "Rewrite anything that overclaims. The generated copy is not approved copy.",
      },
      {
        title: "Approve the send",
        detail: "Require a person to approve the campaign, and include an unsubscribe path before it can send.",
      },
      {
        title: "Review the response you actually receive",
        detail: "Read engagement from the email channel you connected. Do not assume metrics that were not returned.",
      },
    ],
    safeguards: [
      "Do not email people who have unsubscribed or who have not given the permission your situation requires.",
      "A sending provider is not listed as live on this site.",
      "Approval can be required before any campaign is sent.",
    ],
    seo: {
      title: "Email Marketing",
      description:
        "Draft marketing emails and campaign workflows that include consent and unsubscribe requirements, then review before sending.",
    },
  },
  {
    slug: "analytics",
    name: "GA4 Website Analytics",
    navLabel: "GA4 analytics",
    summary: "Explains website and marketing performance data.",
    valueProposition: "Explains website and marketing performance data.",
    output: "Plain-language summaries grounded in authorized analytics data.",
    problem: "Makes website and marketing performance easier to review without inventing numbers.",
    readiness: "available",
    overview:
      "This part of the platform is designed to connect Google Analytics 4 when someone with access authorizes it, then show traffic, visitor behavior, engagement, and other website insights in plain language. Summaries come from the property you connect. They do not invent traffic, and they do not replace the GA4 interface when you need the underlying report.",
    capabilities: [
      {
        title: "Connect an authorized property",
        detail: "Link Google Analytics 4 with a Google account that already has access to that property.",
      },
      {
        title: "Read traffic and behavior",
        detail: "View visits, visitor behavior, engagement, and the other website insights GA4 makes available.",
      },
      {
        title: "See a plain-language trend",
        detail: "Read a short summary of what changed, grounded in the imported numbers rather than a separate estimate.",
      },
    ],
    workflow: [
      {
        title: "Pick the property",
        detail: "Choose the GA4 property your team is allowed to read.",
      },
      {
        title: "Authorize the connection",
        detail: "Grant access from the Google account that holds it. There is no connection until that step succeeds.",
      },
      {
        title: "Read the summary next to the figures",
        detail: "Use the explanation as a guide, and check the numbers it is describing.",
      },
      {
        title: "Decide what to review next",
        detail: "Take a trend back to content, campaigns, or the inbox. The analytics view does not change the site by itself.",
      },
    ],
    safeguards: [
      "Nothing is imported until an authorized user connects the property.",
      "A summary is only as complete as the GA4 property and its configuration.",
      "Raw exploration still belongs in GA4 when the summary is not enough.",
    ],
    seo: {
      title: "GA4 Website Analytics",
      description:
        "Connect Google Analytics 4 when authorized and read traffic, behavior, and engagement in plain language.",
    },
  },
  {
    slug: "inbox",
    name: "Unified Inbox",
    navLabel: "Unified inbox",
    summary: "Helps teams manage customer conversations in one place.",
    valueProposition: "Helps teams manage customer conversations in one place.",
    output: "A shared conversation queue with draft replies and handoff options.",
    problem: "Reduces switching between channels when customers reach out.",
    readiness: "available",
    overview:
      "The inbox agent is designed to bring conversations from supported WhatsApp, Instagram messaging, and Gmail connections into one list. Teams can organize incoming queries, start from an AI-written reply, and turn on automation only where that automation has been approved. A person can take over a conversation, and the actions should remain auditable.",
    capabilities: [
      {
        title: "Collect supported conversations",
        detail:
          "Show WhatsApp, Instagram messaging, and Gmail threads together when those connections are authorized.",
      },
      {
        title: "Suggest a reply",
        detail:
          "Draft a response a person can edit and send. Optional automation stays limited to the cases you have approved.",
      },
      {
        title: "Hand off and keep a record",
        detail: "Move a conversation to a teammate and keep a history of what was suggested and what was sent.",
      },
    ],
    workflow: [
      {
        title: "Connect the inboxes you can access",
        detail: "Add only the WhatsApp, Instagram messaging, or Gmail accounts the business is allowed to read.",
      },
      {
        title: "Work from one queue",
        detail: "Sort new questions and see which channel each message came from.",
      },
      {
        title: "Edit before you send",
        detail: "Use a suggested reply as a draft, or write your own. Sending remains a separate action.",
      },
      {
        title: "Limit automation",
        detail: "If you enable an automatic reply, scope it to approved situations and keep it auditable.",
      },
    ],
    safeguards: [
      "Suggested replies are drafts until someone sends them or an approved automation does.",
      "A human handoff is part of the design.",
      "Only connected channels appear. Those connections are planned until confirmed for your account.",
    ],
    seo: {
      title: "Unified Inbox",
      description:
        "Bring supported WhatsApp, Instagram, and Gmail conversations into one inbox, with suggested replies and human handoff.",
    },
  },
];

export function getAgent(slug: string): Agent | undefined {
  return agents.find((agent) => agent.slug === slug);
}

export function agentPath(slug: AgentSlug): string {
  return `/ai-agents/${slug}`;
}

export function relatedAgents(slug: AgentSlug, count = 3): Agent[] {
  const start = agents.findIndex((agent) => agent.slug === slug);
  if (start < 0) {
    return agents.slice(0, count);
  }
  const ordered = [...agents.slice(start + 1), ...agents.slice(0, start)];
  return ordered.slice(0, count);
}
