"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/t";
import type { NavItem, SearchItem } from "@/content/types";
import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

const SearchDialog = dynamic(
  () => import("@/components/search/search-dialog").then((mod) => mod.SearchDialog),
  { ssr: false },
);

type SiteHeaderProps = {
  navigation: NavItem[];
  searchItems: SearchItem[];
};

export function SiteHeader({
  navigation,
  searchItems,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const { locale } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        {mobileOpen ? (
          <button
            aria-label="Close navigation overlay"
            className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
            type="button"
          />
        ) : null}
        <div className="container-shell relative pt-4">
          <div
            className={cn(
              "relative z-10 flex items-center justify-between rounded-[2rem] border border-gray-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,248,252,0.88))] px-4 py-3 shadow-[0_4px_24px_rgba(26,95,180,0.08)] backdrop-blur-xl transition-all duration-300 sm:px-6",
              scrolled &&
                "rounded-[1.6rem] border-gray-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.94))] py-2.5 shadow-[0_4px_20px_rgba(26,95,180,0.1)]",
            )}
          >
            <Link className="flex min-w-0 items-center gap-4" href="/">
              <span className="flex size-11 items-center justify-center rounded-full border border-blue-200 bg-blue-50 font-serif text-lg text-blue-700">
                D
              </span>
              <div className="min-w-0">
                <div className="text-[0.68rem] uppercase tracking-[0.28em] text-blue-600">
                  DIPS · 2026
                </div>
                <div className="mt-1 truncate whitespace-nowrap text-sm font-medium text-gray-900">
                  <T zh="数智病理峰会" en="DIPS Summit" />
                </div>
              </div>
            </Link>
            <nav className="hidden items-center gap-1.5 lg:flex">
              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    className={cn(
                      "rounded-full px-4 py-2 text-sm transition",
                      active
                        ? "bg-blue-50 text-blue-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                    )}
                    href={item.href}
                    key={item.href}
                  >
                    {locale === "zh" ? item.label : item.labelEn}
                  </Link>
                );
              })}
            </nav>
            <div className="hidden items-center gap-3 lg:flex">
              <LocaleSwitcher />
              <button
                aria-label={locale === "zh" ? "打开搜索" : "Open search"}
                className="rounded-full border border-gray-200 bg-gray-50 p-3 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                onClick={() => setSearchOpen(true)}
                type="button"
              >
                <Search className="size-4" />
              </button>
              <ButtonLink href="/register" size="compact" variant="primary">
                <T zh="立即注册" en="Register" />
              </ButtonLink>
            </div>
            <div className="flex items-center gap-2 lg:hidden">
              <LocaleSwitcher />
              <button
                aria-expanded={mobileOpen}
                aria-label="Toggle navigation"
                className="rounded-full border border-gray-200 bg-gray-50 p-3 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                data-testid="mobile-nav-toggle"
                onClick={() => setMobileOpen((current) => !current)}
                type="button"
              >
                {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
          {mobileOpen ? (
            <div className="panel-luxe relative z-10 mt-3 rounded-[2rem] border border-gray-200 px-4 py-5 shadow-[0_8px_32px_rgba(26,95,180,0.1)] lg:hidden">
              <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(26,95,180,0.2),transparent)]" />
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.28em] text-blue-600">
                    DIPS Navigation
                  </div>
                  <div className="mt-2 text-sm leading-6 text-gray-500">
                    <T
                      zh="快速进入报名、日程、指南与会务联系。"
                      en="Jump to registration, agenda, guide, and contact."
                    />
                  </div>
                </div>
                <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-amber-700">
                  <T zh="移动端" en="Mobile" />
                </div>
              </div>
              <div className="space-y-2">
                {navigation.map((item, index) => {
                  const active = pathname === item.href;
                  const testId =
                    item.href === "/"
                      ? "mobile-nav-home"
                      : `mobile-nav-${item.href.replaceAll("/", "-").replace(/^-/, "")}`;

                  return (
                    <Link
                      className={cn(
                        "block rounded-[1.4rem] border px-4 py-3.5 text-sm transition",
                        active
                          ? "border-blue-200 bg-blue-50 text-blue-700"
                          : "border-transparent bg-gray-50 text-gray-600 hover:border-gray-200 hover:bg-gray-100 hover:text-gray-900",
                      )}
                      data-testid={testId}
                      href={item.href}
                      key={item.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>{locale === "zh" ? item.label : item.labelEn}</div>
                        <div className="text-[0.68rem] uppercase tracking-[0.24em] text-blue-500">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <div className="mt-1.5 text-xs leading-5 text-gray-400">
                        {locale === "zh" ? item.description : item.descriptionEn}
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                <button
                  className="flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700"
                  onClick={() => {
                    setMobileOpen(false);
                    setSearchOpen(true);
                  }}
                  type="button"
                >
                  <Search className="size-4" />
                  <T zh="搜索" en="Search" />
                </button>
                <ButtonLink className="justify-center" href="/register" size="compact">
                  <T zh="立即注册" en="Register" />
                </ButtonLink>
              </div>
            </div>
          ) : null}
        </div>
      </header>
      {searchOpen ? (
        <SearchDialog
          items={searchItems}
          onClose={() => setSearchOpen(false)}
          open={searchOpen}
        />
      ) : null}
    </>
  );
}
