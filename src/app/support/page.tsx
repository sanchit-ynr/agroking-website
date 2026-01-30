import type { Metadata } from "next";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Support",
  description: "Service, warranty, and support resources for Agroking partners.",
};

export default function SupportPage() {
  return (
    <div className="section bg-sand">
      <div className="mx-auto max-w-6xl space-y-14 px-6">
        <SectionHeading
          eyebrow="Support"
          title="After-sales service built for export partners"
          subtitle="Warranty coverage, spares availability, and service response you can rely on."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-ink">Warranty</h3>
            <p className="mt-3 text-sm text-slate">
              Standard 12-month warranty coverage with optional extended plans.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-ink">Spare Parts</h3>
            <p className="mt-3 text-sm text-slate">
              Dedicated spares program with fast dispatch and dealer stocking guidance.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-ink">Service Requests</h3>
            <p className="mt-3 text-sm text-slate">
              Submit service queries for installation, troubleshooting, or parts.
            </p>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading title="Frequently asked questions" />
            <div className="space-y-4">
              {site.faqs.map((faq) => (
                <Card key={faq.question}>
                  <p className="text-sm font-semibold text-ink">{faq.question}</p>
                  <p className="mt-2 text-sm text-slate">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-ink">Service request</h3>
            <p className="mt-2 text-sm text-slate">
              Share product model, serial number, and issue details for fast support.
            </p>
            <div className="mt-6">
              <LeadForm formType="support" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
