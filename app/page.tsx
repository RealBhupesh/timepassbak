import { Hero } from "@/components/home/Hero";
import { FeaturedMenu } from "@/components/home/FeaturedMenu";
import { SpecialsShowcase } from "@/components/home/SpecialsShowcase";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { SocialFeed } from "@/components/home/SocialFeed";
import { VisitCallout } from "@/components/home/VisitCallout";
import { StoryPeek } from "@/components/home/StoryPeek";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SpecialsShowcase />
      <FeaturedMenu />
      <StoryPeek />
      <TestimonialsCarousel />
      <SocialFeed />
      <VisitCallout />
    </>
  );
}
