type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  meta?: string[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  meta = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(64,190,255,0.18),transparent_30%),radial-gradient(circle_at_85%_0%,rgba(96,122,255,0.22),transparent_34%),linear-gradient(180deg,rgba(6,12,24,0.2),rgba(6,12,24,0.88))]" />
      <div className="container-shell relative py-24 sm:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-1 text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/90">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300/88 sm:text-xl">
          {description}
        </p>
        {meta.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300/80">
            {meta.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
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
