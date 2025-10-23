"use client";

import Image from "next/image";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { MenuItem } from "@/data/menu";
import { useCart } from "@/components/context/CartContext";

type ProductCardProps = {
  item: MenuItem;
  category: string;
};

export function ProductCard({ item, category }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/75 shadow-floating backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:shadow-glow dark:border-white/10 dark:bg-neutral-900/70">
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 80vw"
        />
        <div className="pointer-events-none absolute inset-x-6 top-6 flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-soft-white">
          <span className="rounded-full bg-black/25 px-3 py-1 backdrop-blur">{category}</span>
          {item.tags.length > 0 && (
            <span className="rounded-full bg-black/25 px-3 py-1 backdrop-blur">{item.tags[0]}</span>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-5 px-6 pb-7 pt-6 sm:px-8">
        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-espresso dark:text-white">{item.name}</h3>
          <p className="text-sm leading-relaxed text-espresso/75 dark:text-neutral-300">{item.description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="rounded-full bg-caramel/15 px-4 py-2 text-sm font-semibold text-caramel shadow-soft">
            ${item.price.toFixed(2)}
          </span>
          <button
            className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-caramel to-honey px-5 py-2 text-sm font-semibold text-soft-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            onClick={() =>
              addItem({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                category
              })
            }
          >
            <ShoppingBagIcon className="h-5 w-5 transition-transform duration-300 group-hover/btn:scale-110" />
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
