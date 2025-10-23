"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { galleryImages } from "@/data/gallery";

const occasions = [
  "Wedding",
  "Birthday",
  "Baby Shower",
  "Corporate Event",
  "Anniversary",
  "Other"
];

const flavors = [
  "Madagascar Vanilla Bean",
  "Dark Chocolate Truffle",
  "Salted Caramel Latte",
  "Lemon Elderflower",
  "Strawberry Shortcake",
  "Red Velvet Cocoa"
];

export default function CustomOrdersPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setStatus("idle");
    setIsSubmitting(true);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      const response = await fetch("/api/custom-orders", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16">
      <PageHero
        title="Custom cakes & dessert tables"
        description="Share your celebration dreams and our cake artists will craft a centerpiece with handcrafted sugar florals, bespoke flavors, and flawless finishes."
        image="https://images.unsplash.com/photo-1525755662778-989d0524087e"
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl bg-soft-white px-8 py-10 shadow-soft">
          <div className="space-y-2">
            <h2 className="font-display text-2xl text-cocoa">Tell us about your event</h2>
            <p className="text-sm text-cocoa/70">
              We recommend submitting custom cake inquiries at least two weeks in advance. Our team responds within 48 hours with a personalized design proposal and quote.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm">
              Name
              <input
                name="name"
                type="text"
                required
                className="rounded-full border border-transparent bg-white px-4 py-3 text-sm text-cocoa placeholder:text-caramel/50 focus:border-caramel focus:outline-none"
                placeholder="Your full name"
              />
            </label>
            <label className="grid gap-2 text-sm">
              Email
              <input
                name="email"
                type="email"
                required
                className="rounded-full border border-transparent bg-white px-4 py-3 text-sm text-cocoa placeholder:text-caramel/50 focus:border-caramel focus:outline-none"
                placeholder="hello@sweetcrumb.com"
              />
            </label>
            <label className="grid gap-2 text-sm">
              Phone number
              <input
                name="phone"
                type="tel"
                className="rounded-full border border-transparent bg-white px-4 py-3 text-sm text-cocoa placeholder:text-caramel/50 focus:border-caramel focus:outline-none"
                placeholder="(555) 123-4567"
              />
            </label>
            <label className="grid gap-2 text-sm">
              Occasion type
              <select
                name="occasion"
                required
                className="rounded-full border border-transparent bg-white px-4 py-3 text-sm text-cocoa focus:border-caramel focus:outline-none"
              >
                {occasions.map((occasion) => (
                  <option key={occasion}>{occasion}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm">
              Event date
              <input
                name="eventDate"
                type="date"
                required
                className="rounded-full border border-transparent bg-white px-4 py-3 text-sm text-cocoa focus:border-caramel focus:outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm">
              Number of servings
              <input
                name="servings"
                type="number"
                min={10}
                required
                className="rounded-full border border-transparent bg-white px-4 py-3 text-sm text-cocoa focus:border-caramel focus:outline-none"
                placeholder="e.g., 75"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm">
            Flavor preferences
            <div className="grid gap-2 sm:grid-cols-2">
              {flavors.map((flavor) => (
                <label key={flavor} className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm text-cocoa shadow-inner">
                  <input type="checkbox" name="flavorPreferences" value={flavor} className="rounded border-caramel text-caramel focus:ring-caramel" />
                  {flavor}
                </label>
              ))}
            </div>
          </label>

          <label className="grid gap-2 text-sm">
            Design inspiration & notes
            <textarea
              name="notes"
              rows={4}
              className="w-full rounded-3xl border border-transparent bg-white px-4 py-3 text-sm text-cocoa placeholder:text-caramel/50 focus:border-caramel focus:outline-none"
              placeholder="Tell us about your theme, colors, or must-have flavors."
            />
          </label>

          <label className="grid gap-2 text-sm">
            Design reference upload
            <input
              name="designReference"
              type="file"
              accept="image/*,application/pdf"
              className="rounded-full border border-dashed border-caramel/40 bg-white px-4 py-3 text-sm text-cocoa file:mr-4 file:rounded-full file:border-0 file:bg-caramel file:px-4 file:py-2 file:text-sm file:font-semibold file:text-soft-white"
            />
            <span className="text-xs text-cocoa/60">Attach sketches, inspiration boards, or color palettes (optional).</span>
          </label>

          <div className="flex items-center justify-between rounded-3xl bg-white px-6 py-4 text-sm text-cocoa">
            <label className="flex items-center gap-3">
              <input type="checkbox" name="tastingRequested" className="rounded border-caramel text-caramel focus:ring-caramel" />
              Schedule a tasting flight (recommended for weddings)
            </label>
            <select
              name="preferredContact"
              className="rounded-full border border-transparent bg-cream px-4 py-2 text-sm text-cocoa focus:border-caramel focus:outline-none"
              defaultValue="email"
            >
              <option value="email">Contact by email</option>
              <option value="phone">Contact by phone</option>
              <option value="text">Contact by text</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-soft-white transition hover:bg-caramel/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending your request..." : "Submit custom order request"}
          </button>

          {status === "success" && (
            <p className="rounded-3xl bg-cream px-4 py-3 text-sm text-cocoa">
              Thank you! Our design concierge will reach out within 48 hours to finalize details.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-3xl bg-blush/40 px-4 py-3 text-sm text-cocoa">
              We couldn't send your request. Please try again or call us at (555) 123-4567.
            </p>
          )}
        </form>

        <aside className="space-y-8">
          <div className="rounded-3xl bg-cocoa px-8 py-10 text-soft-white shadow-soft">
            <h3 className="font-display text-2xl">How custom orders work</h3>
            <ol className="mt-6 space-y-4 text-sm text-cream/90">
              <li>
                <span className="font-semibold text-soft-white">1. Dream.</span> Share your celebration details, theme, and flavor cravings.
              </li>
              <li>
                <span className="font-semibold text-soft-white">2. Design.</span> We send sketches, tasting options, and a detailed quote.
              </li>
              <li>
                <span className="font-semibold text-soft-white">3. Delight.</span> Pick up at the bakery or schedule white-glove delivery and setup.
              </li>
            </ol>
            <div className="mt-8 rounded-2xl bg-soft-white/15 px-5 py-4 text-sm text-cream/80">
              <p>Need something sooner? Call us — we hold a few rush order slots each week.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-xl text-cocoa">A peek at recent designs</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {galleryImages.slice(0, 6).map((image) => (
                <div key={image.id} className="relative h-48 overflow-hidden rounded-3xl shadow-soft">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-cream px-8 py-8 text-sm text-cocoa">
            <h3 className="font-display text-xl text-cocoa">Lead times</h3>
            <ul className="mt-4 space-y-3">
              <li><span className="font-semibold">Signature cakes:</span> 5-7 days notice</li>
              <li><span className="font-semibold">Tiered celebration cakes:</span> 14 days notice</li>
              <li><span className="font-semibold">Dessert tables:</span> 21 days notice</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
