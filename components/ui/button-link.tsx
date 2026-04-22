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
    "bg-blue-700 text-white hover:bg-blue-800",
  secondary:
    "ring-1 ring-gray-300 bg-white text-gray-700 hover:bg-gray-50",
  ghost:
    "text-blue-700 hover:bg-blue-50",
};

const sizeClasses = {
  default: "px-4 py-2 text-body-copy",
  compact: "px-3 py-1.5 text-body-copy",
};

export function ButtonLink({
  href,
  children,
  className,
  external = false,
  size = "default",
  variant = "primary",
}: ButtonLinkProps) {
  const Icon = external ? ArrowUpRight : ArrowRight;

  return (
    <Link
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md font-medium transition",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
      <Icon className="size-3.5" />
    </Link>
  );
}
