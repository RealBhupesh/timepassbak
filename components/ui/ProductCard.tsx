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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/70 shadow-soft transition hover:-translate-y-2 hover:shadow-2xl dark:bg-neutral-900/70">
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 80vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 px-6 py-6">
        <div>
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-caramel">
            <span>{category}</span>
            {item.tags.length > 0 && <span>{item.tags[0]}</span>}
          </div>
          <h3 className="mt-2 font-display text-xl font-semibold text-cocoa dark:text-white">
            {item.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-cocoa/80 dark:text-neutral-300">
            {item.description}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-semibold text-caramel">${item.price.toFixed(2)}</span>
          <button
            className="flex items-center gap-2 rounded-full bg-caramel px-4 py-2 text-sm font-semibold text-soft-white transition hover:bg-caramel/90"
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
            <ShoppingBagIcon className="h-5 w-5" />
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
