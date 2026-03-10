"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { SearchDialog } from "@/components/search/search-dialog";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/t";
import type { NavItem, SearchItem } from "@/content/types";
import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

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

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="container-shell pt-4">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/72 px-4 py-3 shadow-[0_20px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:px-6">
            <Link className="flex items-center gap-4" href="/">
              <span className="flex size-11 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/10 font-serif text-lg text-cyan-100">
                D
              </span>
              <div>
                <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
                  DIPS · 2026
                </div>
                <div className="mt-1 text-sm font-medium text-white">
                  <T zh="数智病理西湖峰会" en="DIPS Summit" />
                </div>
              </div>
            </Link>
            <nav className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    className={cn(
                      "rounded-full px-4 py-2 text-sm transition",
                      active
                        ? "bg-white/10 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white",
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
              <ButtonLink href="/register" variant="primary">
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
            <div className="panel mt-3 rounded-[2rem] px-4 py-5 lg:hidden">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const active = pathname === item.href;
                  const testId =
                    item.href === "/"
                      ? "mobile-nav-home"
                      : `mobile-nav-${item.href.replaceAll("/", "-").replace(/^-/, "")}`;

                  return (
                    <Link
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-sm transition",
                        active
                          ? "bg-white/10 text-white"
                          : "text-slate-300 hover:bg-white/5 hover:text-white",
                      )}
                      data-testid={testId}
                      href={item.href}
                      key={item.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      <div>{locale === "zh" ? item.label : item.labelEn}</div>
                      <div className="mt-1 text-xs text-slate-500">
                        {locale === "zh" ? item.description : item.descriptionEn}
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <button
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
                  onClick={() => {
                    setMobileOpen(false);
                    setSearchOpen(true);
                  }}
                  type="button"
                >
                  <Search className="size-4" />
                  <T zh="搜索" en="Search" />
                </button>
                <ButtonLink className="flex-1 justify-center" href="/register">
                  <T zh="立即注册" en="Register" />
                </ButtonLink>
              </div>
            </div>
          ) : null}
        </div>
      </header>
      <SearchDialog
        items={searchItems}
        onClose={() => setSearchOpen(false)}
        open={searchOpen}
      />
    </>
  );
}
