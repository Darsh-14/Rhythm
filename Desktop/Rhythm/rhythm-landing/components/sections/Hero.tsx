// components/sections/Hero.tsx
import { ArrowRight, PlayCircle, Sparkles } from '../ui/icons'; 

const HERO_IMAGE_URL = "https://placehold.co/1200x800/171717/f97316?text=Rhythm+AI+Dashboard+Preview";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-black pt-32 pb-20">
      
      {/* Background Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="h-[500px] w-[500px] rounded-full bg-orange-600/20 blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        
        {/* Badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 backdrop-blur-md">
          <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
          <span>v2.0 is live</span>
        </div>

        {/* Headline */}
{/* New H1: Cleaner, cooler gradient */}
<h1 className="animate-fade-in-up mx-auto max-w-5xl text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl delay-100">
  Find your team's <br />
  <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 via-white to-indigo-300">
    Natural Rhythm.
  </span>
</h1>

{/* New Buttons: Solid colors, no gradients */}
<div className="animate-fade-in-up delay-200 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
  {/* Primary Button: White (High contrast, very premium) */}
  <a href="#pricing" className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-all hover:bg-gray-200 hover:-translate-y-1">
    Start for free
    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
  </a>
  
  {/* Secondary Button: Subtle Border */}
  <button className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10">
    <PlayCircle className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
    See workflow
  </button>
</div>

        {/* Floating Dashboard Image */}
        <div className="animate-fade-in-up delay-300 mt-20 relative mx-auto max-w-6xl perspective-1000">
           {/* The Float Effect is here: animate-float */}
           <div className="animate-float group relative rounded-2xl border border-white/10 bg-gray-900/40 p-2 shadow-2xl backdrop-blur-md">
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-black">
                <img src= {"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"} alt="Dashboard" className="h-full w-full object-cover opacity-90" />
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none"></div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}