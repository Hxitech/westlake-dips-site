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
        <p className="text-body-copy font-medium text-blue-700">{eyebrow}</p>
        <h1 className="text-display mt-3 font-bold tracking-tight text-gray-900">
          {title}
        </h1>
        {description ? (
          <p className="text-body-copy mt-4 max-w-2xl text-gray-600">
            {description}
          </p>
        ) : null}
        {meta.length > 0 ? (
          <div className="text-body-copy mt-5 flex flex-wrap gap-2 text-gray-500">
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
