import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#f8f8f8] overflow-hidden">
      {/* Animated gradient blob - deep ocean blue */}
      <div
        className="absolute right-0 top-0 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-blue-800 via-blue-500 to-sky-300 opacity-70 blur-3xl"
        style={{ animationDelay: "0ms" }}
        aria-hidden="true"
      />
      
      {/* Secondary smaller blob - tropical waters */}
      <div
        className="absolute right-40 top-20 h-[350px] w-[350px] animate-pulse rounded-full bg-gradient-to-r from-emerald-400 to-cyan-200 opacity-60 blur-2xl"
        style={{ animationDelay: "1000ms" }}
        aria-hidden="true"
      />
      
      <Header />
      <HeroSection />
    </div>
  );
}
