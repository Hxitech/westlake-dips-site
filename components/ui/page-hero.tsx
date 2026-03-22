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
    <section className="relative overflow-hidden border-b border-gray-200">
      <HeroAtmosphere intensity="soft" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.4),rgba(240,244,249,0.9))]" />
      <div className="container-shell relative py-24 sm:py-28">
        <span className="luxe-badge">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-4xl font-serif text-[clamp(2.4rem,4vw,4.8rem)] leading-[1.08] tracking-[-0.04em] text-gray-900 [text-wrap:balance]">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-3xl text-[clamp(1rem,1.5vw,1.22rem)] leading-8 text-gray-500 [text-wrap:pretty]">
            {description}
          </p>
        ) : null}
        {meta.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-500">
            {meta.map((item, index) => (
              <span
                key={index}
                className="rounded-full border border-gray-200 bg-white/80 px-4 py-2 backdrop-blur"
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
