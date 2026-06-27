import { League_Spartan } from "next/font/google";
import React from 'react'


const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export default function JetSetGo() {
  return (
    <div>
           
      
            {/* ── Hero ── */}
            <section
              id="intro"
              className="relative flex min-h-screen scroll-mt-20 flex-col items-center justify-center overflow-hidden"
            >
              {/* Sky gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(170deg, #d6eef8 0%, #bcdff2 35%, #a2d2ec 65%, #85c2e4 100%)",
                }}
              />
      
              {/* Diagonal light-ray stripes */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -52deg,
                    transparent 0px,
                    transparent 58px,
                    rgba(255,255,255,0.06) 58px,
                    rgba(255,255,255,0.06) 84px
                  )`,
                }}
              />
      
              {/* White glow circle */}
              <div
                className="pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                style={{
                  width: "clamp(280px, 52vw, 540px)",
                  height: "clamp(280px, 52vw, 540px)",
                  opacity: 0.92,
                  boxShadow: "0 0 90px 36px rgba(255,255,255,0.55)",
                }}
              />
      
              {/* ── Logo ── */}
              <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4">
      
                {/* Plane + "JetSet G" + location-pin 'o' */}
                <div className="flex items-end gap-2 sm:gap-3">
      
               
      
                  {/* Text row: JetSet G + pin */}
                  <div
                    className={`${leagueSpartan.className} flex items-end leading-none text-[#0d2f64]`}
                    style={{ fontSize: "clamp(2.6rem, 9vw, 5.2rem)" }}
                  >
                    <span>JetSet Go</span>
      
                    {/* Yellow location pin replacing the 'o' */}
                    
                  </div>
                </div>
      
                {/* Tagline */}
                <p className="flex items-center gap-2 font-semibold tracking-[0.12em] text-[#0d2f64]"
                  style={{ fontSize: "clamp(0.75rem, 2.5vw, 1.05rem)" }}
                >
                  Because the World is Calling
                  <svg
                    viewBox="0 0 20 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-4 w-auto sm:h-5"
                  >
                    <path
                      d="M10 0C4.477 0 0 4.477 0 10C0 17.5 10 28 10 28C10 28 20 17.5 20 10C20 4.477 15.523 0 10 0Z"
                      fill="#f5c200"
                    />
                    <circle cx="10" cy="10" r="4" fill="white" />
                  </svg>
                </p>
      
              </div>
      
              {/* Bottom wave layers */}
              <div className="absolute bottom-0 left-0 right-0">
                <svg
                  viewBox="0 0 1440 240"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block w-full"
                  style={{ height: "clamp(120px, 22vw, 240px)" }}
                >
                  {/* Back — muted blue */}
                  <path
                    d="M0,155 C180,95 360,168 540,132 C720,96 900,155 1080,122 C1200,102 1320,138 1440,118 L1440,240 L0,240 Z"
                    fill="#3b6ea0"
                    opacity="0.38"
                  />
                  {/* Mid */}
                  <path
                    d="M0,172 C200,112 400,178 600,148 C800,118 1000,168 1200,140 C1300,126 1380,150 1440,142 L1440,240 L0,240 Z"
                    fill="#1c3f72"
                    opacity="0.68"
                  />
                  {/* Front — darkest */}
                  <path
                    d="M0,192 C220,148 440,202 660,172 C880,142 1060,188 1260,164 C1340,154 1400,170 1440,164 L1440,240 L0,240 Z"
                    fill="#0d1e3d"
                  />
                </svg>
              </div>
            </section>
    </div>
  )
}
