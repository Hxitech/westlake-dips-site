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
            className="fixed inset-0 bg-slate-950/58 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
            type="button"
          />
        ) : null}
        <div className="container-shell relative pt-4">
          <div
            className={cn(
              "relative z-10 flex items-center justify-between rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,15,28,0.82),rgba(8,14,26,0.68))] px-4 py-3 shadow-[0_24px_80px_rgba(2,6,23,0.42)] backdrop-blur-xl transition-all duration-300 sm:px-6",
              scrolled &&
                "rounded-[1.6rem] border-white/14 bg-[linear-gradient(180deg,rgba(8,14,25,0.94),rgba(8,14,25,0.86))] py-2.5 shadow-[0_18px_50px_rgba(2,6,23,0.5)]",
            )}
          >
            <Link className="flex min-w-0 items-center gap-4" href="/">
              <span className="flex size-11 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/10 font-serif text-lg text-cyan-100">
                D
              </span>
              <div className="min-w-0">
                <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
                  DIPS · 2026
                </div>
                <div className="mt-1 truncate whitespace-nowrap text-sm font-medium text-white">
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
                        ? "bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                        : "text-slate-300/90 hover:bg-white/6 hover:text-white",
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
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
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
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
                data-testid="mobile-nav-toggle"
                onClick={() => setMobileOpen((current) => !current)}
                type="button"
              >
                {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
          {mobileOpen ? (
            <div className="panel-luxe relative z-10 mt-3 rounded-[2rem] border border-white/12 px-4 py-5 shadow-[0_28px_90px_rgba(2,6,23,0.42)] lg:hidden">
              <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(118,214,255,0.5),transparent)]" />
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/80">
                    DIPS Navigation
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-300/82">
                    <T
                      zh="快速进入报名、日程、指南与会务联系。"
                      en="Jump to registration, agenda, guide, and contact."
                    />
                  </div>
                </div>
                <div className="rounded-full border border-[rgba(217,196,157,0.22)] bg-[rgba(217,196,157,0.08)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-[rgba(236,220,193,0.88)]">
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
                          ? "border-white/14 bg-white/10 text-white"
                          : "border-transparent bg-white/[0.03] text-slate-300 hover:border-white/10 hover:bg-white/[0.07] hover:text-white",
                      )}
                      data-testid={testId}
                      href={item.href}
                      key={item.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>{locale === "zh" ? item.label : item.labelEn}</div>
                        <div className="text-[0.68rem] uppercase tracking-[0.24em] text-cyan-200/75">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <div className="mt-1.5 text-xs leading-5 text-slate-500">
                        {locale === "zh" ? item.description : item.descriptionEn}
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                <button
                  className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
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
