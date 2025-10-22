export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
};

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "cakes",
    name: "Cakes",
    description: "Celebration-ready cakes layered with silky buttercreams and seasonal fruits.",
    items: [
      {
        id: "cake-vanilla-bean",
        name: "Vanilla Bean Berry Bliss",
        description: "Fluffy vanilla bean sponge layered with mascarpone cream and macerated berries.",
        price: 58,
        image: "https://images.unsplash.com/photo-1526019102199-2eee09a817db",
        tags: ["best seller", "signature"]
      },
      {
        id: "cake-chocolate-fudge",
        name: "Double Chocolate Fudge",
        description: "Moist dark chocolate cake with silky ganache and salted cocoa nib crunch.",
        price: 62,
        image: "https://images.unsplash.com/photo-1548372291-3bdb6c7e76c8",
        tags: ["chocolate", "crowd favorite"]
      },
      {
        id: "cake-carrot",
        name: "Spiced Carrot Garden",
        description: "Carrot cake with warm spices, toasted pecans, and tangy cream cheese frosting.",
        price: 54,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        tags: ["gluten-friendly"]
      }
    ]
  },
  {
    id: "pastries",
    name: "Pastries",
    description: "Buttery viennoiserie laminated by hand every morning.",
    items: [
      {
        id: "pastry-croissant",
        name: "Parisian Butter Croissant",
        description: "24-layer croissant with caramelized exterior and honeycomb crumb.",
        price: 4.5,
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
        tags: ["morning favorite"]
      },
      {
        id: "pastry-cruffin",
        name: "Cinnamon Sugar Cruffin",
        description: "Croissant muffin rolled in cinnamon sugar and filled with Madagascar vanilla cream.",
        price: 6,
        image: "https://images.unsplash.com/photo-1604908814110-61f70820fd2d",
        tags: ["seasonal"]
      },
      {
        id: "pastry-danish",
        name: "Summer Berry Danish",
        description: "Lemon mascarpone filling topped with macerated strawberries and blueberries.",
        price: 5.5,
        image: "https://images.unsplash.com/photo-1604908177082-df7c29abcf0f",
        tags: ["seasonal", "fruit forward"]
      }
    ]
  },
  {
    id: "bread",
    name: "Breads",
    description: "Naturally leavened loaves cold-proofed for flavor and texture.",
    items: [
      {
        id: "bread-sourdough",
        name: "Country Sourdough",
        description: "48-hour fermented loaf with caramelized crust and tender crumb.",
        price: 9,
        image: "https://images.unsplash.com/photo-1514996937319-344454492b37",
        tags: ["daily", "vegan"]
      },
      {
        id: "bread-rye",
        name: "Seeded Rye",
        description: "Sprouted rye loaf studded with sunflower, flax, and sesame seeds.",
        price: 8,
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
        tags: ["fiber rich"]
      },
      {
        id: "bread-brioche",
        name: "Brioche Pull-Apart",
        description: "Feather-soft brioche brushed with brown sugar butter glaze.",
        price: 11,
        image: "https://images.unsplash.com/photo-1598373182133-66d63bd8227d",
        tags: ["weekend special"]
      }
    ]
  },
  {
    id: "cookies",
    name: "Cookies",
    description: "Chewy, gooey, and perfect for coffee dunking.",
    items: [
      {
        id: "cookie-chocchip",
        name: "Sea Salt Chocolate Chunk",
        description: "Brown-butter dough loaded with dark chocolate and Maldon salt flakes.",
        price: 3.5,
        image: "https://images.unsplash.com/photo-1548365328-5473d2d71350",
        tags: ["best seller"]
      },
      {
        id: "cookie-macadamia",
        name: "White Chocolate Macadamia",
        description: "Soft-baked cookie with roasted macadamias and vanilla bean glaze.",
        price: 3.25,
        image: "https://images.unsplash.com/photo-1619424238789-25bba9e9dc38",
        tags: ["gluten-friendly"]
      },
      {
        id: "cookie-snickerdoodle",
        name: "Brown Sugar Snickerdoodle",
        description: "Cinnamon-swirled cookie rolled in caramelized sugar crystals.",
        price: 3,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        tags: ["nut-free"]
      }
    ]
  },
  {
    id: "custom",
    name: "Custom Orders",
    description: "Made-to-order creations tailored to your celebrations.",
    items: [
      {
        id: "custom-floral",
        name: "Floral Buttercream Cake",
        description: "Choose your sponge, filling, and florals for an unforgettable centerpiece.",
        price: 95,
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
        tags: ["customizable"]
      },
      {
        id: "custom-dessert-table",
        name: "Dessert Table Ensemble",
        description: "Curated selection of bite-sized treats for showers, weddings, and corporate events.",
        price: 185,
        image: "https://images.unsplash.com/photo-1526080676457-4544bf0eb39b",
        tags: ["event"]
      }
    ]
  }
];

export const todaysSpecials = [
  {
    id: "special-roasted-pear",
    title: "Roasted Pear Frangipane Tart",
    description: "Buttery tart shell filled with almond frangipane, spiced pears, and cider glaze.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    price: 32,
    available: "Today only"
  },
  {
    id: "special-maple-latte",
    title: "Maple Pecan Latte",
    description: "House espresso with toasted pecan milk, maple drizzle, and nutmeg dust.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    price: 6.5,
    available: "Limited batch"
  }
];
