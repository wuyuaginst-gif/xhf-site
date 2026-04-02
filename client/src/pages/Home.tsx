import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <div className="relative z-10">
        <Navigation />
        <main className="flex-1">
          <HeroSection />
          <ProductsSection />

          <AboutSection />
          <NewsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

