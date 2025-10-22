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
    <section className="bg-soft-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.4em] text-caramel">Gather round the table</span>
            <h2 className="font-display text-3xl font-semibold text-cocoa sm:text-4xl">
              What our neighbors are saying
            </h2>
            <p className="max-w-xl text-sm text-cocoa/70">
              SweetCrumb is fueled by community. From engagement parties to Sunday brunch, we bake to make your moments unforgettable.
            </p>
            <div className="flex gap-3">
              {testimonials.map((item, itemIndex) => (
                <button
                  key={item.id}
                  onClick={() => setIndex(itemIndex)}
                  className={`h-2 w-10 rounded-full transition ${
                    index === itemIndex ? "bg-caramel" : "bg-caramel/30"
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
              className="relative overflow-hidden rounded-3xl bg-white px-8 py-10 shadow-soft"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" sizes="64px" />
                </div>
                <div>
                  <p className="font-semibold text-cocoa">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-caramel">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-6 text-lg leading-8 text-cocoa/80">“{testimonial.message}”</p>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
