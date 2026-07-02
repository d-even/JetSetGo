"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Home", href: "#top" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Guide", href: "#guide" },
  { label: "About Us", href: "#connect" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const closeMenu = () => setOpen(false);

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-[#e7edf3] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" className="flex shrink-0 items-center gap-2" onClick={closeMenu}>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d2f64]">
            <Image
              src="/image.png"
              alt="JetSet Go"
              width={18}
              height={18}
              className="h-[18px] w-[18px] object-contain brightness-0 invert"
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-[#0d2f64]">JetSet Go</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#45607f] transition-colors hover:text-[#0d2f64]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Search bar */}
        <div className="hidden flex-1 max-w-xs items-center gap-2 rounded-full border border-[#e0e8f0] bg-[#f5f8fb] px-4 py-2 md:flex">
          <svg viewBox="0 0 20 20" fill="none" stroke="#8098b3" strokeWidth={1.8} className="h-4 w-4 shrink-0">
            <circle cx="9" cy="9" r="6" />
            <path d="M17 17l-3.5-3.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a place, city, or destination..."
            className="w-full bg-transparent text-sm text-[#0d2f64] outline-none placeholder:text-[#8098b3]"
          />
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2">
          <a
            href="#connect"
            className="hidden rounded-full bg-[#0d2f64] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f3f87] sm:inline-flex"
          >
            Book now
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e0e8f0] text-[#0d2f64] lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M2 5H16M2 9H16M2 13H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-[#e7edf3] bg-white px-4 py-4 lg:hidden">
          <div className="mb-3 flex items-center gap-2 rounded-full border border-[#e0e8f0] bg-[#f5f8fb] px-4 py-2.5">
            <svg viewBox="0 0 20 20" fill="none" stroke="#8098b3" strokeWidth={1.8} className="h-4 w-4 shrink-0">
              <circle cx="9" cy="9" r="6" />
              <path d="M17 17l-3.5-3.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full bg-transparent text-sm text-[#0d2f64] outline-none placeholder:text-[#8098b3]"
            />
          </div>
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base font-medium text-[#0d2f64] transition-colors hover:bg-[#e8f4fb]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#connect"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#0d2f64] px-5 py-3 text-sm font-semibold text-white"
            >
              Book now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
