import { HeroAtmosphere } from "@/components/ui/hero-atmosphere";

type PageHeroProps = {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  meta?: React.ReactNode[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  meta = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <HeroAtmosphere intensity="soft" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,24,0.18),rgba(6,12,24,0.9))]" />
      <div className="container-shell relative py-24 sm:py-28">
        <span className="luxe-badge">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-4xl font-serif text-[clamp(2.4rem,4vw,4.8rem)] leading-[1.08] tracking-[-0.04em] text-white [text-wrap:balance]">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-3xl text-[clamp(1rem,1.5vw,1.22rem)] leading-8 text-slate-300/88 [text-wrap:pretty]">
            {description}
          </p>
        ) : null}
        {meta.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300/80">
            {meta.map((item, index) => (
              <span
                key={index}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
