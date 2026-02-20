import HeroBanner from '@/components/HeroBanner';
import ProductShowcase from '@/components/ProductShowcase';
import VideoHero from '@/components/VideoHero';
import FeaturedCategories from '@/components/FeaturedCategories';
import WeddingGallery from '@/components/WeddingGallery';
import ReviewsSection from '@/components/ReviewsSection';
import FeaturesSection from '@/components/FeaturesSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <ProductShowcase />
      <VideoHero />
      <FeaturesSection />
      <FeaturedCategories />
      <WeddingGallery />
      <ReviewsSection />
    </div>
  );
}
