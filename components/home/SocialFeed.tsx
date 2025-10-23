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
    <section className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-section-radial" />
      <div className="absolute left-[14%] top-[6%] -z-10 h-64 w-64 rounded-full bg-honey/20 blur-3xl" />
      <div className="absolute right-[10%] bottom-[-10%] -z-10 h-72 w-72 rounded-full bg-rose/18 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 rounded-[3rem] border border-white/60 bg-white/75 p-8 shadow-floating backdrop-blur dark:border-white/10 dark:bg-neutral-900/70 sm:p-12 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-caramel/30 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-caramel backdrop-blur dark:border-white/10 dark:bg-neutral-900/60">
              On the feed
            </span>
            <h2 className="font-display text-3xl font-semibold text-espresso dark:text-white sm:text-4xl">
              Follow @sweetcrumbbakery for behind-the-oven moments
            </h2>
            <p className="max-w-lg text-sm text-espresso/70 dark:text-neutral-300">
              Daily proofing peaks, latte art pours, and customer smiles — see the stories that inspire our craft and share your own with #SweetCrumbJoy.
            </p>
            <a
              href="https://instagram.com/sweetcrumbbakery"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-caramel to-honey px-6 py-3 text-sm font-semibold text-soft-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              Visit Instagram
            </a>
          </div>
          <div className="flex flex-1 flex-wrap gap-4">
            {instagramImages.map((src) => (
              <div
                key={src}
                className="relative h-48 w-[calc(50%-0.5rem)] overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-1 shadow-soft backdrop-blur dark:border-white/10 dark:bg-neutral-900/70"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                  <Image
                    src={src}
                    alt="SweetCrumb Bakery Instagram"
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 40vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
