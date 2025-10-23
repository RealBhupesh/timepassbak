import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <div className="space-y-16">
      <PageHero
        title="Fresh from the oven journal"
        description="Baking tips, behind-the-scenes stories, and seasonal specials from the SweetCrumb team."
        image="https://images.unsplash.com/photo-1470337458703-46ad1756a187"
      />

      <section className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-3xl bg-soft-white shadow-soft">
            <div className="relative h-72 w-full overflow-hidden">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <div className="space-y-4 px-6 py-6">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-caramel">
                <span>{new Date(post.publishedAt).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
              <h2 className="font-display text-2xl text-cocoa">{post.title}</h2>
              <p className="text-sm text-cocoa/75">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-caramel">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-caramel/10 px-3 py-1">#{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
