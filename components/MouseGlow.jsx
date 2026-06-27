"use client";
import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf;
    let tx = -400, ty = -400;
    let cx = -400, cy = -400;

    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };

    const tick = () => {
      cx += (tx - cx) * 0.09;
      cy += (ty - cy) * 0.09;
      el.style.left = cx - 200 + "px";
      el.style.top  = cy - 200 + "px";
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-[9999] h-[400px] w-[400px] rounded-full"
      style={{
        top: "-500px",
        left: "-500px",
        background:
          "radial-gradient(circle at center,rgba(96,165,250,0.35) 0%,rgba(59,130,246,0.12) 45%,transparent 70%)",
        filter: "blur(55px)",
      }}
    />
  );
}
