"use client";

import Link from "next/link";
import { useState } from "react";

const socials = [
  { name: "Instagram", href: "https://instagram.com/sweetcrumbbakery" },
  { name: "Facebook", href: "https://facebook.com/sweetcrumbbakery" },
  { name: "Pinterest", href: "https://pinterest.com/sweetcrumbbakery" }
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    if (!email) {
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        throw new Error("Unable to subscribe");
      }

      setEmail("");
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <footer className="bg-cocoa text-soft-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-display text-2xl">SweetCrumb Bakery</h3>
            <p className="text-sm leading-relaxed text-cream/90">
              Freshly baked happiness, every day. We craft 100% handmade, preservative-free treats using locally sourced ingredients and a whole lot of love.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Visit Us</h4>
            <p className="text-sm text-cream/90">
              245 Artisan Lane
              <br />
              Willowbrook, NY 11201
            </p>
            <p className="text-sm text-cream/90">
              Weekdays: 7:00 AM – 6:00 PM
              <br />
              Weekends: 8:00 AM – 5:00 PM
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="text-sm text-cream/90">
              Phone: <Link href="tel:+15551234567" className="hover:text-white">(555) 123-4567</Link>
              <br />
              Email: <Link href="mailto:hello@sweetcrumbbakery.com" className="hover:text-white">hello@sweetcrumbbakery.com</Link>
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <Link key={social.name} href={social.href} className="text-sm font-medium hover:text-white">
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Join Our Oven Insider List</h4>
            <p className="text-sm text-cream/90">
              Get seasonal specials, baking tips, and early access to limited-edition treats.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-full border border-transparent bg-soft-white px-4 py-2 text-sm text-cocoa placeholder:text-caramel/60 focus:border-caramel focus:outline-none"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setStatus("idle");
                }}
                required
              />
              <button
                type="submit"
                className="w-full rounded-full bg-caramel px-4 py-2 text-sm font-semibold text-soft-white transition hover:bg-caramel/90"
              >
                Subscribe
              </button>
              {status === "success" && (
                <p className="text-xs text-cream">Thanks for joining our community!</p>
              )}
              {status === "error" && (
                <p className="text-xs text-blush">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-cream/20 pt-8 text-xs text-cream/70 md:flex-row">
          <p>© {new Date().getFullYear()} SweetCrumb Bakery. Taste the love in every bite.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
