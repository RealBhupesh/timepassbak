"use client";

import Image from "next/image";

const instagramImages = [
  "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0",
  "https://images.unsplash.com/photo-1525755662778-989d0524087e",
  "https://images.unsplash.com/photo-1572372642863-791f19d773f1",
  "https://images.unsplash.com/photo-1543709539-4308f7e4c8dc"
];

export function SocialFeed() {
  return (
    <section className="bg-gradient-to-br from-soft-white via-white to-cream py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="flex-1 space-y-5">
          <span className="text-xs uppercase tracking-[0.4em] text-caramel">On the feed</span>
          <h2 className="font-display text-3xl font-semibold text-cocoa sm:text-4xl">
            Follow @sweetcrumbbakery for behind-the-oven moments
          </h2>
          <p className="max-w-lg text-sm text-cocoa/70">
            Daily proofing peaks, latte art pours, and customer smiles — see the stories that inspire our craft and share your own with #SweetCrumbJoy.
          </p>
          <a
            href="https://instagram.com/sweetcrumbbakery"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-soft-white transition hover:bg-caramel/90"
          >
            Visit Instagram
          </a>
        </div>
        <div className="flex flex-1 flex-wrap gap-4">
          {instagramImages.map((src) => (
            <div key={src} className="relative h-48 w-[calc(50%-0.5rem)] overflow-hidden rounded-3xl shadow-soft">
              <Image
                src={src}
                alt="SweetCrumb Bakery Instagram"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 40vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
