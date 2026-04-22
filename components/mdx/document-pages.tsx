import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";

type DocumentPagesProps = {
  title: string;
  description?: string;
  pdfHref?: string;
  pageOneSrc: string;
  pageOneAlt: string;
  pageOneLabel: string;
  pageTwoSrc: string;
  pageTwoAlt: string;
  pageTwoLabel: string;
  width?: number;
  height?: number;
  previewOnly?: boolean;
};

export function DocumentPages({
  title,
  description,
  pdfHref,
  pageOneSrc,
  pageOneAlt,
  pageOneLabel,
  pageTwoSrc,
  pageTwoAlt,
  pageTwoLabel,
  width = 1191,
  height = 1684,
  previewOnly = false,
}: DocumentPagesProps) {
  const showPdfActions = !previewOnly && Boolean(pdfHref);
  const pages = [
    {
      src: pageOneSrc,
      alt: pageOneAlt,
      label: pageOneLabel,
    },
    {
      src: pageTwoSrc,
      alt: pageTwoAlt,
      label: pageTwoLabel,
    },
  ];

  return (
    <section className="mt-8 space-y-6">
      <div className="rounded-[1.75rem] border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
        <p className="text-body-copy font-semibold uppercase tracking-[0.16em] text-blue-700">
          会议通知原文
        </p>
        <h2 className="text-section-title mt-3 font-serif text-gray-900">
          {title}
        </h2>
        {description ? (
          <p className="text-body-copy mt-3 max-w-3xl text-gray-600">
            {description}
          </p>
        ) : null}
        {showPdfActions ? (
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink external href={pdfHref!}>
              查看 PDF
            </ButtonLink>
            <a
              className="text-body-copy inline-flex items-center gap-1.5 rounded-md bg-white px-4 py-2 font-medium text-gray-700 ring-1 ring-gray-300 transition hover:bg-gray-50"
              download
              href={pdfHref}
            >
              下载 PDF
            </a>
          </div>
        ) : null}
      </div>

      <div className="space-y-5">
        {pages.map((page, index) => (
          <figure
            className="overflow-hidden rounded-[1.8rem] border border-gray-200 bg-white shadow-[0_14px_34px_rgba(15,23,42,0.08)]"
            key={page.src}
          >
            <div className="text-body-copy border-b border-gray-100 bg-slate-50 px-5 py-3 font-medium text-slate-500">
              {page.label}
            </div>
            <div className="bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_38%),linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] p-3 sm:p-5">
              <Image
                alt={page.alt}
                className="mx-auto h-auto w-full rounded-[1rem]"
                height={height}
                priority={index === 0}
                src={page.src}
                width={width}
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
