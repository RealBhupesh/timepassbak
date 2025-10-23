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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-transparent bg-soft-white/80 backdrop-blur-xl transition dark:bg-neutral-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            className="rounded-full p-2 text-caramel transition hover:bg-caramel/10 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Bars3BottomLeftIcon className="h-6 w-6" />
          </button>
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-caramel/10 shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1542831371-d531d36971e6"
                alt="SweetCrumb Bakery logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold text-cocoa dark:text-white">
                SweetCrumb Bakery
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-caramel">
                Freshly baked happiness
              </span>
            </div>
          </Link>
        </div>
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "text-sm font-medium transition hover:text-caramel",
                pathname === item.href ? "text-caramel" : "text-cocoa/70 dark:text-neutral-200"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="relative rounded-full bg-caramel px-5 py-2 text-sm font-semibold text-soft-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingBagIcon className="mr-2 inline h-5 w-5" />
            Order Now
          </button>
          <Link
            href="/menu"
            className="hidden rounded-full border border-caramel px-5 py-2 text-sm font-semibold text-caramel transition hover:bg-caramel/10 lg:inline-flex"
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
              <Dialog.Panel className="relative flex w-80 flex-col gap-6 bg-soft-white px-6 py-8 shadow-2xl dark:bg-neutral-900">
                <button
                  className="absolute right-4 top-4 rounded-full p-2 text-caramel transition hover:bg-caramel/10"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
                <div className="mt-4 flex flex-col">
                  <span className="font-display text-lg font-semibold text-cocoa dark:text-white">
                    SweetCrumb Bakery
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-caramel">
                    Freshly baked happiness
                  </span>
                </div>
                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "text-base font-medium transition hover:text-caramel",
                        pathname === item.href
                          ? "text-caramel"
                          : "text-cocoa/80 dark:text-neutral-100"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="flex items-center gap-4">
                  <ThemeToggle />
                  <button
                    className="flex-1 rounded-full bg-caramel px-4 py-2 text-sm font-semibold text-soft-white"
                    onClick={() => {
                      setOpen(false);
                      setCartOpen(true);
                    }}
                  >
                    Order Now
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
