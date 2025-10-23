export type Testimonial = {
  id: string;
  name: string;
  role: string;
  message: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Mia Thompson",
    role: "Event Planner",
    message:
      "Every cake from SweetCrumb feels like a love letter. They listen, they care, and they deliver the dreamiest desserts.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    id: "t2",
    name: "Carlos Ramirez",
    role: "Coffee Lover",
    message:
      "Their croissants are on par with Paris. Paired with the maple pecan latte, it's my daily morning ritual.",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&w=300&h=300&q=80"
  },
  {
    id: "t3",
    name: "Lena Jacobs",
    role: "Bride-to-be",
    message:
      "Our custom wedding dessert table was a masterpiece. Guests were talking about the macarons for weeks!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=300&h=300&q=80"
  }
];
