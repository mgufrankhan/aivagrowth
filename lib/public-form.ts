export type PublicFormState = "ready" | "local" | "unconfigured";

export type PublicFormStatus = {
  state: PublicFormState;
  notice: string | null;
};
