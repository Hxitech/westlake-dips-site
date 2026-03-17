import type { MDXComponents } from "mdx/types";
import Link from "next/link";

import { PhotoCarousel } from "@/components/mdx/photo-carousel";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 scroll-mt-28 border-t border-white/10 pt-8 font-serif text-2xl text-white"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 text-xl font-semibold text-slate-100" {...props} />
  ),
  p: (props) => (
    <p
      className="mt-4 text-base leading-8 text-slate-300/88 sm:text-lg sm:leading-9"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mt-4 space-y-3 text-slate-300/88" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-4 space-y-3 text-slate-300/88" {...props} />
  ),
  li: (props) => <li className="ml-5 list-disc pl-2" {...props} />,
  strong: (props) => <strong className="font-semibold text-white" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-cyan-400/70 pl-5 text-lg text-white/90"
      {...props}
    />
  ),
  a: ({ href = "#", ...props }) => {
    if (href.startsWith("/")) {
      return (
        <Link
          href={href}
          className="font-medium text-cyan-300 underline decoration-cyan-400/30 underline-offset-4 transition hover:text-cyan-200"
          {...props}
        />
      );
    }

    return (
      <a
        href={href}
        className="font-medium text-cyan-300 underline decoration-cyan-400/30 underline-offset-4 transition hover:text-cyan-200"
        rel="noreferrer"
        target="_blank"
        {...props}
      />
    );
  },
  PhotoCarousel,
};
