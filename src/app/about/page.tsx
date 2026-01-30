import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";

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
            eyebrow="About Agroking"
            title="Manufacturing excellence for global agriculture"
            subtitle={site.descriptionLong}
          />
        </FadeIn>

        <FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="text-lg font-semibold text-ink">Our Story</h3>
              <p className="mt-3 text-sm text-slate">
                From a focused fabrication unit to an export-ready manufacturing partner, Agroking
                has scaled through precision systems, skilled craftsmanship, and relentless quality
                auditing.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-ink">Quality Promise</h3>
              <p className="mt-3 text-sm text-slate">
                Every implement undergoes multi-stage testing, finishing checks, and export packaging
                validation before dispatch.
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
                <h3 className="text-lg font-semibold text-ink">Factory-ready production</h3>
                <p className="text-sm text-slate">
                  CNC cutting, robotic welding, and controlled powder coating for long service life.
                </p>
              </div>
            </div>
            <Card>
              <h3 className="text-lg font-semibold text-ink">Export footprint</h3>
              <p className="mt-3 text-sm text-slate">
                Serving {site.regionsServed.length} key regions with localized documentation and
                compliance support.
              </p>
              <div className="mt-6 rounded-xl border border-ink/10 bg-sand p-4 text-xs uppercase tracking-wide text-slate">
                Export map placeholder
              </div>
            </Card>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
