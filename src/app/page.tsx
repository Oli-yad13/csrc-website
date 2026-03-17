import Hero from "@/components/home/Hero";
import LatestInsights from "@/components/home/LatestInsights";
import Ownership from "@/components/home/Ownership";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <LatestInsights />
      <Ownership />
      <FeaturedPrograms />
      <CTABanner />
    </main>
  );
}
