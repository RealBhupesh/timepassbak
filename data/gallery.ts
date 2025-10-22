export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: "cakes" | "pastries" | "bread" | "people" | "ambience";
};

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1571115177098-24ec42ed204c",
    alt: "Handcrafted chocolate cake with berries",
    width: 1080,
    height: 1350,
    category: "cakes"
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1572372642863-791f19d773f1",
    alt: "Freshly baked croissants",
    width: 1080,
    height: 1350,
    category: "pastries"
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    alt: "Bakery counter display with desserts",
    width: 1080,
    height: 1350,
    category: "ambience"
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e",
    alt: "Artisan sourdough bread",
    width: 1080,
    height: 1350,
    category: "bread"
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
    alt: "Baker icing a layer cake",
    width: 1080,
    height: 1350,
    category: "people"
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    alt: "Assorted fruit tarts",
    width: 1080,
    height: 1350,
    category: "pastries"
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    alt: "Freshly baked baguettes",
    width: 1080,
    height: 1350,
    category: "bread"
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
    alt: "Wedding dessert table setup",
    width: 1080,
    height: 1350,
    category: "ambience"
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17",
    alt: "Barista pouring latte art",
    width: 1080,
    height: 1350,
    category: "people"
  }
];
