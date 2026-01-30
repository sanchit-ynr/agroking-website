import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { Trans } from "@/components/Trans";

export default function HomePage() {
  return (
    <div className="bg-sand">
      <section className="section">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <div className="space-y-6">
              <Badge>
                <Trans text="Export-ready manufacturing" />
              </Badge>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                <Trans text="Premium farm implements engineered for global performance." />
              </h1>
              <p className="text-lg text-slate">
                <Trans text={site.descriptionLong} />
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" size="lg">
                  <Trans text="Get Quote" />
                </Button>
                <Button href="/products" variant="secondary" size="lg">
                  <Trans text="View Products" />
                </Button>
              </div>
              <div className="grid gap-4 pt-6 md:grid-cols-3">
                {site.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-ink/10 bg-white p-4">
                    <p className="text-2xl font-semibold text-ink">{metric.value}</p>
                    <p className="text-xs uppercase tracking-wide text-slate"><Trans text={metric.label} /></p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -left-8 -top-6 h-32 w-32 rounded-full bg-gold/20 blur-2xl" />
              <div className="absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-ink/10 blur-2xl" />
              <div className="relative rounded-3xl border border-ink/10 bg-white p-6 shadow-lift">
                <Image
                  src="/images/hero-placeholder.svg"
                  alt="Agroking premium implements"
                  width={720}
                  height={540}
                  className="h-auto w-full rounded-2xl object-cover"
                  priority
                />
                <div className="mt-6 flex items-center justify-between rounded-xl border border-ink/10 bg-sand px-4 py-3 text-xs uppercase tracking-[0.3em] text-slate">
                  <span><Trans text="Precision" /></span>
                  <span><Trans text="Durability" /></span>
                  <span><Trans text="Export" /></span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <SectionHeading
            eyebrow={<Trans text="Product portfolio" />}
            title={<Trans text="Featured categories" />}
            subtitle={
              <Trans text="Comprehensive implements covering soil preparation, tillage, planting, and transport." />
            }
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {site.productCategories.map((category) => (
              <Card key={category.id} className="group">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="h-36 w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold text-ink"><Trans text={category.name} /></h3>
                  <p className="text-sm text-slate"><Trans text={category.description} /></p>
                  <Link href="/products" className="text-xs font-semibold uppercase text-ink">
                    <Trans text="Explore" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          <SectionHeading
            eyebrow={<Trans text="Why Agroking" />}
            title={
              <Trans text="Quality-first manufacturing built for export partners" />
            }
            subtitle={
              <Trans text="We invest in precision fabrication, robust testing, and reliable delivery cycles to keep your dealers stocked and your customers confident." />
            }
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {site.values.map((value) => (
              <Card key={value.title}>
                <h3 className="text-lg font-semibold text-ink"><Trans text={value.title} /></h3>
                <p className="mt-3 text-sm text-slate"><Trans text={value.description} /></p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <SectionHeading
            eyebrow={<Trans text="Process" />}
            title={<Trans text="From inquiry to after-sales support" />}
            subtitle={
              <Trans text="A streamlined export workflow that keeps your inventory moving." />
            }
          />
          <div className="grid gap-6 md:grid-cols-5">
            {site.timeline.map((step, index) => (
              <div key={step.title} className="relative rounded-2xl border border-ink/10 bg-sand p-5">
                <p className="text-xs font-semibold uppercase text-slate"><Trans text="Step" /> {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-ink"><Trans text={step.title} /></h3>
                <p className="mt-2 text-sm text-slate"><Trans text={step.description} /></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <SectionHeading
            eyebrow={<Trans text="Testimonials" />}
            title={<Trans text="Trusted by global distributors" />}
            subtitle={
              <Trans text="Long-term relationships built on reliability and premium finishing." />
            }
          />
          <div className="grid gap-6 md:grid-cols-3">
            {site.testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <p className="text-sm text-slate">“<Trans text={testimonial.quote} />”</p>
                <p className="mt-4 text-sm font-semibold text-ink">{testimonial.name}</p>
                <p className="text-xs text-slate"><Trans text={testimonial.role} /></p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink text-sand">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold">
              <Trans text="Ready to export with Agroking?" />
            </h2>
            <p className="mt-2 text-sm text-sand/70">
              <Trans text="Share your target markets and volume. We will build a quote within 24 hours." />
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              <Trans text="Request Quote" />
            </Button>
            <Button href="/products" variant="secondary" size="lg">
              <Trans text="Browse Products" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
