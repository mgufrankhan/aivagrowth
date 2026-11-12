export type WorkflowStep = {
  step: string;
  title: string;
  detail: string;
  youDo: string;
  platformDoes: string;
};

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Connect your business channels and data sources",
    detail:
      "Bring in the channels and data sources you want to use, subject to supported integration availability and the access each platform allows.",
    youDo: "Choose accounts you are allowed to connect and grant only the access the workflow needs.",
    platformDoes:
      "The workspace is designed to keep those connections together and show which sources an agent can use.",
  },
  {
    step: "02",
    title: "Set goals, preferences, and approval rules",
    detail:
      "Tell the workspace what you are trying to do, how you want the work to sound, and what must be reviewed before it leaves the building.",
    youDo: "Set the goal, the audience, the tone, and who has to approve a publish, send, or ad change.",
    platformDoes:
      "Agents are designed to follow those preferences and to stop at the approval step you require.",
  },
  {
    step: "03",
    title: "Let AI agents prepare and execute approved workflows",
    detail:
      "Agents draft and organize the work. Execution of a publish, a message, or an ad change happens only on the path you have approved.",
    youDo: "Review the draft, the audience, and the action before you approve it.",
    platformDoes:
      "The agent prepares the asset or the action and carries out the step that your rules already allow.",
  },
  {
    step: "04",
    title: "Review conversations, campaigns, leads, and performance",
    detail:
      "Use the same workspace to look at replies, campaign status, the lead list, and the website or ad signals that connected sources provide.",
    youDo: "Decide what to adjust, what to pause, and what needs a person to take over.",
    platformDoes:
      "The workspace is designed to put those queues and summaries next to each other so the team is not reconstructing the story from separate tools.",
  },
];

export const workspaceStages = [
  {
    title: "Content",
    detail: "Drafts and a publishing calendar for the social accounts you connect.",
  },
  {
    title: "Campaigns",
    detail: "Assets and launch steps that stay in review until someone approves them.",
  },
  {
    title: "Leads",
    detail: "A list of permitted opportunities the team can qualify before outreach.",
  },
  {
    title: "Inbox",
    detail: "Customer conversations from the messaging channels that are actually connected.",
  },
  {
    title: "Analytics",
    detail: "Website and campaign signals, shown only from sources that return them.",
  },
] as const;
