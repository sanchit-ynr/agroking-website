import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import { Trans } from "@/components/Trans";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Agroking's manufacturing focus and export readiness.",
};

export default function AboutPage() {
  return (
    <div className="section bg-sand">
      <div className="mx-auto max-w-6xl space-y-16 px-6">
        <FadeIn>
          <SectionHeading
            eyebrow={<Trans en="About Agroking" hi="Agroking के बारे में" />}
            title={<Trans en="Manufacturing excellence for global agriculture" hi="वैश्विक कृषि के लिए उत्कृष्ट निर्माण" />}
            subtitle={<Trans en={site.descriptionLong} hi="उच्च गुणवत्ता, मजबूत निर्माण और विश्वसनीय सपोर्ट पर आधारित निर्यात‑तैयार समाधान।" />}
          />
        </FadeIn>

        <FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="text-lg font-semibold text-ink">
                <Trans en="Our Story" hi="हमारी कहानी" />
              </h3>
              <p className="mt-3 text-sm text-slate">
                <Trans
                  en="From a focused fabrication unit to an export-ready manufacturing partner, Agroking has scaled through precision systems, skilled craftsmanship, and relentless quality auditing."
                  hi="एक विशेष फैब्रिकेशन यूनिट से लेकर निर्यात‑तैयार पार्टनर तक, Agroking ने सटीक प्रक्रियाओं और गुणवत्ता पर फोकस के साथ विस्तार किया।"
                />
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-ink">
                <Trans en="Quality Promise" hi="गुणवत्ता का वादा" />
              </h3>
              <p className="mt-3 text-sm text-slate">
                <Trans
                  en="Every implement undergoes multi-stage testing, finishing checks, and export packaging validation before dispatch."
                  hi="हर उत्पाद को मल्टी‑स्टेज टेस्टिंग और फिनिशिंग चेक्स से गुजरना होता है।"
                />
              </p>
            </Card>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {site.capabilities.map((capability) => (
              <Card key={capability}>
                <p className="text-sm font-semibold text-ink">{capability}</p>
              </Card>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-ink/10 bg-white p-6">
              <Image
                src="/images/factory-placeholder.svg"
                alt="Agroking factory floor"
                width={800}
                height={500}
                className="h-64 w-full rounded-xl object-cover"
              />
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold text-ink">
                  <Trans en="Factory-ready production" hi="फ़ैक्टरी‑स्तर उत्पादन" />
                </h3>
                <p className="text-sm text-slate">
                  <Trans
                    en="CNC cutting, robotic welding, and controlled powder coating for long service life."
                    hi="CNC कटिंग, रोबोटिक वेल्डिंग और कंट्रोल्ड पाउडर कोटिंग।"
                  />
                </p>
              </div>
            </div>
            <Card>
              <h3 className="text-lg font-semibold text-ink">
                <Trans en="Export footprint" hi="निर्यात उपस्थिति" />
              </h3>
              <p className="mt-3 text-sm text-slate">
                <Trans
                  en={`Serving ${site.regionsServed.length} key regions with localized documentation and compliance support.`}
                  hi={`हम ${site.regionsServed.length} प्रमुख क्षेत्रों में सेवाएँ देते हैं।`}
                />
              </p>
              <div className="mt-6 rounded-xl border border-ink/10 bg-sand p-4 text-xs uppercase tracking-wide text-slate">
                <Trans en="Export map placeholder" hi="एक्सपोर्ट मैप प्लेसहोल्डर" />
              </div>
            </Card>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
