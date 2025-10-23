import Image from "next/image";
import Link from "next/link";

export function StoryPeek() {
  return (
    <section className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-section-radial" />
      <div className="absolute right-[10%] top-[8%] -z-10 h-[18rem] w-[18rem] rounded-full bg-honey/20 blur-3xl" />
      <div className="absolute left-[12%] bottom-[-12%] -z-10 h-[16rem] w-[16rem] rounded-full bg-rose/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-caramel/30 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-caramel backdrop-blur dark:border-white/10 dark:bg-neutral-900/60">
            Handcrafted with love
          </span>
          <h2 className="font-display text-3xl font-semibold text-espresso dark:text-white sm:text-4xl">
            SweetCrumb started with a community pop-up and a promise to bake better together.
          </h2>
          <p className="text-sm leading-relaxed text-espresso/75 dark:text-neutral-300">
            Founder Amara Collins opened SweetCrumb to bring artisanal pastries back to her hometown. From sourcing local heirloom grains to composting every leftover crumb, we bake with intention for the people and planet we love.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "72-hour laminated croissants with cultured butter",
              "Fair-trade chocolate from small-batch makers",
              "Bread made with house-milled grains and wild sourdough starter",
              "5% of profits donated to Willowbrook Food Pantry"
            ].map((highlight) => (
              <li
                key={highlight}
                className="rounded-3xl border border-white/60 bg-white/75 px-6 py-5 text-sm text-espresso/75 shadow-soft backdrop-blur dark:border-white/10 dark:bg-neutral-900/70 dark:text-neutral-300"
              >
                • {highlight}
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-caramel/40 px-6 py-3 text-sm font-semibold text-caramel transition-all duration-300 hover:border-transparent hover:bg-caramel/15"
          >
            Discover our story
          </Link>
        </div>
        <div className="relative flex h-full flex-col gap-6">
          <div className="relative h-72 overflow-hidden rounded-[3rem] border border-white/60 bg-white/70 p-2 shadow-floating backdrop-blur dark:border-white/10 dark:bg-neutral-900/70">
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem]">
              <Image
                src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0"
                alt="Baker dusting pastries"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-[3rem] border border-white/60 bg-white/70 p-2 shadow-floating backdrop-blur dark:border-white/10 dark:bg-neutral-900/70">
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem]">
              <Image
                src="https://images.unsplash.com/photo-1525755662778-989d0524087e"
                alt="Fresh bread on display"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
