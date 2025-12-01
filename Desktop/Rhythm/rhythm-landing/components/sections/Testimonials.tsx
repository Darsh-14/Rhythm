// components/sections/Testimonials.tsx

// FIX 1: Use local icons
import { Star } from "../ui/icons"

const testimonials = [
  {
    id: 1,
    review: "Rhythm transformed how our team operates. The intuitive interface and powerful automation features have cut our project delivery time in half.",
    author: {
      name: "Sarah Chen",
      role: "Head of Product",
      initials: "SC", // Added for the avatar
    },
  },
  {
    id: 2,
    review: "We've tried countless project management tools, but Rhythm is the only one that keeps pace with our fast-moving startup. It's an absolute game-changer.",
    author: {
      name: "Marcus Rodriguez",
      role: "Engineering Lead",
      initials: "MR",
    },
  },
  {
    id: 3,
    review: "The real-time collaboration features are phenomenal. Our distributed team feels more connected than ever, and productivity has skyrocketed.",
    author: {
      name: "Emma Thompson",
      role: "VP of Operations",
      initials: "ET",
    },
  },
]

// FIX 2: Added 'default' export
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-white">
          Loved by <span className="text-orange-500">high-tempo teams</span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/[0.07] hover:border-orange-500/30"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="mb-8 flex-1 text-pretty leading-relaxed text-gray-400">
                "{testimonial.review}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-3">
                {/* FIX 3: Gradient Avatar (Replaces broken images) */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-red-600 text-sm font-bold text-white shadow-lg">
                  {testimonial.author.initials}
                </div>
                
                <div>
                  <p className="font-bold text-white">{testimonial.author.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}