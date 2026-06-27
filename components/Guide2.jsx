"use client";
import Image from "next/image";
import { Anton, League_Spartan, Nunito_Sans } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inclusions = [
  {
    label: "Pickup Drop",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-8 w-8">
        <path d="M1 3h15v13H1z" strokeLinejoin="round" />
        <path d="M16 8h4l3 3v5h-7V8z" strokeLinejoin="round" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Transport",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-8 w-8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.45 2 2 0 0 1 3.59 1H6.5a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.59 8.84a16 16 0 0 0 6 6l1.21-1.21a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Hotel Stay",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-8 w-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    label: "Food",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-8 w-8">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
];

const destinations = [
  { src: "/UK.png",      label: "UK" },
  { src: "/Japan.png",   label: "Japan" },
  { src: "/Germany.png", label: "Germany" },
];

const italyStrips = ["/Italy1.png", "/Itly2.png", "/Italy3.png", "/Italy4.png"];

export default function Guide2() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* ── LEFT: World exploration panel ── */}
          <div className="relative min-h-[520px] overflow-hidden rounded-2xl lg:min-h-[580px]">
            <Image src="/World.png" alt="World" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
              {/* Heading */}
              <div className="mt-8 text-center">
                <p
                  className={`${nunitoSans.className} font-bold uppercase tracking-[0.25em] text-black drop-shadow-sm`}
                  style={{ fontSize: "50px" }}
                >
                  Let&apos;s Explore The
                </p>
                <h2
                  className={`${anton.className} uppercase leading-none text-white drop-shadow-lg`}
                  style={{ fontSize: "clamp(4rem, 18vw, 150px)" }}
                >
                  World
                </h2>
              </div>

              {/* Destination cards with connecting pin line */}
              <div className="flex flex-col gap-3">
           
              

                {/* Photo cards */}
                <div className="grid grid-cols-3 gap-3">
                  {destinations.map(({ src, label }) => (
                    <div
                      key={src}
                      className="group flex flex-col items-center gap-2 transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105"
                    >
                      <div
                        className="relative w-full overflow-hidden rounded-xl border-2 border-white/80 shadow-lg transition-shadow duration-300 group-hover:shadow-2xl"
                        style={{ aspectRatio: "3/4" }}
                      >
                        <Image
                          src={src}
                          alt={label || "destination"}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      {label && (
                        <p
                          className={`${nunitoSans.className} text-base font-bold uppercase tracking-widest text-white drop-shadow`}
                        >
                          {label}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Italy panel ── */}
          <div className="relative overflow-hidden rounded-2xl">
            {/* Background */}
            <Image src="/Italybg.png" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-white/50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-5 p-6 sm:p-8">
              {/* Four vertical strip images */}
              <div className="flex gap-2">
                {italyStrips.map((src, i) => (
                  <div
                    key={i}
                    className="relative flex-1 overflow-hidden rounded-xl"
                    style={{ aspectRatio: "1/2.4" }}
                  >
                    <Image src={src} alt={`Italy scene ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>

              {/* ITALY heading — Italy.png silhouette visible behind the text */}
              <div className="relative py-4 text-center">
                {/* Italy.png sits behind the text */}
               
                <h2
                  className={`relative z-10 ${leagueSpartan.className} font-extrabold uppercase leading-none text-[#3c3134]`}
                  style={{
                    fontSize: "clamp(1.8rem, 6vw, 5.5rem)",
                    letterSpacing: "clamp(0.08em, 2.5vw, 0.574em)",
                  }}
                >
                  Italy
                </h2>
              </div>

              {/* Subtitle */}
              <p className="text-center text-[13px] font-bold text-black">
                Rome&apos;s Colosseum&nbsp;|&nbsp;Florence&apos;s art&nbsp;|&nbsp;Venice&apos;s canals&nbsp;|&nbsp;Pompeii&apos;s ruins
              </p>

              {/* Packages badge */}
              <div className="self-center rounded-md bg-[#c8952a] px-6 py-2 shadow-sm">
                <span className={`${nunitoSans.className} text-xl font-bold uppercase tracking-wide text-white`}>
                  27+ Packages
                </span>
              </div>

              {/* Inclusion */}
              <div>
                <p
                  className={`${nunitoSans.className} mb-4 text-[13px] font-bold uppercase tracking-[0.25em] text-gray-700`}
                >
                  Inclusion
                </p>
                <div className="flex gap-6 text-gray-600">
                  {inclusions.map(({ label, icon }) => (
                    <div key={label} className="flex flex-col items-center gap-2">
                      {icon}
                      <span className="text-center text-[11px] font-semibold leading-tight text-gray-600">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
