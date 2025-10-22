"use client";

import { menuCategories } from "@/data/menu";
import { ProductCard } from "@/components/ui/ProductCard";

const featured = menuCategories.flatMap((category) =>
  category.items.slice(0, 1).map((item) => ({ category: category.name, item }))
);

export function FeaturedMenu() {
  return (
    <section className="bg-gradient-to-br from-soft-white via-cream to-soft-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 pb-10 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-caramel">Guest Favorites</span>
          <h2 className="font-display text-3xl font-semibold text-cocoa sm:text-4xl">
            Signature bakes our community can’t stop talking about
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-cocoa/70">
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
