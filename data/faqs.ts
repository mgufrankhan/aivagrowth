export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What is AIVA Growth?",
    answer:
      "AIVA Growth is an AI growth workforce for marketing and sales. It helps B2B service businesses create content, manage campaigns, organize leads, follow up with customers, and review performance.",
  },
  {
    question: "What is the difference between the platform and managed services?",
    answer:
      "With the Self-Service AI Platform, your team operates the AI agents. With Fully Managed AI Growth, the AIVA Growth team operates agreed workflows and you approve important actions. Both use the same platform.",
  },
  {
    question: "Do I need a marketing team to use the platform?",
    answer:
      "No. Self-Service is built for teams that want to run AI-assisted workflows themselves. If you prefer not to operate the day-to-day work, Fully Managed is the better fit.",
  },
  {
    question: "What does the $149/month starting price cover?",
    answer:
      "It is the starting price for the Self-Service AI Platform. Exact agents, channels, users, usage limits, and onboarding support are confirmed during consultation. Details that are not yet published are defined in your agreed plan.",
  },
  {
    question: "What does the $799/month starting price cover?",
    answer:
      "It is the starting price for Fully Managed AI Growth. Monthly deliverables, channels, review cadence, and responsibilities are defined in the service proposal before work begins.",
  },
  {
    question: "Are ad spend and third-party fees included?",
    answer:
      "No. Advertising spend and external messaging or platform fees are separate unless explicitly included in your proposal.",
  },
  {
    question: "Which integrations are available now?",
    answer:
      "Candidate channels include LinkedIn, Instagram, Facebook, WhatsApp, Gmail, and Google Analytics 4. Availability depends on product readiness and your account configuration. We confirm what is available during the demo.",
  },
  {
    question: "Will AIVA Growth publish or message customers without approval?",
    answer:
      "No. Workflows are designed around permissions and approval rules. Publishing and messaging stay behind the controls agreed for your account.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a demo and tell us whether you want a Platform Demo or Managed Services. We will confirm fit, availability, and scope before onboarding.",
  },
  {
    question: "How is information on this website handled?",
    answer:
      "The demo form collects the details you type into it. An inquiry is delivered only when this site has a working email, database, or webhook destination configured. If delivery is not configured, the form will say so and will not pretend the message was sent. Read the draft Privacy Policy, which has not had legal review. Do not send sensitive personal data through the form.",
  },
];

export const managedFaqs: Faq[] = [
  {
    question: "What does Fully Managed include each month?",
    answer:
      "Agreed content, campaign, lead-management, follow-up, and reporting work. Exact quantities and channels are defined in the service proposal.",
  },
  {
    question: "What does the client still need to do?",
    answer:
      "Provide access and assets, approve key content and actions, and respond to sales-ready leads.",
  },
  {
    question: "Are advertising and messaging costs included?",
    answer:
      "Advertising spend, third-party messaging fees, and custom integrations are excluded unless separately agreed.",
  },
];
