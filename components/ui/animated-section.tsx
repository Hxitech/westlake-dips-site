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

    // Skip animation if user prefers reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      element.classList.remove("animate-on-scroll");
      return;
    }

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
