import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "@/components/mdx/mdx-components";
import type {
  AnnouncementFrontmatter,
  ArchiveFrontmatter,
} from "@/content/types";

const CONTENT_ROOT = path.join(process.cwd(), "content");

async function readMdxSource(...segments: string[]) {
  return fs.readFile(path.join(CONTENT_ROOT, ...segments), "utf8");
}

async function readMdxDir(dir: string) {
  const entries = await fs.readdir(path.join(CONTENT_ROOT, dir));
  return entries.filter((entry) => entry.endsWith(".mdx"));
}

function sortAnnouncements(items: AnnouncementFrontmatter[]) {
  return [...items].sort((left, right) => {
    const pinWeight = Number(Boolean(right.pinned)) - Number(Boolean(left.pinned));

    if (pinWeight !== 0) {
      return pinWeight;
    }

    return new Date(right.date).getTime() - new Date(left.date).getTime();
  });
}

export function formatDisplayDate(date: string, locale: "zh" | "en" = "zh") {
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-US", {
    dateStyle: "long",
  }).format(new Date(date));
}

export async function getAnnouncementSummaries() {
  const files = await readMdxDir("announcements");
  const summaries = await Promise.all(
    files.map(async (file) => {
      const source = await readMdxSource("announcements", file);
      const { data } = matter(source);

      return {
        slug: file.replace(/\.mdx$/, ""),
        title: String(data.title),
        titleEn: data.titleEn ? String(data.titleEn) : undefined,
        date: String(data.date),
        category: String(data.category),
        categoryEn: data.categoryEn ? String(data.categoryEn) : undefined,
        excerpt: String(data.excerpt),
        excerptEn: data.excerptEn ? String(data.excerptEn) : undefined,
        pinned: Boolean(data.pinned),
      } satisfies AnnouncementFrontmatter;
    }),
  );

  return sortAnnouncements(summaries);
}

export async function getAnnouncementBySlug(slug: string) {
  const source = await readMdxSource("announcements", `${slug}.mdx`);
  const { content, data } = matter(source);

  const compiled = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return {
    frontmatter: {
      slug,
      title: String(data.title),
      titleEn: data.titleEn ? String(data.titleEn) : undefined,
      date: String(data.date),
      category: String(data.category),
      categoryEn: data.categoryEn ? String(data.categoryEn) : undefined,
      excerpt: String(data.excerpt),
      excerptEn: data.excerptEn ? String(data.excerptEn) : undefined,
      pinned: Boolean(data.pinned),
    } satisfies AnnouncementFrontmatter,
    content: compiled.content,
  };
}

export async function getArchiveSummaries() {
  const files = await readMdxDir("archives");
  const summaries = await Promise.all(
    files.map(async (file) => {
      const source = await readMdxSource("archives", file);
      const { data } = matter(source);

      return {
        year: String(data.year),
        title: String(data.title),
        titleEn: data.titleEn ? String(data.titleEn) : undefined,
        theme: String(data.theme),
        themeEn: data.themeEn ? String(data.themeEn) : undefined,
        location: String(data.location),
        locationEn: data.locationEn ? String(data.locationEn) : undefined,
        highlight: String(data.highlight),
        highlightEn: data.highlightEn ? String(data.highlightEn) : undefined,
        gallery: Array.isArray(data.gallery) ? data.gallery.map(String) : [],
        galleryEn: Array.isArray(data.galleryEn) ? data.galleryEn.map(String) : undefined,
        videoLabel: data.videoLabel ? String(data.videoLabel) : undefined,
        videoLabelEn: data.videoLabelEn ? String(data.videoLabelEn) : undefined,
      } satisfies ArchiveFrontmatter;
    }),
  );

  return [...summaries].sort((left, right) => Number(right.year) - Number(left.year));
}

export async function getArchiveByYear(year: string) {
  const source = await readMdxSource("archives", `${year}.mdx`);
  const { content, data } = matter(source);

  const compiled = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return {
    frontmatter: {
      year: String(data.year),
      title: String(data.title),
      titleEn: data.titleEn ? String(data.titleEn) : undefined,
      theme: String(data.theme),
      themeEn: data.themeEn ? String(data.themeEn) : undefined,
      location: String(data.location),
      locationEn: data.locationEn ? String(data.locationEn) : undefined,
      highlight: String(data.highlight),
      highlightEn: data.highlightEn ? String(data.highlightEn) : undefined,
      gallery: Array.isArray(data.gallery) ? data.gallery.map(String) : [],
      galleryEn: Array.isArray(data.galleryEn) ? data.galleryEn.map(String) : undefined,
      videoLabel: data.videoLabel ? String(data.videoLabel) : undefined,
      videoLabelEn: data.videoLabelEn ? String(data.videoLabelEn) : undefined,
    } satisfies ArchiveFrontmatter,
    content: compiled.content,
  };
}

export async function getRegisterGuide() {
  const source = await readMdxSource("register", "guide.mdx");
  const compiled = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return compiled.content;
}
