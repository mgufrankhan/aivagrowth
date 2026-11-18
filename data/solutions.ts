export const audiences = [
  {
    title: "Agencies",
    detail:
      "For teams juggling content, campaigns, and client conversations who want one place to prepare work before it goes live.",
  },
  {
    title: "Consultancies",
    detail:
      "For firms that need a steady publishing rhythm, a clear lead list, and a record of client conversations without a separate tool for each job.",
  },
  {
    title: "IT services",
    detail:
      "For service teams that explain technical offers in plain language and want campaign, lead, and inbox work reviewed before it is sent.",
  },
  {
    title: "Professional services",
    detail:
      "For practices that market expertise carefully and need approval, consent, and a readable view of what is performing.",
  },
  {
    title: "Other B2B service businesses",
    detail:
      "For similar service firms. The product is not packaged as a different edition for each industry, and this site does not claim vertical-specific features.",
  },
] as const;

export const solutionWorkflows = [
  {
    title: "Prepare a month of content",
    detail:
      "Draft posts, place them on a calendar, and review each one before it is scheduled or published to a connected LinkedIn, Instagram, or Facebook account.",
  },
  {
    title: "Take a campaign from idea to review",
    detail:
      "Assemble creative and the campaign setup, then keep publishing behind an approval. Performance is reviewed after the channel actually accepts the campaign.",
  },
  {
    title: "Sort new business opportunities",
    detail:
      "Organize leads from sources you are permitted to use, mark the better fits, and prepare outreach that still has to respect consent and channel rules.",
  },
  {
    title: "Answer customers from one list",
    detail:
      "Read supported WhatsApp, Instagram messaging, and Gmail conversations together. Use a suggested reply as a draft, and hand the thread to a person whenever it needs one.",
  },
  {
    title: "Prepare website SEO for review",
    detail:
      "Draft titles, meta descriptions, and on-page notes for pages you can edit. A person approves any change before it goes on the live site. Rankings are not promised.",
  },
  {
    title: "Read the website in plain language",
    detail:
      "When an authorized user connects Google Analytics 4, review traffic, behavior, and engagement without treating the summary as a substitute for the source report.",
  },
] as const;

export const valuePoints = [
  {
    id: "time",
    title: "Save time on repetitive work",
    detail:
      "Agents are designed to draft, organize, and prepare the repeatable parts of marketing and sales so the team can review a starting point instead of a blank page.",
  },
  {
    id: "connected",
    title: "Keep marketing and sales connected",
    detail:
      "Content, campaigns, leads, conversations, and performance are meant to share one workspace instead of living in tools that never quite match.",
  },
  {
    id: "respond",
    title: "Respond to customers faster",
    detail:
      "A unified inbox is designed to gather supported conversations and help the team reply, with a person able to take over a thread.",
  },
  {
    id: "visibility",
    title: "Make decisions with better visibility",
    detail:
      "Campaign status, lead queues, and website trends are meant to be readable by a non-technical teammate. Illustrations on this site are samples, not benchmarks.",
  },
] as const;

export type ValuePointId = (typeof valuePoints)[number]["id"];
