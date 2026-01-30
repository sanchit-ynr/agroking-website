import type { Metadata } from "next";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Applications",
  description: "Industries and field applications served by Agroking implements.",
};

export default function ApplicationsPage() {
  return (
    <div className="section bg-sand">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeading
          eyebrow="Applications"
          title="Implements tailored to every stage of cultivation"
          subtitle="Select from curated solutions across soil prep, tillage, planting, and transport."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {site.applications.map((application) => (
            <Card key={application.title}>
              <h3 className="text-lg font-semibold text-ink">{application.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate">
                {application.items.map((item) => (
                  <li key={item} className="rounded-lg border border-ink/10 bg-sand px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
