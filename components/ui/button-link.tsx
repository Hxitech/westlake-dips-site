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
    "border border-cyan-200/40 bg-[linear-gradient(135deg,rgba(243,251,255,0.92),rgba(117,219,255,0.92))] text-slate-950 shadow-[0_18px_50px_rgba(72,217,255,0.2)] hover:border-cyan-100 hover:shadow-[0_20px_60px_rgba(72,217,255,0.26)]",
  secondary:
    "border border-white/14 bg-white/[0.045] text-white hover:border-white/28 hover:bg-white/[0.09]",
  ghost:
    "border border-transparent bg-transparent text-cyan-100 hover:bg-white/5",
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
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.3),transparent)] opacity-0 transition duration-500 group-hover/button:translate-x-full group-hover/button:opacity-100" />
      <span className="relative z-10">{children}</span>
      <Icon className="relative z-10 size-4 transition duration-300 group-hover/button:translate-x-0.5" />
    </Link>
  );
}
