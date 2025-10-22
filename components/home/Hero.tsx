"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-soft-white to-blush/40">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
          alt="Freshly baked pastries"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-24 pt-32 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl space-y-6">
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-caramel shadow-soft"
          >
            Freshly baked happiness · every day
          </motion.span>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl font-bold text-cocoa sm:text-5xl lg:text-6xl"
          >
            Handcrafted cakes, pastries, and breads baked with love in Willowbrook.
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-cocoa/70"
          >
            Our ovens fire up before sunrise so you can savor buttery-soft croissants, aromatic sourdough, and celebration-worthy cakes made without preservatives.
          </motion.p>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/menu"
              className="rounded-full bg-caramel px-8 py-3 text-sm font-semibold text-soft-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
            >
              Order your favorite treat now
            </Link>
            <Link
              href="/custom-orders"
              className="rounded-full border border-caramel px-8 py-3 text-sm font-semibold text-caramel transition hover:border-caramel/60 hover:bg-caramel/10"
            >
              Explore custom cakes
            </Link>
          </motion.div>
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid gap-6 pt-8 sm:grid-cols-3"
          >
            <div>
              <dt className="text-xs uppercase tracking-[0.3em] text-caramel">Baked fresh daily</dt>
              <dd className="mt-2 font-display text-2xl text-cocoa">100%</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.3em] text-caramel">Preservatives</dt>
              <dd className="mt-2 font-display text-2xl text-cocoa">0%</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.3em] text-caramel">Local sourcing</dt>
              <dd className="mt-2 font-display text-2xl text-cocoa">12 farms</dd>
            </div>
          </motion.dl>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex-1"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[3rem] bg-white/60 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1514516430032-7d5b0f8d3f91"
              alt="Baker dusting croissants with sugar"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 80vw"
              priority
            />
          </div>
          <div className="absolute -bottom-10 -left-6 hidden w-60 rounded-3xl bg-cocoa px-6 py-5 text-soft-white shadow-soft lg:block">
            <p className="text-xs uppercase tracking-[0.3em] text-cream/70">Today in the oven</p>
            <p className="mt-2 font-display text-xl">Brown butter cardamom buns</p>
            <p className="mt-1 text-sm text-cream/80">Available after 8:00 AM while they last.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
