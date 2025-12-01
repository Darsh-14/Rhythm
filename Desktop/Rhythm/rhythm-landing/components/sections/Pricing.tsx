// components/sections/Pricing.tsx

// FIX 1: Use local icons
import { Check } from "../ui/icons"
// FIX 2: Use local button
import { Button } from "../ui/button"

export default function Pricing() { // Added 'default' export
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/month",
      description: "Perfect for trying out Rhythm",
      features: [
        "Up to 3 team members",
        "Basic workflow automation",
        "5 GB storage",
        "Community support",
        "Basic analytics",
      ],
      buttonText: "Get Started",
      isPro: false, // Simplified logic
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "For growing teams that need more",
      badge: "Most Popular",
      features: [
        "Up to 25 team members",
        "Advanced workflow automation",
        "100 GB storage",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "API access",
      ],
      buttonText: "Start Free Trial",
      isPro: true, // Simplified logic
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited team members",
        "Enterprise workflow automation",
        "Unlimited storage",
        "Dedicated support",
        "Custom analytics",
        "Advanced security",
        "SLA guarantee",
        "Onboarding assistance",
      ],
      buttonText: "Contact Sales",
      isPro: false, // Simplified logic
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-black border-t border-white/10">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Choose the perfect plan for your team's rhythm
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3 px-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border bg-white/5 p-8 backdrop-blur-sm transition-transform ${
              plan.isPro
                ? "scale-105 border-transparent bg-linear-to-b from-orange-500/10 to-red-600/10 shadow-2xl shadow-orange-500/20 md:scale-105"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            {/* Gradient border for Pro */}
            {plan.isPro && (
              <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-orange-500 to-red-600 p-[0.5]">
                <div className="h-full w-full rounded-2xl bg-black" />
              </div>
            )}

            {/* Most Popular Badge */}
            {plan.badge && (
              <div className="mb-4 inline-flex self-start rounded-full bg-linear-to-r from-orange-600 to-red-600 px-3 py-1 text-xs font-semibold text-white">
                {plan.badge}
              </div>
            )}

            {/* Plan Name */}
            <h3 className="text-xl font-bold text-white">{plan.name}</h3>

            {/* Price */}
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold tracking-tight text-white">{plan.price}</span>
              {plan.period && <span className="ml-1 text-gray-400">{plan.period}</span>}
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-400">{plan.description}</p>

            {/* Button */}
            <div className="mt-8">
              {plan.isPro ? (
                <Button className="w-full rounded-full bg-linear-to-r from-orange-600 to-red-600 text-white transition-transform hover:scale-105 hover:from-orange-500 hover:to-red-500">
                  {plan.buttonText}
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  className="w-full rounded-full border border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  {plan.buttonText}
                </Button>
              )}
            </div>

            {/* Features List */}
            <ul className="mt-8 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}