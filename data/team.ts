export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "team-amara",
    name: "Amara Collins",
    role: "Founder & Executive Pastry Chef",
    bio: "Trained in Paris and rooted in community, Amara brings 15 years of pastry artistry to every bite.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518"
  },
  {
    id: "team-leo",
    name: "Leo Rivera",
    role: "Head Baker",
    bio: "Leo mills his own flour blends and swears by slow fermentation to coax the best flavor from each loaf.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    id: "team-priya",
    name: "Priya Kapoor",
    role: "Custom Cake Designer",
    bio: "Priya paints buttercream botanicals and handcrafts sugar florals inspired by your celebrations.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  }
];
