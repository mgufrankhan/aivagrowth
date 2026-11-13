import { z } from "zod";
import { interestOptions } from "@/data/offers";
import { businessTypes, mainChallenges } from "@/data/form-options";

const businessTypeValues: readonly string[] = businessTypes.map((item) => item.value);
const challengeValues: readonly string[] = mainChallenges.map((item) => item.value);
const interestValues: readonly string[] = interestOptions.map((item) => item.value);

const optionalWebsite = z
  .string()
  .trim()
  .max(300, "Enter a shorter website address.")
  .refine(
    (value) => value === "" || /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/.test(value),
    "Enter a valid website or leave this blank.",
  );

export const demoFormSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(120, "Enter a shorter name."),
  workEmail: z.string().trim().email("Enter a valid work email.").max(200, "Enter a shorter email."),
  companyName: z
    .string()
    .trim()
    .min(2, "Enter your company name.")
    .max(160, "Enter a shorter company name."),
  website: optionalWebsite,
  businessType: z.string().refine((value) => businessTypeValues.includes(value), {
    message: "Choose a business type from the list or leave it blank.",
  }),
  mainChallenge: z.string().refine((value) => value === "" || challengeValues.includes(value), {
    message: "Choose a challenge from the list or leave it blank.",
  }),
  interestedIn: z.string().refine((value) => interestValues.includes(value), {
    message: "Select Platform Demo or Managed Services.",
  }),
  message: z.string().trim().max(2000, "Keep the brief requirement under 2,000 characters."),
  consent: z.boolean().refine((value) => value, {
    message: "Consent is required before this inquiry can be accepted.",
  }),
  companyFax: z.string().max(200),
});

export type DemoFormValues = z.infer<typeof demoFormSchema>;

export type DemoInquiry = Omit<DemoFormValues, "companyFax" | "consent"> & {
  consent: true;
};
