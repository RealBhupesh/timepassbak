"use client";

import Image from "next/image";
import { todaysSpecials } from "@/data/menu";

export function SpecialsShowcase() {
  return (
    <section className="relative bg-white/80 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(195,142,112,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 pb-10 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-caramel">Today’s Specials</span>
          <h2 className="font-display text-3xl font-semibold text-cocoa sm:text-4xl">
            Limited-batch bakes fresh from our ovens
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-cocoa/70">
            These handcrafted delights change with the seasons and sell out fast. Order ahead or drop by early to secure a bite.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {todaysSpecials.map((special) => (
            <article
              key={special.id}
              className="group relative overflow-hidden rounded-3xl bg-soft-white shadow-soft transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={special.image}
                  alt={special.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="space-y-4 px-6 py-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-caramel">
                  <span>{special.available}</span>
                  <span>${special.price.toFixed(2)}</span>
                </div>
                <h3 className="font-display text-2xl text-cocoa">{special.title}</h3>
                <p className="text-sm text-cocoa/75">{special.description}</p>
                <button className="rounded-full border border-caramel px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-caramel transition hover:bg-caramel hover:text-soft-white">
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
