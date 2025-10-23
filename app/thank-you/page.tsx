import Link from "next/link";

export default function ThankYouPage({ searchParams }: { searchParams: { orderId?: string } }) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-4 text-center sm:px-6 lg:px-8">
      <span className="text-xs uppercase tracking-[0.4em] text-caramel">SweetCrumb Bakery</span>
      <h1 className="font-display text-4xl font-semibold text-cocoa">Thank you for your order!</h1>
      <p className="max-w-xl text-sm text-cocoa/75">
        We’re already preheating the ovens. Our team will confirm the details shortly and send pick-up or delivery instructions to your inbox.
      </p>
      {searchParams.orderId && (
        <p className="rounded-full bg-cream px-6 py-3 text-sm text-cocoa">
          Order number: <span className="font-semibold">{searchParams.orderId}</span>
        </p>
      )}
      <Link
        href="/menu"
        className="rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-soft-white transition hover:bg-caramel/90"
      >
        Keep browsing treats
      </Link>
    </div>
  );
}
