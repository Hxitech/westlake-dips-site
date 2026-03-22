import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  size?: "default" | "compact";
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses = {
  primary:
    "border border-blue-300 bg-[linear-gradient(135deg,#1a5fb4,#2d7dd2)] text-white shadow-[0_4px_16px_rgba(26,95,180,0.25)] hover:shadow-[0_6px_24px_rgba(26,95,180,0.35)] hover:brightness-110",
  secondary:
    "border border-gray-200 bg-white text-gray-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700",
  ghost:
    "border border-transparent bg-transparent text-blue-600 hover:bg-blue-50",
};

const sizeClasses = {
  default: "px-5 py-3 text-sm tracking-[0.08em]",
  compact: "px-4 py-2.5 text-[0.78rem] tracking-[0.12em]",
};

export function ButtonLink({
  href,
  children,
  className,
  external = false,
  size = "default",
  variant = "primary",
}: ButtonLinkProps) {
  const icon = external ? ArrowUpRight : ArrowRight;
  const Icon = icon;

  return (
    <Link
      className={cn(
        "group/button relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition duration-300",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.2),transparent)] opacity-0 transition duration-500 group-hover/button:translate-x-full group-hover/button:opacity-100" />
      <span className="relative z-10">{children}</span>
      <Icon className="relative z-10 size-4 transition duration-300 group-hover/button:translate-x-0.5" />
    </Link>
  );
}
