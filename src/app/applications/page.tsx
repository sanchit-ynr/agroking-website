import type { Metadata } from "next";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import { Trans } from "@/components/Trans";

export const metadata: Metadata = {
  title: "Applications",
  description: "Industries and field applications served by Agroking implements.",
};

export default function ApplicationsPage() {
  return (
    <div className="section bg-sand">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <FadeIn>
          <SectionHeading
            eyebrow={<Trans text="Applications" />}
            title={<Trans text="Implements tailored to every stage of cultivation" />}
            subtitle={
              <Trans text="Select from curated solutions across soil prep, tillage, planting, and transport." />
            }
          />
        </FadeIn>
        <FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            {site.applications.map((application) => (
              <Card key={application.title}>
                <h3 className="text-lg font-semibold text-ink"><Trans text={application.title} /></h3>
                <ul className="mt-4 space-y-2 text-sm text-slate">
                  {application.items.map((item) => (
                    <li key={item} className="rounded-lg border border-ink/10 bg-sand px-3 py-2">
                      <Trans text={item} />
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
