import type { MDXComponents } from "mdx/types";
import Link from "next/link";

import { DocumentPages } from "@/components/mdx/document-pages";

export const mdxComponents: MDXComponents = {
  DocumentPages,
  h2: (props) => (
    <h2
      className="mt-12 scroll-mt-28 border-t border-gray-200 pt-8 font-serif text-2xl text-gray-900"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 text-xl font-semibold text-gray-800" {...props} />
  ),
  p: (props) => (
    <p
      className="mt-4 text-base leading-8 text-gray-600 sm:text-lg sm:leading-9"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mt-4 space-y-3 text-gray-600" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-4 space-y-3 text-gray-600" {...props} />
  ),
  li: (props) => <li className="ml-5 list-disc pl-2" {...props} />,
  strong: (props) => <strong className="font-semibold text-gray-900" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-blue-400 pl-5 text-lg text-gray-700"
      {...props}
    />
  ),
  a: ({ href = "#", ...props }) => {
    if (href.startsWith("/")) {
      return (
        <Link
          href={href}
          className="font-medium text-blue-600 underline decoration-blue-300/40 underline-offset-4 transition hover:text-blue-700"
          {...props}
        />
      );
    }

    return (
      <a
        href={href}
        className="font-medium text-blue-600 underline decoration-blue-300/40 underline-offset-4 transition hover:text-blue-700"
        rel="noreferrer"
        target="_blank"
        {...props}
      />
    );
  },
};
