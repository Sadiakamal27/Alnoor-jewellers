import HeroBanner from "@/components/HeroBanner";
import ProductShowcase from "@/components/ProductShowcase";
import VideoHero from "@/components/VideoHero";
import FeaturedCategories from "@/components/FeaturedCategories";
import WeddingGallery from "@/components/WeddingGallery";
import ReviewsSection from "@/components/ReviewsSection";
import FeaturesSection from "@/components/FeaturesSection";
import SectionReveal from "@/components/SectionReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <SectionReveal>
        <ProductShowcase />
      </SectionReveal>
      <SectionReveal>
        <VideoHero />
      </SectionReveal>
      <SectionReveal>
        <FeaturesSection />
      </SectionReveal>
      <SectionReveal>
        <FeaturedCategories />
      </SectionReveal>
      <SectionReveal>
        <WeddingGallery />
      </SectionReveal>
      <SectionReveal>
        <ReviewsSection />
      </SectionReveal>
    </div>
  );
}
