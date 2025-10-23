"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const heroStats = [
  { label: "Baked fresh daily", value: "100%" },
  { label: "Preservatives", value: "0%" },
  { label: "Local farm partners", value: "12" }
];

export function Hero() {
  const ratingStars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className="text-lg leading-none text-caramel drop-shadow-[0_2px_4px_rgba(195,142,112,0.35)]"
    >
      ★
    </span>
  ));

  return (
    <section className="relative isolate overflow-hidden pb-28 pt-36 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />
      <div className="absolute left-1/2 top-16 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-honey/15 blur-3xl" />
      <div className="absolute left-[6%] top-[48%] -z-10 h-64 w-64 rounded-full bg-rose/20 blur-3xl" />
      <div className="absolute right-[8%] top-[18%] -z-10 h-72 w-72 rounded-full bg-caramel/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.4em] text-caramel shadow-soft backdrop-blur dark:border-white/10 dark:bg-neutral-900/60"
          >
            Now baking
            <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
            Freshly baked happiness
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="font-display text-4xl font-semibold leading-tight text-espresso dark:text-white sm:text-5xl lg:text-[3.8rem]"
          >
            Handcrafted cakes, pastries & breads baked for the moments you want to savor most.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="max-w-2xl text-lg text-espresso/75 dark:text-neutral-200"
          >
            From laminated croissants to slow-fermented sourdough, every batch is made before sunrise with stone-milled
            grains, fair-trade chocolate, and zero preservatives.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/menu"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-caramel to-honey px-8 py-3 text-sm font-semibold text-soft-white shadow-floating transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="relative z-10">Order your favorite treat</span>
              <span className="absolute inset-0 bg-white/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <Link
              href="/custom-orders"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-caramel/40 px-8 py-3 text-sm font-semibold text-caramel transition-all duration-300 hover:border-transparent hover:bg-caramel/15"
            >
              Explore custom cakes
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-2 text-sm text-espresso/70 dark:text-neutral-300"
          >
            <div className="flex items-center gap-1">{ratingStars}</div>
            <span>4.9/5 average from 3,200 neighbor celebrations</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
            className="grid gap-4 pt-6 sm:grid-cols-3"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/60 bg-white/70 px-5 py-4 text-left shadow-soft backdrop-blur dark:border-white/10 dark:bg-neutral-900/70"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-caramel/80">{stat.label}</p>
                <p className="mt-3 font-display text-2xl text-espresso dark:text-white">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[3.5rem] border border-white/50 bg-white/60 p-3 shadow-floating backdrop-blur dark:border-white/10 dark:bg-neutral-900/70">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2.7rem]">
              <Image
                src="https://images.unsplash.com/photo-1514516430032-7d5b0f8d3f91"
                alt="Baker dusting croissants with sugar"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 80vw"
                priority
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-12 left-1/2 w-[85%] -translate-x-1/2 rounded-3xl border border-white/50 bg-white/85 px-6 py-5 shadow-glow backdrop-blur dark:bg-neutral-900/80"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-caramel/80">Today in the oven</p>
            <p className="mt-2 font-display text-xl text-espresso dark:text-white">Brown butter cardamom buns</p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-espresso/70 dark:text-neutral-200">
              <span>Available after 8:00 AM</span>
              <span className="rounded-full bg-caramel/15 px-3 py-1 text-xs font-semibold text-caramel">Limited batch</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
