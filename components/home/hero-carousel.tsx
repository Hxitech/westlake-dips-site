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
    <div className="absolute inset-0 overflow-hidden">
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
      {/* Dark blue overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,22,48,0.78)] via-[rgba(10,30,60,0.72)] to-[rgba(12,25,50,0.88)]" />
      {/* Subtle tech grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2260%22%20height%3D%2260%22%3E%3Cpath%20d%3D%22M0%200h60v60H0z%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%220.5%22/%3E%3C/svg%3E')]" />
    </div>
  );
}
