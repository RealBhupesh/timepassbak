import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { headingFont, bodyFont } from "@/lib/fonts";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/layout/AmbientBackground";

export const metadata: Metadata = {
  title: {
    template: "%s | SweetCrumb Bakery",
    default: "SweetCrumb Bakery | Freshly baked happiness, every day"
  },
  description:
    "SweetCrumb Bakery crafts handcrafted cakes, pastries, breads, and desserts daily using 100% preservative-free ingredients.",
  keywords: [
    "bakery",
    "cakes",
    "pastries",
    "artisan bread",
    "desserts",
    "handmade",
    "local bakery",
    "custom cakes",
    "SweetCrumb Bakery"
  ],
  openGraph: {
    title: "SweetCrumb Bakery",
    description:
      "Freshly baked happiness, every day. Discover handcrafted cakes, pastries, breads, and desserts at SweetCrumb Bakery.",
    type: "website",
    locale: "en_US",
    url: "https://sweetcrumb-bakery.example.com",
    siteName: "SweetCrumb Bakery",
    images: [
      {
        url: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0",
        width: 1200,
        height: 630,
        alt: "SweetCrumb Bakery display of cakes and pastries"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SweetCrumb Bakery",
    description: "Freshly baked happiness, every day.",
    images: ["https://images.unsplash.com/photo-1483695028939-5bb13f8648b0"],
    creator: "@sweetcrumbbakery"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
      <body className="text-espresso antialiased transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100">
        <AmbientBackground />
        <Providers>
          <div className="relative z-10 flex min-h-screen flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1 pt-28 md:pt-32">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
