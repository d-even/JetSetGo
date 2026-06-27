const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "per trip",
    description: "Perfect for a quick getaway with the essentials covered.",
    features: ["1 destination guide", "Basic itinerary", "Email support", "Packing checklist"],
    featured: false,
  },
  {
    name: "Explorer",
    price: "$129",
    period: "per trip",
    description: "Our most popular plan for travelers who want more detail.",
    features: ["Up to 3 destinations", "Custom day-by-day plan", "Priority support", "Local tips & hidden gems"],
    featured: true,
  },
  {
    name: "Premium",
    price: "$249",
    period: "per trip",
    description: "Full concierge planning for a seamless journey.",
    features: ["Unlimited destinations", "24/7 travel assistance", "Booking support", "VIP upgrades & perks"],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden px-4 py-20 sm:py-28"
      style={{
        background: "linear-gradient(140deg, #050e1c 0%, #0b1e3a 45%, #071528 100%)",
      }}
    >
      {/* ── Ambient background glows ── */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* ── Section header ── */}
        <div className="mx-auto max-w-2xl text-center">
          {/* Plane badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 rotate-45" aria-hidden="true">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
            Travel Plans
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Plans that fit every journey
          </h2>
          <p className="mt-4 text-base leading-7 text-white/45 sm:text-lg">
            Choose the level of planning support you need — from a simple starter guide
            to full concierge service.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-start">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border p-7 transition-all duration-300 sm:p-8 ${
                plan.featured
                  ? "border-blue-400/40 bg-white/[0.10] shadow-[0_0_60px_rgba(59,130,246,0.18)] hover:-translate-y-3 hover:shadow-[0_0_90px_rgba(59,130,246,0.28)]"
                  : "border-white/[0.07] bg-white/[0.04] hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_8px_40px_rgba(255,255,255,0.04)]"
              }`}
            >
              {/* Top rim-light accent */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{
                  background: plan.featured
                    ? "linear-gradient(90deg, transparent, rgba(96,165,250,0.8), transparent)"
                    : "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
                }}
              />

              {/* Inner glow for featured */}
              {plan.featured && (
                <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
              )}

              {/* Most popular badge */}
              {plan.featured && (
                <span className="relative mb-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-blue-500 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(59,130,246,0.45)]">
                  ✦ Most Popular
                </span>
              )}

              {/* Plan name */}
              <h3
                className={`text-xl font-bold ${
                  plan.featured ? "text-white" : "text-white/75"
                }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-4 flex items-end gap-2">
                <span
                  className={`text-5xl font-black tracking-tight ${
                    plan.featured ? "text-white" : "text-white/85"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="pb-1.5 text-sm text-white/35">{plan.period}</span>
              </div>

              {/* Description */}
              <p
                className={`mt-4 text-[14px] leading-[1.8] ${
                  plan.featured ? "text-white/65" : "text-white/40"
                }`}
              >
                {plan.description}
              </p>

              {/* Divider */}
              <div
                className="my-6 h-px"
                style={{
                  background: plan.featured
                    ? "rgba(255,255,255,0.12)"
                    : "rgba(255,255,255,0.05)",
                }}
              />

              {/* Features list */}
              <ul className="flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                      style={{
                        background: plan.featured
                          ? "rgba(59,130,246,0.30)"
                          : "rgba(255,255,255,0.08)",
                        color: plan.featured
                          ? "#93c5fd"
                          : "rgba(255,255,255,0.45)",
                      }}
                    >
                      ✓
                    </span>
                    <span
                      className={`text-[14px] leading-snug ${
                        plan.featured ? "text-white/75" : "text-white/45"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#connect"
                className={`relative mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-blue-500 text-white shadow-[0_8px_24px_rgba(59,130,246,0.4)] hover:bg-blue-400 hover:shadow-[0_12px_36px_rgba(59,130,246,0.55)]"
                    : "border border-white/12 bg-white/[0.06] text-white/70 hover:border-white/25 hover:bg-white/[0.12] hover:text-white"
                }`}
              >
                Get started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
