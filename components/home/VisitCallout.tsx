"use client";

import Link from "next/link";

export function VisitCallout() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(203,164,140,0.25),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-[3rem] bg-cocoa px-10 py-16 text-center text-soft-white shadow-soft">
        <span className="text-xs uppercase tracking-[0.4em] text-cream/70">Drop by and say hi</span>
        <h2 className="font-display text-3xl font-semibold">The oven is always on & the espresso is always flowing</h2>
        <p className="max-w-2xl text-sm text-cream/80">
          Visit us at 245 Artisan Lane in Willowbrook. Order ahead for a quick pick up or stay for a latte and lazy morning with friends.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://maps.google.com/?q=SweetCrumb+Bakery+Willowbrook"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-soft-white px-6 py-3 text-sm font-semibold text-caramel transition hover:bg-cream"
          >
            Get Directions
          </Link>
          <Link
            href="tel:+15551234567"
            className="rounded-full border border-soft-white px-6 py-3 text-sm font-semibold text-soft-white transition hover:bg-soft-white/10"
          >
            Call the bakery
          </Link>
        </div>
      </div>
    </section>
  );
}
