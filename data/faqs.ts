export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What is AIVAgrowth?",
    answer:
      "AIVAgrowth is an AI-powered marketing and sales platform designed for business growth. Specialized agents prepare content, campaigns, lead workflows, customer conversations, and performance reviews in one workspace. The name expresses a brand idea, AI Virtual Agents for Business Growth. It is not a strict letter-by-letter acronym, and it is not positioned as an ERP or a general-purpose chatbot.",
  },
  {
    question: "Who is it for?",
    answer:
      "It is aimed at B2B service-based small and mid-sized businesses. That includes agencies, consultancies, IT services, professional services, and other service firms with a similar marketing and sales workload. The workflows are general. This site does not promise features built for one industry.",
  },
  {
    question: "How do the agents work?",
    answer:
      "Each agent focuses on one part of the growth workflow, such as content, campaigns, leads, messaging, or website analytics. They are designed to prepare work a person can review. What you can actually run depends on the accounts you connect, the permissions those platforms grant, and the approval rules you set.",
  },
  {
    question: "Can a person approve work before it goes out?",
    answer:
      "Yes. The workflow is built around goals, preferences, and approval rules. Publishing, sending messages, and changing ads are meant to follow the permissions and review settings you choose. The platform should not be understood as a system that spends ad budget or contacts people on its own without those controls.",
  },
  {
    question: "Which integrations are supported?",
    answer:
      "The intended channel categories are LinkedIn, Instagram, Facebook, WhatsApp, Gmail, and Google Analytics 4. Each one has a status in the site configuration. Planned means the connection is part of the product direction, not that it is switched on for every account. A connection also depends on the other company’s permissions. Listing a name here is not a partnership or an endorsement.",
  },
  {
    question: "How is information on this website handled?",
    answer:
      "The demo form collects the details you type into it. An inquiry is delivered only when this site has a working email, database, or webhook destination configured. If delivery is not configured, the form will say so and will not pretend the message was sent. Product security, retention, and processing terms for the application itself still need to be confirmed. Read the draft Privacy Policy, which has not had legal review. Do not send sensitive personal data through the form.",
  },
  {
    question: "How do I request access?",
    answer:
      "Use the demo or waitlist form and describe your marketing and sales workflow. Submitting the form does not create an account, and it does not by itself mean the product is publicly available. A follow-up can happen only after the inquiry reaches the destination configured for this site.",
  },
  {
    question: "Is the product generally available?",
    answer:
      "This website describes the product direction and the capabilities being built. It does not confirm a public launch, a customer count, or that every workflow is live. Ask for a demo if you want to talk about access.",
  },
];
