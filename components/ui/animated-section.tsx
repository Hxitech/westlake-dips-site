import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "rise" | "fade" | "scale";
  stagger?: boolean;
};

export function AnimatedSection({
  children,
  className,
  variant,
  stagger,
}: AnimatedSectionProps) {
  return (
    <div className={cn(className)} data-stagger={stagger ? "true" : undefined} data-variant={variant}>
      {children}
    </div>
  );
}
