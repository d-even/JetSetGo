import Image from "next/image";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export default function Hero() {
  return (
    <section className="px-4 pt-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto h-[520px] max-w-7xl overflow-hidden rounded-[2rem] sm:h-[600px]">
        <Image
          src="/opera.png"
          alt="Sydney Opera House at sunrise"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

        <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-12 lg:px-16">
          <h1
            className={`${leagueSpartan.className} leading-none text-white drop-shadow-lg`}
            style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)" }}
          >
            JetSet Go
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-7 text-white/85 sm:text-base">
            Discover breathtaking destinations around the globe with curated tours,
            local insights, and hassle-free planning all in one platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#connect"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0d2f64] transition-transform hover:-translate-y-0.5"
            >
              Plan Your Trip
            </a>
            <a
              href="#destinations"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Destinations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
