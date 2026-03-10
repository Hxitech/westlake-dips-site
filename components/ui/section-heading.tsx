import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
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
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/92">
          {eyebrow}
        </span>
        <h2 className="mt-5 font-serif text-3xl tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-300/82 sm:text-lg">
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}
