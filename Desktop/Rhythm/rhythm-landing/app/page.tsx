import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing"; // <--- Importing the real Pricing
import Testimonials from "@/components/sections/Testimonials"; // <--- Importing the real Testimonials

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500/30">
      
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Features Section */}
      <Features />
      
      {/* 4. Testimonials Section (Swapped from placeholder) */}
      <Testimonials />

      {/* 5. Pricing Section (Swapped from placeholder) */}
      <Pricing />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}