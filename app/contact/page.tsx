"use client";

import { useState } from "react";
import { PageHero } from "@/components/sections/PageHero";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setStatus("idle");
    setIsSubmitting(true);

    try {
      const formData = Object.fromEntries(new FormData(event.currentTarget).entries());
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Unable to submit");
      }

      event.currentTarget.reset();
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
        title="Visit SweetCrumb Bakery"
        description="We’re located in the heart of Willowbrook with cozy seating, friendly baristas, and the scent of warm bread welcoming you inside."
        image="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17"
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-cocoa">We'd love to hear from you</h2>
          <p className="text-sm text-cocoa/70">
            Reach out with catering requests, allergy questions, employment inquiries, or just to say hello. Our friendly team is here to help.
          </p>
          <div className="rounded-3xl bg-soft-white px-6 py-6 shadow-soft">
            <h3 className="text-lg font-semibold text-cocoa">Bakery hours</h3>
            <ul className="mt-3 space-y-2 text-sm text-cocoa/75">
              <li>Monday – Friday: 7:00 AM – 6:00 PM</li>
              <li>Saturday: 8:00 AM – 5:00 PM</li>
              <li>Sunday: 8:00 AM – 2:00 PM</li>
            </ul>
            <div className="mt-6 space-y-2 text-sm text-cocoa/75">
              <p>Phone: <a className="font-semibold text-caramel" href="tel:+15551234567">(555) 123-4567</a></p>
              <p>Email: <a className="font-semibold text-caramel" href="mailto:hello@sweetcrumbbakery.com">hello@sweetcrumbbakery.com</a></p>
              <p>Address: 245 Artisan Lane, Willowbrook, NY 11201</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <iframe
              title="SweetCrumb Bakery location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.692095958541!2d-73.99260181116742!3d40.73061047129022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzUwLjIiTiA3M8KwNTknMjEuNCJX!5e0!3m2!1sen!2sus!4v1635708492432!5m2!1sen!2sus"
              width="100%"
              height="320"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl bg-soft-white px-8 py-10 shadow-soft">
          <div className="space-y-2">
            <h3 className="font-display text-2xl text-cocoa">Send us a message</h3>
            <p className="text-sm text-cocoa/70">
              Whether you need a custom cake or have a question about our ingredients, we’ll reply within one business day.
            </p>
          </div>
          <label className="grid gap-2 text-sm">
            Name
            <input
              type="text"
              name="name"
              required
              className="rounded-full border border-transparent bg-white px-4 py-3 text-sm text-cocoa placeholder:text-caramel/50 focus:border-caramel focus:outline-none"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2 text-sm">
            Email
            <input
              type="email"
              name="email"
              required
              className="rounded-full border border-transparent bg-white px-4 py-3 text-sm text-cocoa placeholder:text-caramel/50 focus:border-caramel focus:outline-none"
              placeholder="you@example.com"
            />
          </label>
          <label className="grid gap-2 text-sm">
            Phone
            <input
              type="tel"
              name="phone"
              className="rounded-full border border-transparent bg-white px-4 py-3 text-sm text-cocoa placeholder:text-caramel/50 focus:border-caramel focus:outline-none"
              placeholder="(optional)"
            />
          </label>
          <label className="grid gap-2 text-sm">
            How can we help?
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-3xl border border-transparent bg-white px-4 py-3 text-sm text-cocoa placeholder:text-caramel/50 focus:border-caramel focus:outline-none"
              placeholder="Share details so we can best support you."
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-soft-white transition hover:bg-caramel/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Submit message"}
          </button>

          {status === "success" && (
            <p className="rounded-3xl bg-cream px-4 py-3 text-sm text-cocoa">
              Thank you! We’ll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-3xl bg-blush/40 px-4 py-3 text-sm text-cocoa">
              We couldn't send your message. Please try again or call us directly.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
