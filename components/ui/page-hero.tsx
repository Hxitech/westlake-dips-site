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
    <section className="border-b border-gray-200 bg-gray-50">
      <div className="container-shell py-16 sm:py-20">
        <p className="text-sm font-medium text-blue-700">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            {description}
          </p>
        ) : null}
        {meta.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2 text-sm text-gray-500">
            {meta.map((item, index) => (
              <span
                key={index}
                className="rounded bg-white px-2.5 py-1 ring-1 ring-gray-200"
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
