"use client"; // Add this at the top

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
// WE REMOVED THE BROKEN IMPORT LINE

// --- PASTE FEATURES CODE DIRECTLY HERE ---
import { Zap, Activity, Menu } from "@/components/ui/icons"
import { cn } from '@/lib/utils';

const Clock = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const featuresData = [
  {
    title: "Async Cadence",
    description: "Replace daily standups with async check-ins. Update your team when you are in the flow.",
    icon: <Zap className="h-6 w-6 text-white" />,
    className: "md:col-span-2",
  },
  {
    title: "Deep Work Blocks",
    description: "Rhythm automatically defends your calendar, grouping meetings to create focus time.",
    icon: <Clock className="h-6 w-6 text-white" />,
    className: "md:col-span-1",
  },
  {
    title: "Team Pulse",
    description: "Visual heatmaps of your team's energy levels and workload. Spot burnout early.",
    icon: <Activity className="h-6 w-6 text-white" />,
    className: "md:col-span-3",
  },
];

function FeaturesComponent() {
  return (
    <section id="features" className="bg-black py-24 text-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Focus on work, <br />
            <span className="text-orange-500">not the work about work.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 max-w-5xl mx-auto">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:border-orange-500/30",
                feature.className
              )}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// --- END FEATURES CODE ---

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500/30">
      <Navbar />
      <Hero />
      
      {/* Use the local component */}
      <FeaturesComponent />

      <section id="pricing" className="py-24 border-t border-white/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-500">Pricing Coming Soon...</h2>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 bg-black text-center text-gray-600">
        <p>© 2025 Rhythm Inc. All rights reserved.</p>
      </footer>
    </main>
  );
}