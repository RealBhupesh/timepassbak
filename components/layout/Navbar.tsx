"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3BottomLeftIcon,
  ShoppingBagIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { CartDrawer } from "@/components/layout/CartDrawer";
import clsx from "clsx";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Custom Orders", href: "/custom-orders" },
  { name: "Gallery", href: "/gallery" },
  { name: "Visit Us", href: "/contact" },
  { name: "Blog", href: "/blog" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pb-4 pt-6 transition-all duration-300">
      <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/70 px-4 py-3 shadow-glow backdrop-blur-2xl dark:border-white/10 dark:bg-neutral-900/70 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            className="rounded-full bg-white/70 p-2 text-caramel shadow-soft transition hover:-translate-y-0.5 hover:bg-white/90 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Bars3BottomLeftIcon className="h-6 w-6" />
          </button>
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/70 bg-white/70 shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1542831371-d531d36971e6"
                alt="SweetCrumb Bakery logo"
                fill
                className="object-cover"
                sizes="44px"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold text-espresso dark:text-white">
                SweetCrumb Bakery
              </span>
              <span className="text-xs uppercase tracking-[0.32em] text-caramel/80">
                Freshly baked happiness
              </span>
            </div>
          </Link>
        </div>
        <nav className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-caramel/20 text-caramel shadow-inner"
                    : "text-espresso/70 hover:bg-white/60 hover:text-caramel dark:text-neutral-200 dark:hover:bg-neutral-800/70"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <button
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-caramel to-honey px-5 py-2 text-sm font-semibold text-soft-white shadow-floating transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              <ShoppingBagIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              Order Now
            </span>
            <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
          <Link
            href="/menu"
            className="hidden rounded-full border border-caramel/40 px-5 py-2 text-sm font-semibold text-caramel transition-all duration-300 hover:border-transparent hover:bg-caramel/15 lg:inline-flex"
          >
            View Menu
          </Link>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative flex w-80 flex-col gap-6 rounded-3xl border border-white/50 bg-white/80 px-6 py-8 shadow-floating backdrop-blur-2xl dark:border-white/10 dark:bg-neutral-900/90">
                <button
                  className="absolute right-4 top-4 rounded-full bg-white/70 p-2 text-caramel shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
                <div className="mt-4 flex flex-col">
                  <span className="font-display text-lg font-semibold text-espresso dark:text-white">
                    SweetCrumb Bakery
                  </span>
                  <span className="text-xs uppercase tracking-[0.32em] text-caramel/80">
                    Freshly baked happiness
                  </span>
                </div>
                <nav className="flex flex-col gap-3">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={clsx(
                          "rounded-2xl px-4 py-3 text-base font-medium transition-all duration-300",
                          isActive
                            ? "bg-caramel/20 text-caramel shadow-inner"
                            : "text-espresso/80 hover:bg-white/70 hover:text-caramel dark:text-neutral-100 dark:hover:bg-neutral-800/80"
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <button
                    className="group relative flex-1 overflow-hidden rounded-full bg-gradient-to-r from-caramel to-honey px-4 py-2 text-sm font-semibold text-soft-white shadow-floating transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
                    onClick={() => {
                      setOpen(false);
                      setCartOpen(true);
                    }}
                  >
                    <span className="relative z-10 inline-flex w-full items-center justify-center gap-2">
                      <ShoppingBagIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      Order Now
                    </span>
                    <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}
