"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { PageHero } from "@/components/sections/PageHero";
import { galleryImages } from "@/data/gallery";

const filterOptions = [
  { id: "all", name: "All" },
  { id: "cakes", name: "Cakes" },
  { id: "pastries", name: "Pastries" },
  { id: "bread", name: "Breads" },
  { id: "people", name: "In the bakery" },
  { id: "ambience", name: "Atmosphere" }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[number] | null>(null);

  const filteredImages = galleryImages.filter((image) => filter === "all" || image.category === filter);

  return (
    <div className="space-y-12">
      <PageHero
        title="A look inside SweetCrumb"
        description="Step into our warm, sunlit bakery where butter layers puff, bread cools on racks, and celebrations are crafted by hand."
        image="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0"
      />

      <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setFilter(option.id)}
              className={clsx(
                "rounded-full px-5 py-2 text-sm font-semibold transition",
                filter === option.id
                  ? "bg-caramel text-soft-white"
                  : "bg-soft-white text-caramel shadow-soft hover:bg-caramel/10"
              )}
            >
              {option.name}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative h-72 overflow-hidden rounded-3xl bg-white shadow-soft"
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 text-left text-sm font-semibold text-soft-white drop-shadow">
                {image.alt}
              </span>
            </button>
          ))}
        </div>
      </section>

      <Dialog open={selectedImage !== null} onClose={() => setSelectedImage(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {selectedImage && (
            <Dialog.Panel className="relative max-w-4xl overflow-hidden rounded-3xl bg-soft-white shadow-2xl">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="h-full w-full object-cover"
              />
              <div className="p-6 text-sm text-cocoa">
                <p className="font-semibold">{selectedImage.alt}</p>
                <button
                  className="mt-4 rounded-full bg-caramel px-4 py-2 text-sm font-semibold text-soft-white hover:bg-caramel/90"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          )}
        </div>
      </Dialog>
    </div>
  );
}
