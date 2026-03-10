import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses = {
  primary:
    "border border-cyan-300/40 bg-cyan-300/95 text-slate-950 shadow-[0_14px_40px_rgba(72,217,255,0.25)] hover:bg-cyan-200",
  secondary:
    "border border-white/18 bg-white/6 text-white hover:border-white/28 hover:bg-white/10",
  ghost:
    "border border-transparent bg-transparent text-cyan-200 hover:bg-white/5",
};

export function ButtonLink({
  href,
  children,
  className,
  external = false,
  variant = "primary",
}: ButtonLinkProps) {
  const icon = external ? ArrowUpRight : ArrowRight;
  const Icon = icon;

  return (
    <Link
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-[0.08em] transition duration-300",
        variantClasses[variant],
        className,
      )}
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
      <Icon className="size-4" />
    </Link>
  );
}
