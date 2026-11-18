export const businessTypes = [
  { value: "", label: "Select a business type (optional)" },
  { value: "agency", label: "Agency" },
  { value: "consultancy", label: "Consultancy" },
  { value: "it-services", label: "IT services" },
  { value: "professional-services", label: "Professional services" },
  { value: "other-b2b", label: "Other B2B service business" },
  { value: "other", label: "Other" },
] as const;

export const mainChallenges = [
  { value: "content", label: "Planning and publishing content" },
  { value: "campaigns", label: "Creating and launching campaigns" },
  { value: "performance", label: "Understanding ad performance" },
  { value: "leads", label: "Finding and organizing leads" },
  { value: "conversations", label: "Keeping up with customer conversations" },
  { value: "email", label: "Running email marketing" },
  { value: "analytics", label: "Making sense of website analytics" },
  { value: "seo", label: "Improving website SEO" },
  { value: "connected", label: "Connecting marketing and sales work" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export type BusinessTypeValue = (typeof businessTypes)[number]["value"];
export type MainChallengeValue = (typeof mainChallenges)[number]["value"];

export function challengeLabel(value: string): string {
  const match = mainChallenges.find((item) => item.value === value);
  return match?.label ?? value;
}

export function businessTypeLabel(value: string): string {
  const match = businessTypes.find((item) => item.value === value);
  return match && match.value !== "" ? match.label : "";
}
