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
    <section className="relative overflow-hidden bg-[#0c1930]">
      {/* Subtle NWU-inspired background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(26,95,180,0.25),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(26,95,180,0.15),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2260%22%20height%3D%2260%22%3E%3Cpath%20d%3D%22M0%200h60v60H0z%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%220.5%22/%3E%3C/svg%3E')]" />
      <div className="container-shell relative py-24 sm:py-28">
        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.28em] text-blue-200 backdrop-blur-sm">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-4xl font-serif text-[clamp(2.4rem,4vw,4.8rem)] leading-[1.08] tracking-[-0.04em] text-white [text-wrap:balance]">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-3xl text-[clamp(1rem,1.5vw,1.22rem)] leading-8 text-blue-100/70 [text-wrap:pretty]">
            {description}
          </p>
        ) : null}
        {meta.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {meta.map((item, index) => (
              <span
                key={index}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-blue-100/80 backdrop-blur-sm"
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
