"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { useLang } from "@/components/LanguageProvider";
import { t } from "@/content/i18n";

interface LeadFormProps {
  formType: "contact" | "support" | "quote";
  compact?: boolean;
}

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function LeadForm({ formType, compact }: LeadFormProps) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);
  const { lang } = useLang();

  const handleChange = (field: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const validate = () => {
    if (!form.name.trim()) return t(lang, "Name is required.");
    if (!form.email.includes("@")) return t(lang, "Enter a valid email.");
    if (!form.message.trim()) return t(lang, "Message is required.");
    return null;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setError(validationError);
      return;
    }

    // Static export placeholder: no network calls.
    setTimeout(() => {
      setStatus("success");
      setForm(initialState);
    }, 300);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" value={formType} aria-hidden="true" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase text-slate">
            {t(lang, "Name")}
          </label>
          <input
            value={form.name}
            onChange={handleChange("name")}
            className="w-full rounded-lg border border-ink/10 bg-smoke px-4 py-2 text-sm"
            placeholder={t(lang, "Full name")}
            aria-label={t(lang, "Name")}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase text-slate">
            {t(lang, "Email")}
          </label>
          <input
            value={form.email}
            onChange={handleChange("email")}
            className="w-full rounded-lg border border-ink/10 bg-smoke px-4 py-2 text-sm"
            placeholder={t(lang, "Email address")}
            aria-label={t(lang, "Email")}
            required
          />
        </div>
      </div>
      {!compact ? (
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase text-slate">
            {t(lang, "Phone")}
          </label>
          <input
            value={form.phone}
            onChange={handleChange("phone")}
            className="w-full rounded-lg border border-ink/10 bg-smoke px-4 py-2 text-sm"
            placeholder={t(lang, "Phone number")}
            aria-label={t(lang, "Phone")}
          />
        </div>
      ) : null}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase text-slate">
          {t(lang, "Message")}
        </label>
        <textarea
          value={form.message}
          onChange={handleChange("message")}
          className="min-h-[120px] w-full rounded-lg border border-ink/10 bg-smoke px-4 py-2 text-sm"
          placeholder={t(lang, "Tell us about your requirement")}
          aria-label={t(lang, "Message")}
          required
        />
      </div>
      {status === "error" && error ? (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
      {status === "success" ? (
        <p className="text-sm text-emerald-700" role="status">
          {t(lang, "Thank you. Our team will respond within 24 hours.")}
        </p>
      ) : null}
      <Button type="submit" variant="primary">
        {status === "loading" ? t(lang, "Sending...") : t(lang, "Submit")}
      </Button>
    </form>
  );
}
