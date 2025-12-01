// components/sections/Hero.tsx

import { ArrowRight, PlayCircle, Sparkles } from '../ui/icons'; 
// DELETED: import Link from 'next/link'; (We don't need it anymore)

const HERO_IMAGE_URL = "https://placehold.co/1200x800/171717/f97316?text=Rhythm+AI+Dashboard+Preview";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-black pt-32 pb-20">
      
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="h-[400px] w-[800px] rounded-full bg-orange-600/20 blur-[120px] opacity-60 mix-blend-screen"></div>
        <div className="absolute top-1/4 left-1/4 h-[300px] w-[500px] rounded-full bg-red-700/20 blur-[100px] opacity-50 mix-blend-screen animate-pulse-slow"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        
        {/* Badge */}
        <div className="mb-8 inline-flex animate-fade-in-up items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 backdrop-blur-md">
          <Sparkles className="mr-2 h-4 w-4" />
          <span>Introducing Intelligent Cadence v2.0</span>
        </div>

        {/* Main Headline */}
        <h1 className="animate-fade-in-up mx-auto max-w-5xl text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl delay-100">
          Find Your Team's
          <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-red-500 to-purple-600 leading-tight">
            Rhythm with AI.
          </span>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-in-up mx-auto mt-8 max-w-2xl text-lg text-gray-300 md:text-xl delay-200">
          Rhythm analyzes your work habits to automatically generate the perfect deep work schedule. Stop reacting to pings and start flowing.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row delay-300">
          
          {/* FIX: Swapped <Link> for standard <a> tag */}
          <a href="#pricing" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-orange-600 to-red-600 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]">
            Start Your Rhythm Free
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          
          <button className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
            <PlayCircle className="h-5 w-5 text-gray-400 transition-colors group-hover:text-orange-400" />
            See How It Works
          </button>
        </div>

        {/* Dashboard Graphic */}
        <div className="animate-fade-in-up mt-20 relative mx-auto max-w-6xl perspective-1000 delay-500">
           <div className="absolute inset-0 -z-10 bg-linear-to-t from-orange-600/20 to-transparent blur-3xl -bottom-20 transform scale-y-50"></div>
           <div className="group relative rounded-2xl border border-white/10 bg-gray-900/40 p-3 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:transform:[rotateX(2deg)_scale(1.02)]">
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-black">
                <img 
                  src={HERO_IMAGE_URL} 
                  alt="Rhythm AI Dashboard Interface" 
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}