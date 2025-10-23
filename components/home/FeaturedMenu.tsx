"use client";

import { menuCategories } from "@/data/menu";
import { ProductCard } from "@/components/ui/ProductCard";

const featured = menuCategories.flatMap((category) =>
  category.items.slice(0, 1).map((item) => ({ category: category.name, item }))
);

export function FeaturedMenu() {
  return (
    <section className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-section-radial" />
      <div className="absolute left-[12%] top-[10%] -z-10 h-72 w-72 rounded-full bg-macaron/35 blur-3xl" />
      <div className="absolute right-[10%] bottom-[-18%] -z-10 h-[20rem] w-[20rem] rounded-full bg-honey/20 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 pb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-caramel/30 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-caramel backdrop-blur dark:border-white/10 dark:bg-neutral-900/60">
            Guest Favorites
          </span>
          <h2 className="font-display text-3xl font-semibold text-espresso dark:text-white sm:text-4xl">
            Signature bakes our community can’t stop talking about
          </h2>
          <p className="text-sm text-espresso/70 dark:text-neutral-300">
            Add them to your cart for pickup, delivery, or surprise someone special with a box of SweetCrumb joy.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map(({ category, item }) => (
            <ProductCard key={item.id} item={item} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
