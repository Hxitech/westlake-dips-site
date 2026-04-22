"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { T } from "@/components/ui/t";

type CarouselImage = {
  src: string;
  alt: string;
  widthClass: string;
  heightClass: string;
};

type PhotoCarouselProps = {
  images?: CarouselImage[];
};

const AUTO_PLAY_MS = 3200;

export function PhotoCarousel({
  images = [],
}: PhotoCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isPointerPaused, setIsPointerPaused] = useState(false);
  const [isFocusPaused, setIsFocusPaused] = useState(false);

  const isPlaying = !reduceMotion && !isUserPaused && !isPointerPaused && !isFocusPaused;

  const syncCurrentIndex = useCallback(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const slides = Array.from(
      container.querySelectorAll<HTMLElement>("[data-carousel-slide]"),
    );

    if (slides.length === 0) {
      return;
    }

    const viewportCenter = container.scrollLeft + (container.clientWidth / 2);
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + (slide.offsetWidth / 2);
      const distance = Math.abs(slideCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    currentIndexRef.current = closestIndex;
    setCurrentIndex((previous) => (previous === closestIndex ? previous : closestIndex));
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const container = containerRef.current;

    if (!container || images.length === 0) {
      return;
    }

    const normalizedIndex = (index + images.length) % images.length;
    const slides = Array.from(
      container.querySelectorAll<HTMLElement>("[data-carousel-slide]"),
    );
    const target = slides[normalizedIndex];

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    currentIndexRef.current = normalizedIndex;
    setCurrentIndex(normalizedIndex);
  }, [images.length]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setReduceMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => syncCurrentIndex());
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    frame = window.requestAnimationFrame(() => syncCurrentIndex());

    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [syncCurrentIndex]);

  useEffect(() => {
    if (!isPlaying || reduceMotion || images.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      scrollToIndex(currentIndexRef.current + 1);
    }, AUTO_PLAY_MS);

    return () => window.clearInterval(intervalId);
  }, [images.length, isPlaying, reduceMotion, scrollToIndex]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 rounded-[2rem] border border-gray-200 bg-gray-50/80 p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="text-kicker text-blue-600">
            <T zh="峰会影像" en="Photo Gallery" />
          </div>
          <div className="text-kicker rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-gray-500">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
            className="text-body-dense inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-2 text-gray-600 transition hover:border-blue-200 hover:text-blue-600"
            onClick={() => setIsUserPaused((current) => !current)}
            type="button"
          >
            {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            <T zh={isPlaying ? "暂停" : "播放"} en={isPlaying ? "Pause" : "Play"} />
          </button>
          <button
            aria-label="Previous photo"
            className="inline-flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-600 transition hover:border-blue-200 hover:text-blue-600"
            onClick={() => scrollToIndex(currentIndexRef.current - 1)}
            type="button"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            aria-label="Next photo"
            className="inline-flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-600 transition hover:border-blue-200 hover:text-blue-600"
            onClick={() => scrollToIndex(currentIndexRef.current + 1)}
            type="button"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pl-1 pr-1 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onBlurCapture={() => setIsFocusPaused(false)}
        onFocusCapture={() => setIsFocusPaused(true)}
        onMouseEnter={() => setIsPointerPaused(true)}
        onMouseLeave={() => setIsPointerPaused(false)}
        ref={containerRef}
      >
        {images.map((item) => (
          <div
            className={`group relative flex-none snap-center overflow-hidden rounded-[1.7rem] border border-gray-200 bg-gray-100 ${item.widthClass} ${item.heightClass}`}
            data-carousel-slide
            key={item.src}
          >
            <Image
              alt={item.alt}
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
              fill
              sizes="(max-width: 640px) 84vw, (max-width: 1024px) 38rem, 54rem"
              src={item.src}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.08))]" />
          </div>
        ))}
      </div>
    </div>
  );
}
