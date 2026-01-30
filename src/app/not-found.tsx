import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="section bg-sand">
      <div className="mx-auto max-w-3xl space-y-6 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate">404</p>
        <h1 className="font-display text-4xl font-semibold text-ink">Page not found</h1>
        <p className="text-sm text-slate">
          The page you are looking for does not exist. Explore our products or return home.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/">Go Home</Button>
          <Button href="/products" variant="secondary">
            View Products
          </Button>
        </div>
      </div>
    </div>
  );
}
