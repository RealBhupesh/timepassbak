"use client";

import { useMemo, useState } from "react";
import { menuCategories } from "@/data/menu";
import clsx from "clsx";
import { PageHero } from "@/components/sections/PageHero";
import { ProductCard } from "@/components/ui/ProductCard";

const categories = [{ id: "all", name: "All" }, ...menuCategories.map((category) => ({ id: category.id, name: category.name }))];

type FilterState = {
  category: string;
  search: string;
  tag: string | null;
};

export default function MenuPage() {
  const [filters, setFilters] = useState<FilterState>({ category: "all", search: "", tag: null });

  const items = useMemo(() => {
    const data = menuCategories.flatMap((category) =>
      category.items.map((item) => ({ ...item, category: category.name, categoryId: category.id }))
    );

    return data.filter((item) => {
      if (filters.category !== "all" && item.categoryId !== filters.category) {
        return false;
      }
      if (filters.tag && !item.tags.includes(filters.tag)) {
        return false;
      }
      if (filters.search) {
        const term = filters.search.toLowerCase();
        return (
          item.name.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term) ||
          item.tags.some((tag) => tag.toLowerCase().includes(term))
        );
      }
      return true;
    });
  }, [filters]);

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    menuCategories.forEach((category) => category.items.forEach((item) => item.tags.forEach((tag) => tags.add(tag))));
    return Array.from(tags);
  }, []);

  return (
    <div className="space-y-20">
      <PageHero
        title="Browse our handcrafted menu"
        description="From buttery croissants to celebration cakes, each bake is made from scratch with thoughtfully sourced ingredients."
        image="https://images.unsplash.com/photo-1572372642863-791f19d773f1"
      />

      <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-soft-white px-6 py-6 shadow-soft">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilters((prev) => ({ ...prev, category: category.id }))}
                className={clsx(
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  filters.category === category.id
                    ? "bg-caramel text-soft-white"
                    : "bg-white text-caramel shadow-sm hover:bg-caramel/10"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <input
              type="search"
              placeholder="Search pastries, flavors, or tags"
              value={filters.search}
              onChange={(event) => setFilters((prev) => ({ ...prev, search: event.target.value }))}
              className="rounded-full border border-transparent bg-white px-4 py-2 text-sm text-cocoa placeholder:text-caramel/50 focus:border-caramel focus:outline-none"
            />
            <select
              value={filters.tag ?? ""}
              onChange={(event) =>
                setFilters((prev) => ({ ...prev, tag: event.target.value || null }))
              }
              className="rounded-full border border-transparent bg-white px-4 py-2 text-sm text-cocoa focus:border-caramel focus:outline-none"
            >
              <option value="">All tags</option>
              {availableTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-10">
          {menuCategories.map((category) => {
            const filteredItems = items.filter((item) => item.categoryId === category.id);
            if (filters.category !== "all" && filters.category !== category.id) {
              return null;
            }
            if (filteredItems.length === 0) {
              return null;
            }
            return (
              <div key={category.id} className="space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="font-display text-2xl text-cocoa">{category.name}</h2>
                    <p className="text-sm text-cocoa/70">{category.description}</p>
                  </div>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {filteredItems.map((item) => (
                    <ProductCard key={item.id} item={item} category={category.name} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {items.length === 0 && (
          <div className="rounded-3xl bg-cream px-6 py-10 text-center text-sm text-cocoa">
            We couldn't find items matching your filters. Try adjusting your search or explore another category.
          </div>
        )}
      </section>
    </div>
  );
}
