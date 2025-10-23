"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-section-radial" />
      <div className="absolute left-[18%] top-[6%] -z-10 h-72 w-72 rounded-full bg-macaron/30 blur-3xl" />
      <div className="absolute right-[12%] bottom-[-12%] -z-10 h-80 w-80 rounded-full bg-honey/25 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-caramel/30 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-caramel backdrop-blur dark:border-white/10 dark:bg-neutral-900/60">
            Gather round the table
          </span>
          <h2 className="font-display text-3xl font-semibold text-espresso dark:text-white sm:text-4xl">
            What our neighbors are saying
          </h2>
          <p className="max-w-xl text-sm text-espresso/70 dark:text-neutral-300">
            SweetCrumb is fueled by community. From engagement parties to Sunday brunch, we bake to make your moments unforgettable.
          </p>
          <div className="flex gap-3">
            {testimonials.map((item, itemIndex) => (
              <button
                key={item.id}
                onClick={() => setIndex(itemIndex)}
                className={`h-2 w-12 rounded-full transition-all duration-300 ${
                  index === itemIndex
                    ? "bg-gradient-to-r from-caramel to-honey shadow-soft"
                    : "bg-caramel/25 hover:bg-caramel/40"
                }`}
                aria-label={`Show testimonial from ${item.name}`}
              />
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.article
            key={testimonial.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="relative mt-12 overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/80 px-8 py-10 shadow-floating backdrop-blur dark:border-white/10 dark:bg-neutral-900/80 lg:mt-0"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/60 bg-white/70 shadow-soft">
                <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" sizes="64px" />
              </div>
              <div>
                <p className="font-semibold text-espresso dark:text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-caramel/80">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-espresso/80 dark:text-neutral-200">“{testimonial.message}”</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-espresso/70 dark:text-neutral-300">
              <span className="text-lg text-caramel">★★★★★</span>
              <span>Fresh from our community kitchen</span>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
