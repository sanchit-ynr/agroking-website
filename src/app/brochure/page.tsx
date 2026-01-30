import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { BrochureClient } from "@/components/BrochureClient";
import { Trans } from "@/components/Trans";

export const metadata: Metadata = {
  title: "Brochure",
  description: "Download Agroking product brochures.",
};

export default function BrochurePage() {
  return (
    <div className="section bg-sand">
      <div className="mx-auto max-w-4xl space-y-8 px-6">
        <FadeIn>
          <SectionHeading
            eyebrow={<Trans text="Brochures" />}
            title={<Trans text="Download product brochures" />}
            subtitle={<Trans text="Placeholder download center. Replace with real PDFs when available." />}
          />
        </FadeIn>
        <BrochureClient />
      </div>
    </div>
  );
}
