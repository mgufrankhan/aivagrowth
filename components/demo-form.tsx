"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, Info } from "lucide-react";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { submitDemoRequest, type DemoActionResult } from "@/app/actions/demo";
import { FormButton } from "@/components/button";
import { businessTypes, mainChallenges } from "@/data/form-options";
import { ctaHeading, ctaLabel, type CtaMode } from "@/data/site";
import { demoFormSchema, type DemoFormValues } from "@/lib/demo-schema";
import type { PublicFormStatus } from "@/lib/public-form";
import { cn } from "@/lib/utils";

const initialValues: DemoFormValues = {
  fullName: "",
  workEmail: "",
  companyName: "",
  website: "",
  businessType: "",
  mainChallenge: "",
  message: "",
  consent: false,
  companyFax: "",
};

export function DemoForm({
  status,
  ctaMode,
}: {
  status: PublicFormStatus;
  ctaMode: CtaMode;
}) {
  const [result, setResult] = useState<Extract<DemoActionResult, { ok: true }> | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: initialValues,
  });

  const locked = status.state === "unconfigured";

  async function onSubmit(values: DemoFormValues) {
    setFormError(null);
    const response = await submitDemoRequest(values);
    if (!response.ok) {
      if (response.fieldErrors) {
        for (const [key, messages] of Object.entries(response.fieldErrors)) {
          const message = messages?.[0];
          if (!message || !isField(key)) {
            continue;
          }
          setError(key, { message });
        }
      }
      setFormError(response.message);
      return;
    }
    setResult(response);
  }

  if (result) {
    return (
      <div
        className={cn(
          "rounded-3xl border p-6 sm:p-8",
          result.delivery === "local" ? "border-orange/40 bg-orange/10" : "border-line bg-white",
        )}
        role="status"
      >
        <CircleCheck className="h-6 w-6 text-blue" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-semibold text-navy">{successTitle(result.delivery)}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{result.message}</p>
        {result.delivery !== "discarded" ? (
          <button
            type="button"
            className="mt-6 text-sm font-semibold text-blue"
            onClick={() => {
              setResult(null);
              reset(initialValues);
            }}
          >
            Send another inquiry
          </button>
        ) : null}
      </div>
    );
  }

  return (
    <form
      id="demo"
      className="panel scroll-mt-28 p-6 sm:p-8"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h2 className="text-2xl font-semibold text-navy">{ctaHeading(ctaMode)}</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        Required fields are marked with an asterisk. This form does not create an account.
      </p>
      {status.notice ? (
        <p className="mt-4 flex gap-2 rounded-2xl border border-orange/40 bg-orange/10 p-4 text-sm leading-6 text-navy" role="note">
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{status.notice}</span>
        </p>
      ) : null}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" id="full-name" error={errors.fullName?.message} required className="sm:col-span-1">
          <input
            id="full-name"
            autoComplete="name"
            className={inputClass(Boolean(errors.fullName))}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "full-name-error" : undefined}
            {...register("fullName")}
          />
        </Field>
        <Field label="Work email" id="work-email" error={errors.workEmail?.message} required>
          <input
            id="work-email"
            type="email"
            autoComplete="email"
            className={inputClass(Boolean(errors.workEmail))}
            aria-invalid={Boolean(errors.workEmail)}
            aria-describedby={errors.workEmail ? "work-email-error" : undefined}
            {...register("workEmail")}
          />
        </Field>
        <Field label="Company name" id="company-name" error={errors.companyName?.message} required>
          <input
            id="company-name"
            autoComplete="organization"
            className={inputClass(Boolean(errors.companyName))}
            aria-invalid={Boolean(errors.companyName)}
            aria-describedby={errors.companyName ? "company-name-error" : undefined}
            {...register("companyName")}
          />
        </Field>
        <Field label="Website" id="website" error={errors.website?.message}>
          <input
            id="website"
            autoComplete="url"
            placeholder="https://"
            className={inputClass(Boolean(errors.website))}
            aria-invalid={Boolean(errors.website)}
            aria-describedby={errors.website ? "website-error" : undefined}
            {...register("website")}
          />
        </Field>
        <Field label="Business type" id="business-type" error={errors.businessType?.message}>
          <select
            id="business-type"
            className={inputClass(Boolean(errors.businessType))}
            aria-invalid={Boolean(errors.businessType)}
            aria-describedby={errors.businessType ? "business-type-error" : undefined}
            {...register("businessType")}
          >
            {businessTypes.map((option) => (
              <option key={option.value || "blank"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Main challenge" id="main-challenge" error={errors.mainChallenge?.message} required>
          <select
            id="main-challenge"
            className={inputClass(Boolean(errors.mainChallenge))}
            aria-invalid={Boolean(errors.mainChallenge)}
            aria-describedby={errors.mainChallenge ? "main-challenge-error" : undefined}
            {...register("mainChallenge")}
          >
            <option value="">Select a challenge</option>
            {mainChallenges.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Message" id="message" error={errors.message?.message} className="sm:col-span-2">
          <textarea
            id="message"
            rows={5}
            className={cn(inputClass(Boolean(errors.message)), "h-auto py-3")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
        </Field>
      </div>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company-fax">Fax</label>
        <input id="company-fax" tabIndex={-1} autoComplete="off" {...register("companyFax")} />
      </div>
      <div className="mt-4">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-line"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            {...register("consent")}
          />
          <label htmlFor="consent" className="text-sm leading-6 text-navy">
            I agree to be contacted about this inquiry. <span className="text-[#9b1c1c]">*</span>
          </label>
        </div>
        <p className="mt-2 text-sm leading-6 text-muted">
          Read the{" "}
          <Link href="/privacy" className="font-semibold text-blue">
            draft Privacy Policy
          </Link>
          . It has not had legal review.
        </p>
        {errors.consent ? (
          <p id="consent-error" className="mt-1 text-sm text-[#9b1c1c]">
            {errors.consent.message}
          </p>
        ) : null}
      </div>
      {formError ? (
        <p className="mt-4 text-sm text-[#9b1c1c]" role="alert">
          {formError}
        </p>
      ) : null}
      <div className="mt-6">
        <FormButton disabled={isSubmitting || locked}>
          {isSubmitting ? "Sending…" : ctaLabel(ctaMode)}
        </FormButton>
      </div>
    </form>
  );
}

function successTitle(delivery: "delivered" | "local" | "discarded"): string {
  switch (delivery) {
    case "delivered":
      return "Inquiry delivered";
    case "local":
      return "Saved on this machine";
    case "discarded":
      return "Thank you";
    default: {
      const exhaustive: never = delivery;
      return exhaustive;
    }
  }
}

function Field({
  id,
  label,
  error,
  required = false,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-semibold text-navy">
        {label}
        {required ? <span className="text-[#9b1c1c]"> *</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-[#9b1c1c]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(invalid: boolean): string {
  return cn(
    "h-11 w-full rounded-xl border bg-white px-3 text-sm text-navy",
    invalid ? "border-[#9b1c1c]" : "border-line",
  );
}

function isField(key: string): key is keyof DemoFormValues {
  return key in initialValues;
}
