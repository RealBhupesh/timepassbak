import Image from "next/image";
import Link from "next/link";

export function StoryPeek() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.4em] text-caramel">Handcrafted with love</span>
          <h2 className="font-display text-3xl font-semibold text-cocoa sm:text-4xl">
            SweetCrumb started with a community pop-up and a promise to bake better together.
          </h2>
          <p className="text-sm leading-relaxed text-cocoa/75">
            Founder Amara Collins opened SweetCrumb to bring artisanal pastries back to her hometown. From sourcing local heirloom grains to composting every leftover crumb, we bake with intention for the people and planet we love.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="rounded-3xl bg-cream px-6 py-5 text-sm text-cocoa/80">
              • 72-hour laminated croissants with cultured butter
            </li>
            <li className="rounded-3xl bg-cream px-6 py-5 text-sm text-cocoa/80">
              • Fair-trade chocolate from small-batch makers
            </li>
            <li className="rounded-3xl bg-cream px-6 py-5 text-sm text-cocoa/80">
              • Bread made with house-milled grains and wild sourdough starter
            </li>
            <li className="rounded-3xl bg-cream px-6 py-5 text-sm text-cocoa/80">
              • 5% of profits donated to Willowbrook Food Pantry
            </li>
          </ul>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-caramel px-6 py-3 text-sm font-semibold text-caramel transition hover:bg-caramel/10"
          >
            Discover our story
          </Link>
        </div>
        <div className="relative flex h-full flex-col gap-6">
          <div className="relative h-72 overflow-hidden rounded-[3rem] shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0"
              alt="Baker dusting pastries"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
          </div>
          <div className="relative h-72 overflow-hidden rounded-[3rem] shadow-soft">
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
    </section>
  );
}
