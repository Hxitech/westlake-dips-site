import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "items-center text-center sm:flex-col sm:items-center",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        <span className="luxe-badge">
          {eyebrow}
        </span>
        <h2 className="mt-5 font-serif text-[clamp(2rem,3vw,3.25rem)] leading-[1.08] tracking-[-0.04em] text-white [text-wrap:balance]">
          {title}
        </h2>
        <p className="mt-4 text-[clamp(0.98rem,1.28vw,1.12rem)] leading-8 text-slate-300/82 [text-wrap:pretty]">
          {description}
        </p>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
