import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Agroking's manufacturing focus and export readiness.",
};

export default function AboutPage() {
  return (
    <div className="section bg-sand">
      <div className="mx-auto max-w-6xl space-y-16 px-6">
        <SectionHeading
          eyebrow="About Agroking"
          title="Manufacturing excellence for global agriculture"
          subtitle={site.companyOverview}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-ink">Our Story</h3>
            <p className="mt-3 text-sm text-slate">{site.companyOverview}</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-ink">Infrastructure</h3>
            <p className="mt-3 text-sm text-slate">{site.infrastructure}</p>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <p className="text-xs uppercase tracking-wide text-slate">Proprietor</p>
            <p className="mt-2 text-sm font-semibold text-ink">{site.companyProfile.proprietor}</p>
          </Card>
          <Card>
            <p className="text-xs uppercase tracking-wide text-slate">Established</p>
            <p className="mt-2 text-sm font-semibold text-ink">{site.companyProfile.established}</p>
          </Card>
          <Card>
            <p className="text-xs uppercase tracking-wide text-slate">Nature of Business</p>
            <p className="mt-2 text-sm font-semibold text-ink">{site.companyProfile.natureOfBusiness}</p>
          </Card>
          <Card>
            <p className="text-xs uppercase tracking-wide text-slate">Employees</p>
            <p className="mt-2 text-sm font-semibold text-ink">{site.companyProfile.employees}</p>
          </Card>
          <Card>
            <p className="text-xs uppercase tracking-wide text-slate">Market Covered</p>
            <p className="mt-2 text-sm font-semibold text-ink">{site.companyProfile.marketCovered}</p>
          </Card>
          <Card>
            <p className="text-xs uppercase tracking-wide text-slate">Quality Assurance</p>
            <p className="mt-2 text-sm text-slate">{site.qualityAssurance}</p>
          </Card>
        </div>

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
              <p className="text-sm text-slate">{site.network}</p>
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
      </div>
    </div>
  );
}
