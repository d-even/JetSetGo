"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  threshold?: number;
  rootMargin?: string;
};

export default function ScrollReveal({
  src,
  alt,
  className = "",
  threshold = 0.15,
  rootMargin = "0px",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      <Image src={src} alt={alt || ""} width={1200} height={600} className="w-full h-auto" />
    </div>
  );
}
