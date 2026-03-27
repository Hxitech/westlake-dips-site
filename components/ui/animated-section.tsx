"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "rise" | "fade" | "scale";
  stagger?: boolean;
  threshold?: number;
};

export function AnimatedSection({
  children,
  className,
  variant = "rise",
  stagger = false,
  threshold = 0.12,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      element.classList.add("is-visible");
      return;
    }

    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const isInitiallyVisible = rect.top < viewportHeight && rect.bottom > 0;

    if (isInitiallyVisible) {
      element.classList.add("is-visible");
      return;
    }

    // Only arm off-screen sections so we don't render blank bands before hydration.
    element.dataset.armed = "true";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      className={cn("animate-on-scroll", className)}
      data-stagger={stagger ? "true" : undefined}
      data-variant={variant}
      ref={ref}
    >
      {children}
    </div>
  );
}
