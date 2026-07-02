"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const destinations = [
  {
    src: "/opera.png",
    price: "$1,299",
    title: "Sydney",
    tag: "Harbour City",
    rating: "4.8",
    reviews: "2.1k",
    location: "New South Wales, Australia",
  },
  {
    src: "/Japan.png",
    price: "$1,450",
    title: "Tokyo",
    tag: "Mountains & Blossoms",
    rating: "4.7",
    reviews: "1.8k",
    location: "Honshu, Japan",
  },
  {
    src: "/Italy1.png",
    price: "$999",
    title: "Rome",
    tag: "Ancient Wonders",
    rating: "4.9",
    reviews: "2.4k",
    location: "Lazio, Italy",
  },
  {
    src: "/UK.png",
    price: "$1,150",
    title: "London",
    tag: "Royal Heritage",
    rating: "4.6",
    reviews: "1.5k",
    location: "England, UK",
  },
  {
    src: "/Germany.png",
    price: "$890",
    title: "Berlin",
    tag: "River & History",
    rating: "4.5",
    reviews: "980",
    location: "Berlin, Germany",
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="#f5c200" className="h-3.5 w-3.5">
      <path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L10 15l-5.6 3.1 1.4-6.3L1 7.5l6.4-.6z" />
    </svg>
  );
}

export default function TopDestinations() {
  const scrollerRef = useRef(null);
  const [visible, setVisible] = useState(4);

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="destinations" className="bg-[#f4f7fa] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-[#0d2f64] sm:text-4xl">
            Top Destinations
          </h2>
          <p className="max-w-sm text-sm leading-6 text-[#6a84a5]">
            From island escapes to cool mountain towns, discover where your next journey
            will take you.
          </p>
        </div>

        <div ref={scrollerRef} className="mt-10 flex gap-5 overflow-x-auto pb-2 scroll-smooth [scrollbar-width:none]">
          {destinations.slice(0, visible).map((d) => (
            <article
              key={d.title}
              className="group w-64 shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(13,47,100,0.06)] transition-shadow hover:shadow-[0_12px_32px_rgba(13,47,100,0.14)]"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={d.src}
                  alt={d.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#0d2f64] shadow-sm">
                  starts at {d.price}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#0d2f64]">{d.title}</h3>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-[#6a84a5]">
                  {d.tag}
                  <span className="flex items-center gap-0.5 text-[#0d2f64]">
                    <StarIcon />
                    {d.rating}
                  </span>
                  <span className="text-[#a8bcd2]">({d.reviews})</span>
                </p>
                <p className="mt-2 flex items-center gap-1 text-xs text-[#8098b3]">
                  <svg viewBox="0 0 20 20" fill="#e11d48" className="h-3.5 w-3.5 shrink-0">
                    <path d="M10 1a6 6 0 0 0-6 6c0 4.5 6 12 6 12s6-7.5 6-12a6 6 0 0 0-6-6zm0 8.5A2.5 2.5 0 1 1 10 4a2.5 2.5 0 0 1 0 5.5z" />
                  </svg>
                  {d.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          {visible < destinations.length ? (
            <button
              type="button"
              onClick={() => setVisible(destinations.length)}
              className="rounded-full bg-[#0d2f64] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f3f87]"
            >
              View more
            </button>
          ) : (
            <span />
          )}

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d8e3ee] text-[#0d2f64] transition-colors hover:bg-white"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                <path d="M12 4l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d8e3ee] text-[#0d2f64] transition-colors hover:bg-white"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                <path d="M8 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
