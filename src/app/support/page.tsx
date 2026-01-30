import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { LeadForm } from "@/components/LeadForm";
import { FadeIn } from "@/components/FadeIn";
import { Trans } from "@/components/Trans";

export const metadata: Metadata = {
  title: "Support",
  description: "Service, warranty, and support resources for Agroking partners.",
};

export default function SupportPage() {
  return (
    <div className="section bg-sand">
      <div className="mx-auto max-w-6xl space-y-14 px-6">
        <FadeIn>
          <SectionHeading
            eyebrow={<Trans en="Support" hi="सहायता" />}
            title={<Trans en="After-sales service built for export partners" hi="निर्यात भागीदारों के लिए आफ्टर‑सेल्स" />}
            subtitle={
              <Trans
                en="Warranty coverage, spares availability, and service response you can rely on."
                hi="वारंटी, स्पेयर्स और तेज़ सेवा सहायता।"
              />
            }
          />
        </FadeIn>

        <FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold text-ink">
                <Trans en="Warranty" hi="वारंटी" />
              </h3>
              <p className="mt-3 text-sm text-slate">
                <Trans
                  en="Standard 12-month warranty coverage with optional extended plans."
                  hi="मानक 12‑महीने की वारंटी और वैकल्पिक एक्सटेंडेड प्लान।"
                />
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-ink">
                <Trans en="Spare Parts" hi="स्पेयर पार्ट्स" />
              </h3>
              <p className="mt-3 text-sm text-slate">
                <Trans
                  en="Dedicated spares program with fast dispatch and dealer stocking guidance."
                  hi="तेज़ डिस्पैच और डीलर स्टॉकिंग गाइडेंस के साथ।"
                />
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-ink">
                <Trans en="Brochures" hi="ब्रॉशर" />
              </h3>
              <p className="mt-3 text-sm text-slate">
                <Trans
                  en="Download the latest product brochures and technical sheets."
                  hi="नवीनतम ब्रॉशर और तकनीकी शीट डाउनलोड करें।"
                />
              </p>
              <Link
                href="/brochure"
                className="mt-4 inline-flex text-xs font-semibold uppercase tracking-wide text-ink"
              >
                <Trans en="View brochures" hi="ब्रॉशर देखें" />
              </Link>
            </Card>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <SectionHeading title={<Trans en="Frequently asked questions" hi="अक्सर पूछे प्रश्न" />} />
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
              <h3 className="text-lg font-semibold text-ink">
                <Trans en="Service request" hi="सेवा अनुरोध" />
              </h3>
              <p className="mt-2 text-sm text-slate">
                <Trans
                  en="Share product model, serial number, and issue details for fast support."
                  hi="मॉडल, सीरियल नंबर और समस्या विवरण साझा करें।"
                />
              </p>
              <div className="mt-6">
                <LeadForm formType="support" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
