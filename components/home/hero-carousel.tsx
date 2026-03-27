"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const heroImages = [
  { src: "/hero-bg-4.jpg", alt: "西北大学长安校区航拍全景" },
  { src: "/hero-bg-6.jpg", alt: "西北大学正门" },
  { src: "/hero-bg-2.jpg", alt: "西北大学大学堂" },
  { src: "/hero-bg-5.jpg", alt: "西北大学体育馆鸟瞰" },
  { src: "/hero-bg-1.jpg", alt: "西北大学公诚勤朴校训" },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 6000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <div className="absolute inset-0">
      {heroImages.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-slate-950/72" />
    </div>
  );
}
