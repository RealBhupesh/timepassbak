import Image from "next/image";

type PageHeroProps = {
  title: string;
  description: string;
  image?: string;
};

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-soft-white via-cream to-soft-white py-24">
      {image && (
        <div className="absolute inset-0 -z-10 opacity-20">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="relative mx-auto max-w-4xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
        <span className="text-xs uppercase tracking-[0.4em] text-caramel">SweetCrumb Bakery</span>
        <h1 className="font-display text-4xl font-semibold text-cocoa sm:text-5xl">{title}</h1>
        <p className="text-base text-cocoa/75">{description}</p>
      </div>
    </section>
  );
}
