import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { teamMembers } from "@/data/team";
import { faqs } from "@/data/faqs";

const values = [
  {
    title: "Handcrafted daily",
    description:
      "We laminate pastries, whip curds, and proof breads in small batches so everything is fresh and full of heart."
  },
  {
    title: "Sustainably sourced",
    description:
      "From regenerative grain farmers to fair-trade chocolate makers, we partner with producers who care for the land."
  },
  {
    title: "Community first",
    description:
      "We donate surplus bakes nightly and host monthly baking classes for teens in Willowbrook."
  }
];

const milestones = [
  {
    year: "2016",
    title: "Our farmers market beginnings",
    description: "Amara sold her first 60 loaves at the Willowbrook Saturday market — they sold out in 45 minutes."
  },
  {
    year: "2019",
    title: "The bakery doors open",
    description: "SweetCrumb’s flagship location welcomed neighbors with the scent of cinnamon sugar cruffins."
  },
  {
    year: "2022",
    title: "Sustainability pledge",
    description: "Installed energy-efficient ovens and launched a packaging take-back program."
  },
  {
    year: "2024",
    title: "Custom cake studio",
    description: "Expanded with a design studio where Priya brings your celebration dreams to life."
  }
];

export default function AboutPage() {
  return (
    <div className="space-y-24">
      <PageHero
        title="Our story is baked into every layer"
        description="SweetCrumb Bakery is a women-led, community-driven space where buttery layers, warm smiles, and sustainable sourcing come together."
        image="https://images.unsplash.com/photo-1543357480-c60d40007a7a"
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-6">
          <h2 className="font-display text-3xl font-semibold text-cocoa">From pop-up tents to a beloved neighborhood bakery</h2>
          <p className="text-sm leading-relaxed text-cocoa/75">
            SweetCrumb began as Amara’s weekend passion project. After training in Paris and New York, she returned home determined to bake with local ingredients, no shortcuts, and genuine hospitality. Each day, our team rises before dawn to shape dough, whip creams, and craft flavors that feel both nostalgic and new.
          </p>
          <p className="text-sm leading-relaxed text-cocoa/75">
            Today, we operate a cozy bakery, a coffee bar, and a custom cake studio under one roof. Our menu changes with the seasons, featuring produce from 12 nearby farms and millers we know by name. Every SweetCrumb employee receives paid culinary education and participates in monthly volunteer shifts with the Willowbrook Food Pantry.
          </p>
        </div>
        <div className="relative h-96 overflow-hidden rounded-[3rem] bg-cream shadow-soft">
          <Image
            src="https://images.unsplash.com/photo-1546554137-f86b9593a222"
            alt="SweetCrumb bakers at work"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-soft-white py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {values.map((value) => (
            <div key={value.title} className="rounded-3xl bg-white px-6 py-8 text-cocoa shadow-soft">
              <h3 className="font-display text-xl font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm text-cocoa/75">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-caramel">Meet the makers</span>
          <h2 className="font-display text-3xl font-semibold text-cocoa">The team bringing warmth to every batch</h2>
          <p className="mx-auto max-w-2xl text-sm text-cocoa/70">
            Our crew is a blend of pastry pros, coffee nerds, and bread whisperers. Together, we cultivate a workplace that smells like vanilla and feels like family.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.id} className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft">
              <div className="relative h-72 w-full overflow-hidden">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="space-y-3 px-6 py-6">
                <h3 className="font-display text-xl text-cocoa">{member.name}</h3>
                <p className="text-xs uppercase tracking-[0.3em] text-caramel">{member.role}</p>
                <p className="text-sm text-cocoa/75">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-semibold text-cocoa">Milestones in our journey</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="rounded-3xl bg-white/80 px-6 py-6 shadow-soft">
                <p className="text-xs uppercase tracking-[0.3em] text-caramel">{milestone.year}</p>
                <h3 className="mt-2 font-display text-xl text-cocoa">{milestone.title}</h3>
                <p className="mt-3 text-sm text-cocoa/75">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-5">
            <span className="text-xs uppercase tracking-[0.4em] text-caramel">Sustainability & sourcing</span>
            <h2 className="font-display text-3xl font-semibold text-cocoa">Baking responsibly from field to oven</h2>
            <p className="text-sm text-cocoa/75">
              We operate on renewable energy, compost all organic waste, and use reusable or recyclable packaging. Our coffee program features direct-trade beans roasted in small batches, and we offset delivery emissions through local tree-planting partners.
            </p>
            <ul className="space-y-3 text-sm text-cocoa/75">
              <li>• Partnered with Willowbrook Compost Collective for daily pickup.</li>
              <li>• All milks sourced from family-owned dairies within 120 miles.</li>
              <li>• Seasonal menus reduce food waste and highlight local harvests.</li>
            </ul>
          </div>
          <div className="rounded-[3rem] bg-white p-8 shadow-soft">
            <h3 className="font-display text-xl text-cocoa">Frequently asked questions</h3>
            <dl className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-sm font-semibold text-caramel">{faq.question}</dt>
                  <dd className="mt-1 text-sm text-cocoa/75">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
