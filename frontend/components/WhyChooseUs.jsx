const stats = [
  { value: "12k", label: "Happy and Satisfied Travelers" },
  { value: "10yrs", label: "Proven Travel Industry Experience" },
  { value: "50+", label: "Destinations Covered Worldwide" },
];

const features = [
  {
    title: "Local Expertise",
    description:
      "Our travel experts craft unique itineraries with insider knowledge you won't find in typical tours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path d="M9 20l-6-3V4l6 3 6-3 6 3v13l-6-3-6 3z" strokeLinejoin="round" />
        <path d="M9 7v13M15 4v13" />
      </svg>
    ),
  },
  {
    title: "All-in-One Booking",
    description:
      "Book everything in one place — easy, fast, and hassle-free, whether for quick getaways or planned vacations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
        <path d="M8.5 14.5l2 2 4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description:
      "We're here anytime, anywhere. Get real-time help whenever you need it — before, during, or after your trip.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path d="M3 12a9 9 0 0 1 18 0" />
        <path d="M3 12v5a2 2 0 0 0 2 2h1v-7H4a1 1 0 0 0-1 1z" />
        <path d="M21 12v5a2 2 0 0 1-2 2h-1v-7h2a1 1 0 0 1 1 1z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#0d2f64] sm:text-4xl">
            Why Thousands of Travelers Choose JetSet Go for Their Adventures
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#45607f]">
            From pristine beaches to cultural hotspots, we make exploring the world easier,
            safer, and more exciting with expert-crafted itineraries and round-the-clock
            support.
          </p>

          <div className="mt-6 flex gap-3">
            {["Instagram", "X", "Facebook"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e0e8f0] text-[#45607f] transition-colors hover:border-[#0d2f64] hover:text-[#0d2f64]"
              >
                <span className="text-xs font-semibold">{s[0]}</span>
              </a>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#e7edf3] pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-[#0d2f64] sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-[#6a84a5]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: feature cards */}
        <div className="flex flex-col gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 rounded-2xl bg-[#eef2f6] p-5 transition-colors hover:bg-[#e4ebf2]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0d2f64] text-white">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0d2f64]">{feature.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#5b7290]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
