import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#f8f8f8] overflow-hidden">
      {/* Animated gradient blob */}
      <div
        className="absolute right-0 top-0 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-pink-300 via-orange-200 to-yellow-100 opacity-60 blur-3xl"
        style={{ animationDelay: "0ms" }}
        aria-hidden="true"
      />
      
      {/* Secondary smaller blob for layered effect */}
      <div
        className="absolute right-20 top-40 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-r from-orange-200 to-yellow-200 opacity-50 blur-2xl"
        style={{ animationDelay: "1000ms" }}
        aria-hidden="true"
      />
      
      <Header />
      <HeroSection />
    </div>
  );
}
