import Image from "next/image";

const packages = [
  {
    src: "/escarpment.png",
    title: "Reef & Islands Adventure",
    description:
      "Sail the Great Barrier Reef with snorkeling stops, island hopping, and a sunset cruise.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} className="h-5 w-5">
        <path d="M2 18c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0" strokeLinecap="round" />
        <path d="M12 3v9M8 8l4-5 4 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    src: "/rock.png",
    title: "Outback Uluru Escape",
    description:
      "Experience the cool breeze of the outback with scenic sunrise views and local desert culture.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} className="h-5 w-5">
        <path d="M3 20l6-10 4 6 3-4 5 8H3z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TourPackages() {
  return (
    <section id="packages" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1fr_1fr]">
        {/* Left panel */}
        <div className="flex flex-col justify-between rounded-2xl bg-[#7d8ea3] p-7 text-white">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Tour Packages</h2>
            <p className="mt-3 text-sm leading-6 text-white/85">
              Affordable, customizable, and unforgettable adventures crafted around what
              matters most to you.
            </p>
          </div>
          <a
            href="#connect"
            className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[#0d2f64] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f3f87]"
          >
            Browse all packages
          </a>
        </div>

        {/* Package cards */}
        {packages.map((pkg) => (
          <div key={pkg.title} className="relative min-h-[280px] overflow-hidden rounded-2xl">
            <Image src={pkg.src} alt={pkg.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                {pkg.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{pkg.title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/85">{pkg.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
