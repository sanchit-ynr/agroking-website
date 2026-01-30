import type { Metadata } from "next";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { LeadForm } from "@/components/LeadForm";
import { FadeIn } from "@/components/FadeIn";
import { Trans } from "@/components/Trans";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Agroking for quotes, exports, and support.",
};

export default function ContactPage() {
  return (
    <div className="section bg-sand">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <FadeIn>
          <SectionHeading
            eyebrow={<Trans en="Contact" hi="संपर्क" />}
            title={<Trans en="Let’s build your export-ready portfolio" hi="अपना निर्यात पोर्टफोलियो बनाएं" />}
            subtitle={
              <Trans
                en="Share volumes, markets, and timeline. Our export team will respond within 24 hours."
                hi="मात्रा, बाजार और टाइमलाइन साझा करें—24 घंटे में जवाब मिलेगा।"
              />
            }
          />
        </FadeIn>

        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <LeadForm formType="contact" />
            </Card>
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold text-ink">
                  <Trans en="Direct lines" hi="सीधा संपर्क" />
                </h3>
                <p className="mt-3 text-sm text-slate">{site.contact.phone}</p>
                {site.contact.phoneAlt ? (
                  <p className="text-sm text-slate">{site.contact.phoneAlt}</p>
                ) : null}
                <p className="text-sm text-slate">{site.contact.email}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button variant="secondary" size="sm" href="#">
                    <Trans en="WhatsApp" hi="व्हाट्सऐप" />
                  </Button>
                  <Button variant="secondary" size="sm" href="#">
                    <Trans en="Call Us" hi="कॉल करें" />
                  </Button>
                  <Button variant="secondary" size="sm" href="#">
                    <Trans en="Email" hi="ईमेल" />
                  </Button>
                </div>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold text-ink">
                  <Trans en="Business hours" hi="कार्य समय" />
                </h3>
                <p className="mt-3 text-sm text-slate">{site.contact.hours}</p>
              </Card>
              <div className="rounded-2xl border border-ink/10 bg-white p-6">
                <p className="text-xs font-semibold uppercase text-slate">
                  <Trans en="Map placeholder" hi="मैप प्लेसहोल्डर" />
                </p>
                <div className="mt-4 h-40 rounded-xl border border-ink/10 bg-sand" />
                <p className="mt-4 text-sm text-slate">{site.contact.address}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
