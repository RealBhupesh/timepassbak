"use client";

import Image from "next/image";
import { todaysSpecials } from "@/data/menu";

export function SpecialsShowcase() {
  return (
    <section className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-section-radial" />
      <div className="absolute -top-24 right-[8%] -z-10 h-72 w-72 rounded-full bg-honey/15 blur-3xl" />
      <div className="absolute left-[6%] bottom-[-5%] -z-10 h-64 w-64 rounded-full bg-rose/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 pb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-caramel/30 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-caramel backdrop-blur dark:border-white/10 dark:bg-neutral-900/60">
            Today’s Specials
          </span>
          <h2 className="font-display text-3xl font-semibold text-espresso dark:text-white sm:text-4xl">
            Limited-batch bakes fresh from our ovens
          </h2>
          <p className="text-sm text-espresso/70 dark:text-neutral-300">
            These handcrafted delights change with the seasons and sell out fast. Order ahead or drop by early to secure a bite.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {todaysSpecials.map((special) => (
            <article
              key={special.id}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/75 shadow-floating backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:shadow-glow dark:border-white/10 dark:bg-neutral-900/70"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={special.image}
                  alt={special.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-x-6 top-6 flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-soft-white">
                  <span className="rounded-full bg-black/20 px-3 py-1 backdrop-blur">{special.available}</span>
                  <span className="rounded-full bg-black/20 px-3 py-1 backdrop-blur">${special.price.toFixed(2)}</span>
                </div>
              </div>
              <div className="space-y-4 px-6 pb-8 pt-6 sm:px-8">
                <div className="space-y-2">
                  <h3 className="font-display text-2xl text-espresso dark:text-white">{special.title}</h3>
                  <p className="text-sm text-espresso/75 dark:text-neutral-300">{special.description}</p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-caramel to-honey px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-soft-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glow">
                  Reserve now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
