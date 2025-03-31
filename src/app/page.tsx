import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { BentoFeatures } from "@/components/bento-features";
import { AppSection } from "@/components/app-section";
import { CommunitySection } from "@/components/community-section";
import { CTASection } from "@/components/cta-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#f8f8f8] overflow-hidden">
      {/* Animated gradient blob - deep ocean blue */}
      <div
        className="absolute right-0 top-0 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-blue-800 via-blue-500 to-sky-300 opacity-30 md:opacity-70 blur-3xl z-0"
        style={{ animationDelay: "0ms" }}
        aria-hidden="true"
      />
      
      {/* Secondary smaller blob - tropical waters */}
      <div
        className="absolute right-40 top-20 h-[350px] w-[350px] animate-pulse rounded-full bg-gradient-to-r from-emerald-400 to-cyan-200 opacity-20 md:opacity-60 blur-2xl z-0"
        style={{ animationDelay: "1000ms" }}
        aria-hidden="true"
      />
      
      <div className="relative z-10">
        <Header />
        <HeroSection />

        <div id="features" className="pt-12">
          <BentoFeatures />
        </div>

        <AppSection />

        <div className="py-12" id="map">
          <CommunitySection />
        </div>

        <CTASection />
        <FooterSection />
      </div>
    </div>
  );
}
