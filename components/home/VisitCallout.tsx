"use client";

import Link from "next/link";

export function VisitCallout() {
  return (
    <section className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-section-radial" />
      <div className="absolute left-[18%] top-[5%] -z-10 h-72 w-72 rounded-full bg-honey/20 blur-3xl" />
      <div className="absolute right-[14%] bottom-[-12%] -z-10 h-80 w-80 rounded-full bg-caramel/25 blur-[150px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-[3.5rem] border border-white/60 bg-gradient-to-br from-caramel via-espresso to-caramel/90 px-10 py-16 text-center text-soft-white shadow-floating backdrop-blur dark:border-white/15">
        <span className="text-xs uppercase tracking-[0.4em] text-cream/80">Drop by and say hi</span>
        <h2 className="font-display text-3xl font-semibold leading-tight">
          The oven is always on & the espresso is always flowing
        </h2>
        <p className="max-w-2xl text-sm text-cream/85">
          Visit us at 245 Artisan Lane in Willowbrook. Order ahead for a quick pick up or stay for a latte and lazy morning with friends.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://maps.google.com/?q=SweetCrumb+Bakery+Willowbrook"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-soft-white/60 bg-soft-white px-6 py-3 text-sm font-semibold text-caramel transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            Get Directions
          </Link>
          <Link
            href="tel:+15551234567"
            className="rounded-full border border-soft-white/70 px-6 py-3 text-sm font-semibold text-soft-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-soft-white/10"
          >
            Call the bakery
          </Link>
        </div>
      </div>
    </section>
  );
}
