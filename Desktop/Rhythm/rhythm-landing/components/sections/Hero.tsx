// components/sections/Hero.tsx
import { ArrowRight, PlayCircle, Sparkles } from '../ui/icons'; 

const HERO_IMAGE_URL = "/dash.png";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-black pt-32 pb-20">
      
      {/* Background Glows (Updated to Indigo to match your new theme) */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        
        {/* Badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400 backdrop-blur-md">
          <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
          <span>v2.0 is live</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up mx-auto max-w-5xl text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl delay-100">
          Find your team's <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 via-white to-indigo-300">
            Natural Rhythm.
          </span>
        </h1>

        {/* Buttons */}
        <div className="animate-fade-in-up delay-200 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary Button */}
          <a href="#pricing" className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-all hover:bg-gray-200 hover:-translate-y-1">
            Start for free
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          
          {/* Secondary Button */}
          <button className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10">
            <PlayCircle className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
            See workflow
          </button>
        </div>

        {/* Floating Dashboard Image - FIXED ASPECT RATIO */}
        <div className="animate-fade-in-up delay-300 mt-20 relative mx-auto max-w-6xl perspective-1000">
           {/* Glow effect underneath */}
           <div className="absolute inset-0 -z-10 bg-linear-to-t from-indigo-600/20 to-transparent blur-3xl -bottom-20 transform scale-y-50"></div>
           
           {/* The Image Container */}
           <div className="animate-float group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl backdrop-blur-md transition-transform duration-500 hover:[transform:rotateX(2deg)_scale(1.01)]">
              
                {/* FIX APPLIED HERE:
                   1. Removed 'aspect-16/10' from wrapper
                   2. Added 'h-auto' to image so it sets the height naturally 
                */}
                <img 
                  src={HERO_IMAGE_URL} 
                  alt="Rhythm AI Dashboard Interface" 
                  className="w-full h-auto object-cover opacity-95"
                />
                
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none"></div>
                {/* Bottom fade for smooth blend into background */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black via-black/50 to-transparent"></div>
           </div>
        </div>

      </div>
    </section>
  );
}