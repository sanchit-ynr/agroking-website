"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

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

  const handleChange = (field: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const validate = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.includes("@")) return "Enter a valid email.";
    if (!form.message.trim()) return "Message is required.";
    return null;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setError(validationError);
      return;
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, formType }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
      setError("Submission failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase text-slate">Name</label>
          <input
            value={form.name}
            onChange={handleChange("name")}
            className="w-full rounded-lg border border-ink/10 bg-white px-4 py-2 text-sm"
            placeholder="Full name"
            aria-label="Name"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase text-slate">Email</label>
          <input
            value={form.email}
            onChange={handleChange("email")}
            className="w-full rounded-lg border border-ink/10 bg-white px-4 py-2 text-sm"
            placeholder="Email address"
            aria-label="Email"
            required
          />
        </div>
      </div>
      {!compact ? (
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase text-slate">Phone</label>
          <input
            value={form.phone}
            onChange={handleChange("phone")}
            className="w-full rounded-lg border border-ink/10 bg-white px-4 py-2 text-sm"
            placeholder="Phone number"
            aria-label="Phone"
          />
        </div>
      ) : null}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase text-slate">Message</label>
        <textarea
          value={form.message}
          onChange={handleChange("message")}
          className="min-h-[120px] w-full rounded-lg border border-ink/10 bg-white px-4 py-2 text-sm"
          placeholder="Tell us about your requirement"
          aria-label="Message"
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
          Thank you. Our team will respond within 24 hours.
        </p>
      ) : null}
      <Button type="submit" variant="primary">
        {status === "loading" ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
}
