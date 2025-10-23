"use client";

import { Fragment, useMemo, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useCart } from "@/components/context/CartContext";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    fulfillment: "pickup",
    desiredDate: "",
    notes: ""
  });

  const tax = useMemo(() => subtotal * 0.07, [subtotal]);
  const total = subtotal + tax;

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    setMessage(null);

    const nextErrors: string[] = [];
    if (!customer.name.trim()) nextErrors.push("Please share your name.");
    if (!customer.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) nextErrors.push("Enter a valid email address.");
    if (!customer.phone.trim()) nextErrors.push("Add a phone number so we can reach you.");
    if (!customer.desiredDate) nextErrors.push("Select your pickup or delivery date.");
    if (items.length === 0) nextErrors.push("Your cart is empty.");

    if (nextErrors.length > 0) {
      setErrors(nextErrors);
      setIsCheckingOut(false);
      return;
    }

    setErrors([]);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, customer })
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: "Unable to start checkout." }));
        throw new Error(error.message ?? "Unable to start checkout.");
      }

      const { checkoutUrl, message: responseMessage } = await response.json();
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        setMessage(
          responseMessage ?? "Checkout is configured but no URL was returned. Please verify Stripe credentials."
        );
      }
    } catch (error) {
      console.error(error);
      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn't connect to the payment gateway. Please call us to complete your order."
      );
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md bg-soft-white shadow-2xl dark:bg-neutral-900">
                  <div className="flex h-full flex-col overflow-y-auto">
                    <div className="flex items-center justify-between border-b border-caramel/20 px-6 py-6">
                      <Dialog.Title className="text-lg font-semibold text-cocoa dark:text-white">
                        Your Cart
                      </Dialog.Title>
                      <button
                        type="button"
                        className="rounded-full p-2 text-caramel transition hover:bg-caramel/10"
                        onClick={onClose}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
                      {items.length === 0 ? (
                        <p className="text-sm text-cocoa/70 dark:text-neutral-300">
                          Your cart is empty. Explore our menu and add your favorite treats!
                        </p>
                      ) : (
                        <ul className="space-y-6">
                          {items.map((item) => (
                            <li key={item.id} className="flex gap-4">
                              <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-cream">
                                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <p className="font-semibold text-cocoa dark:text-white">{item.name}</p>
                                    <p className="text-sm text-caramel/70">{item.category}</p>
                                  </div>
                                  <button
                                    className="text-sm text-caramel transition hover:text-caramel/70"
                                    onClick={() => removeItem(item.id)}
                                  >
                                    Remove
                                  </button>
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <button
                                      aria-label={`Decrease quantity of ${item.name}`}
                                      className="flex h-8 w-8 items-center justify-center rounded-full bg-cream text-caramel transition hover:bg-caramel/10"
                                      onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                    >
                                      -
                                    </button>
                                    <span className="min-w-[2rem] text-center text-sm font-medium text-cocoa dark:text-white">
                                      {item.quantity}
                                    </span>
                                    <button
                                      aria-label={`Increase quantity of ${item.name}`}
                                      className="flex h-8 w-8 items-center justify-center rounded-full bg-cream text-caramel transition hover:bg-caramel/10"
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                      +
                                    </button>
                                  </div>
                                  <p className="text-sm font-semibold text-cocoa dark:text-white">
                                    ${(item.price * item.quantity).toFixed(2)}
                                  </p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="space-y-6 border-t border-caramel/20 bg-white/60 px-6 py-6 text-sm text-cocoa/90 dark:bg-neutral-950/60 dark:text-neutral-200">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Estimated tax</span>
                          <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-base font-semibold text-cocoa dark:text-white">
                          <span>Total</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="space-y-4 rounded-2xl bg-soft-white/70 p-4 dark:bg-neutral-900/60">
                        <p className="text-xs uppercase tracking-[0.25em] text-caramel">Guest details</p>
                        <div className="grid gap-3">
                          <label className="grid gap-1">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-caramel">Name</span>
                            <input
                              type="text"
                              value={customer.name}
                              onChange={(event) => setCustomer((prev) => ({ ...prev, name: event.target.value }))}
                              className="rounded-full border border-transparent bg-white px-4 py-2 text-sm text-cocoa placeholder:text-caramel/50 focus:border-caramel focus:outline-none"
                              placeholder="Your name"
                            />
                          </label>
                          <label className="grid gap-1">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-caramel">Email</span>
                            <input
                              type="email"
                              value={customer.email}
                              onChange={(event) => setCustomer((prev) => ({ ...prev, email: event.target.value }))}
                              className="rounded-full border border-transparent bg-white px-4 py-2 text-sm text-cocoa placeholder:text-caramel/50 focus:border-caramel focus:outline-none"
                              placeholder="hello@sweetcrumb.com"
                            />
                          </label>
                          <label className="grid gap-1">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-caramel">Phone</span>
                            <input
                              type="tel"
                              value={customer.phone}
                              onChange={(event) => setCustomer((prev) => ({ ...prev, phone: event.target.value }))}
                              className="rounded-full border border-transparent bg-white px-4 py-2 text-sm text-cocoa placeholder:text-caramel/50 focus:border-caramel focus:outline-none"
                              placeholder="(555) 123-4567"
                            />
                          </label>
                          <div className="grid gap-1">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-caramel">Pickup or delivery</span>
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                type="button"
                                onClick={() => setCustomer((prev) => ({ ...prev, fulfillment: "pickup" }))}
                                className={clsx(
                                  "rounded-full border px-3 py-2 text-sm transition",
                                  customer.fulfillment === "pickup"
                                    ? "border-caramel bg-caramel text-soft-white"
                                    : "border-caramel/30 bg-white text-caramel hover:border-caramel"
                                )}
                              >
                                Pickup
                              </button>
                              <button
                                type="button"
                                onClick={() => setCustomer((prev) => ({ ...prev, fulfillment: "delivery" }))}
                                className={clsx(
                                  "rounded-full border px-3 py-2 text-sm transition",
                                  customer.fulfillment === "delivery"
                                    ? "border-caramel bg-caramel text-soft-white"
                                    : "border-caramel/30 bg-white text-caramel hover:border-caramel"
                                )}
                              >
                                Delivery
                              </button>
                            </div>
                          </div>
                          <label className="grid gap-1">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-caramel">Preferred date</span>
                            <input
                              type="date"
                              value={customer.desiredDate}
                              onChange={(event) => setCustomer((prev) => ({ ...prev, desiredDate: event.target.value }))}
                              className="rounded-full border border-transparent bg-white px-4 py-2 text-sm text-cocoa focus:border-caramel focus:outline-none"
                            />
                          </label>
                          <label className="grid gap-1">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-caramel">Notes</span>
                            <textarea
                              value={customer.notes}
                              onChange={(event) => setCustomer((prev) => ({ ...prev, notes: event.target.value }))}
                              rows={3}
                              className="w-full rounded-3xl border border-transparent bg-white px-4 py-3 text-sm text-cocoa placeholder:text-caramel/50 focus:border-caramel focus:outline-none"
                              placeholder="Allergies, delivery address, or special requests"
                            />
                          </label>
                        </div>
                      </div>

                      {errors.length > 0 && (
                        <ul className="space-y-2 rounded-2xl bg-blush/40 px-4 py-3 text-sm text-cocoa">
                          {errors.map((error) => (
                            <li key={error}>{error}</li>
                          ))}
                        </ul>
                      )}

                      {message && (
                        <p className="rounded-2xl bg-blush/30 px-4 py-3 text-sm text-cocoa">{message}</p>
                      )}

                      <div className="flex flex-col gap-3">
                        <button
                          className="rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-soft-white transition hover:bg-caramel/90 disabled:cursor-not-allowed disabled:opacity-70"
                          onClick={handleCheckout}
                          disabled={items.length === 0 || isCheckingOut}
                        >
                          {isCheckingOut ? "Preparing checkout..." : "Proceed to Checkout"}
                        </button>
                        <button
                          className="rounded-full border border-caramel px-6 py-3 text-sm font-semibold text-caramel transition hover:bg-caramel/10"
                          onClick={() => {
                            clearCart();
                            setMessage(null);
                            setErrors([]);
                            setCustomer({
                              name: "",
                              email: "",
                              phone: "",
                              fulfillment: "pickup",
                              desiredDate: "",
                              notes: ""
                            });
                          }}
                          disabled={items.length === 0}
                        >
                          Clear Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
