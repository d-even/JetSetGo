"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function prog(p, s, e)    { return clamp((p - s) / (e - s), 0, 1); }

export default function MapSection() {
  const outerRef   = useRef(null);
  const mapRef     = useRef(null);
  const collageRef = useRef(null);
  const textRef    = useRef(null);

  useEffect(() => {
    const mobile = window.innerWidth < 550;

    if (mobile) {
      const el = outerRef.current;
      if (!el) return;

      const reveal = (ref, delay, styles) => {
        setTimeout(() => {
          if (!ref.current) return;
          Object.assign(ref.current.style, {
            transition:
              "opacity 0.75s ease-out, transform 0.75s cubic-bezier(0.22,1,0.36,1)",
            ...styles,
          });
        }, delay);
      };

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          reveal(mapRef,     0,    { opacity: "1" });
          reveal(collageRef, 480,  { opacity: "1", transform: "translateY(0)" });
          reveal(textRef,    1050, { opacity: "1", transform: "translateX(-50%) scale(1)" });
          obs.unobserve(el);
        },
        { threshold: 0.25 }
      );

      obs.observe(el);
      return () => obs.disconnect();
    }
    const tick = () => {
      const outer = outerRef.current;
      if (!outer) return;
      const rect       = outer.getBoundingClientRect();
      const scrollable = outer.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const p = clamp(-rect.top / scrollable, 0, 1);

      if (mapRef.current)
        mapRef.current.style.opacity = prog(p, 0.00, 0.22);

      if (collageRef.current) {
        const op = prog(p, 0.18, 0.50);
        collageRef.current.style.opacity   = op;
        collageRef.current.style.transform = `translateY(${(1 - op) * 64}px)`;
      }

      if (textRef.current) {
        const op = prog(p, 0.48, 0.70);
        textRef.current.style.opacity   = op;
        textRef.current.style.transform =
          `translateX(-50%) scale(${0.88 + op * 0.12})`;
      }
    };

    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (

    <div
      ref={outerRef}
      className="bg-[#d0ecf6] min-[550px]:min-h-[220vh]"
    >
      {/* ── Panel ── */}
      <div className="relative min-h-[280px] overflow-hidden bg-[#d0ecf6] min-[550px]:sticky min-[550px]:top-0 min-[550px]:flex min-[550px]:h-screen min-[550px]:items-center min-[550px]:py-0">

        {/* ── Map — full-panel background ── */}
        <div ref={mapRef} className="absolute inset-0" style={{ opacity: 0 }}>
          <Image
            src="/map.png"
            alt="World map"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* ── TRAVEL text ── behind collage (z-10 < z-20) ── */}
        <h2
          ref={textRef}
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[13%] z-10 whitespace-nowrap font-black uppercase text-[#cfc6ad]"
          style={{
            fontSize: "clamp(0.9rem, 8vw, 6.5rem)",
            letterSpacing: "0.08em",
            textShadow:
              "0 6px 0 rgba(10,42,88,0.06), 0 14px 32px rgba(10,42,88,0.1)",
            opacity: 0,
            transform: "translateX(-50%) scale(0.88)",
          }}
        >
          TRAVEL
        </h2>

        {/* ── Travel collage — perfectly centered, bigger ── */}
        <div
          ref={collageRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center pt-16"
          style={{ opacity: 0, transform: "translateY(64px)" }}
        >
          <Image
            src="/travel.png"
            alt="Travel landmarks collage"
            width={1200}
            height={600}
            className="relative z-20 w-[68%] min-[400px]:w-[64%] min-[550px]:w-[60%] md:w-[54%] lg:max-w-2xl"
          />
        </div>

      </div>
    </div>
  );
}
