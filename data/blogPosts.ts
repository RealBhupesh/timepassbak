export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "autumn-harvest-bakes",
    title: "Autumn Harvest Bakes to Cozy Up With",
    excerpt:
      "We partnered with local farms to bring you maple pecan loaves, chai-spiced cruffins, and apple butter brioche.",
    content:
      "As leaves begin to tumble, our ovens turn to the comforting flavors of the season. We source heirloom apples from Willowbrook Orchard and small-batch maple syrup from Amber Ridge. The result? A line-up of aromatic treats that taste like sweater weather. Discover the stories behind each ingredient and meet the farmers who cultivate them.",
    author: "Chef Amara",
    publishedAt: "2024-09-21",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
    tags: ["seasonal", "recipes"]
  },
  {
    slug: "sourdough-secrets",
    title: "5 Secrets to Our Slow-Fermented Sourdough",
    excerpt:
      "Our head baker shares the techniques that give our loaves their famous crackle and custardy crumb.",
    content:
      "Patience is the magic ingredient in every loaf of SweetCrumb sourdough. From cultivating a lively starter to cold-proofing for 18 hours, we walk you through the process step by step so you can recreate a slice of our bakery at home.",
    author: "Head Baker Leo",
    publishedAt: "2024-08-14",
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37",
    tags: ["bread", "techniques"]
  },
  {
    slug: "celebration-dessert-trends",
    title: "Celebration Dessert Trends for 2025",
    excerpt:
      "From botanical buttercream to dessert tables with plant-based delights, here is what we're baking for your milestone moments.",
    content:
      "We combed through hundreds of custom order requests to spot the design and flavor trends couples and hosts are loving. Spoiler: edible floral art is here to stay, and so are nostalgic flavors with modern twists.",
    author: "Design Lead Priya",
    publishedAt: "2024-07-05",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    tags: ["custom", "events"]
  }
];
