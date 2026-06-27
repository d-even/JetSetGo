import Image from "next/image";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

export default function Introduction() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-section background — switches at 550 px */}
      <Image
        src="/bg2.png"
        alt=""
        fill
        priority
        className="object-cover hidden min-[550px]:block"
      />
      <Image
        src="/mobile.png"
        alt=""
        fill
        priority
        className="object-cover block min-[550px]:hidden"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center px-6 py-14 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:px-8">

        {/* ── Left: text ── */}
        <div className="flex flex-col gap-6">
          {/* Heading */}
          <h2
            className={`${barlow.className} text-[3.5rem] font-extrabold uppercase leading-none tracking-wide text-[#353062] sm:text-[4.5rem] lg:text-[5.5rem]`}
          >
            Introduction
          </h2>

          {/* Body copy */}
          <div className="space-y-3 text-[#353062]">
            <p className="text-lg font-semibold">Welcome to JetSet Go</p>

            <p className="text-justify text-[15px] leading-[1.9]" style={{ color: "#353062cc" }}>
              At JetSet Go, we believe every journey is a story waiting to be told. Whether
              you&apos;re chasing adventures, discovering hidden gems, or relaxing in paradise,
              we&apos;re here to make your travel dreams a reality. From seamless bookings to
              tailored experiences, we ensure your travels are as effortless as they are
              memorable.
            </p>

            <p className="text-[15px] font-semibold">
              JetSet Go: Because the World is Calling.
            </p>
            <p className="text-[15px]">
              Answer the call and let us guide you to your next great escape!
            </p>
          </div>
        </div>

        {/* ── Right: empty column (bg covers full section) ── */}
        <div className="hidden lg:block" />

      </div>
    </section>
  );
}
