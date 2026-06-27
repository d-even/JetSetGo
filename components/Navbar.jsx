"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { label: "Intro",    href: "#intro" },
  { label: "Guide",   href: "#guide" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 transition-all duration-500 sm:rounded-full sm:px-5 sm:py-3 ${
          scrolled
            ? "border-white/60 bg-white/70 shadow-[0_8px_40px_rgba(15,63,135,0.13)] backdrop-blur-2xl"
            : "border-white/25 bg-white/15 shadow-[0_4px_20px_rgba(15,63,135,0.05)] backdrop-blur-md"
        }`}
        style={{
          backdropFilter: scrolled
            ? "blur(40px) saturate(180%)"
            : "blur(12px) saturate(120%)",
        }}
      >
        {/* Logo */}
        <a href="#intro" className="flex shrink-0 items-center gap-2.5" onClick={closeMenu}>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full shadow-sm transition-all duration-500 sm:h-11 sm:w-11 ${
              scrolled ? "bg-white/90" : "bg-white/50"
            }`}
          >
            <Image
              src="/image.png"
              alt="JetSet G"
              width={24}
              height={24}
              className="h-5 w-5 object-contain sm:h-6 sm:w-6"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <span
            className={`hidden text-sm font-semibold tracking-tight transition-colors duration-500 sm:inline ${
              scrolled ? "text-[#0d2f64]" : "text-[#0d2f64]/80"
            }`}
          >
            JetSet Go
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium transition-colors hover:text-[#0f3f87] ${
                scrolled ? "text-[#45607f]" : "text-[#0d2f64]/70"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2">
          <a
            href="#connect"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex ${
              scrolled
                ? "bg-[#0f3f87] text-white shadow-[0_8px_20px_rgba(15,63,135,0.22)]"
                : "bg-[#0d2f64]/80 text-white shadow-[0_4px_16px_rgba(15,63,135,0.18)]"
            }`}
          >
            Connect
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-[#0f3f87] transition-all duration-300 md:hidden ${
              scrolled
                ? "border-[#d8e7f0] bg-white/80"
                : "border-white/30 bg-white/30"
            }`}
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
        <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/60 bg-white/80 p-4 shadow-[0_12px_40px_rgba(15,63,135,0.1)] backdrop-blur-2xl md:hidden"
          style={{ backdropFilter: "blur(40px) saturate(180%)" }}
        >
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
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#0f3f87] px-5 py-3 text-sm font-semibold text-white"
            >
              Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
