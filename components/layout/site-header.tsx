"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { T } from "@/components/ui/t";
import { registrationConfig, siteConfig } from "@/content/data/site";
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
  const showRegistrationCta = registrationConfig.status === "external";
  const pathname = usePathname();
  const { locale } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b bg-white/95 backdrop-blur-sm transition-[background-color,border-color,box-shadow]",
          scrolled ? "border-gray-200 shadow-sm" : "border-transparent",
        )}
      >
        <div className="container-shell flex h-14 items-center justify-between sm:h-16">
          <Link className="flex items-center gap-3" href="/">
            <span className="flex size-8 items-center justify-center rounded bg-blue-700 text-sm font-bold text-white">
              D
            </span>
            <span className="text-body-copy sm:hidden font-semibold text-gray-900">
              {siteConfig.shortNameEn}
            </span>
            <span className="text-body-copy hidden font-semibold text-gray-900 sm:inline">
              <T zh={siteConfig.name} en={siteConfig.nameEn} />
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  className={cn(
                    "text-body-copy px-3 py-1.5 transition",
                    active
                      ? "font-medium text-blue-700"
                      : "text-gray-600 hover:text-gray-900",
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {locale === "zh" ? item.label : item.labelEn}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <button
              aria-label={locale === "zh" ? "打开搜索" : "Open search"}
              className="hidden rounded-md p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 lg:inline-flex"
              onClick={() => setSearchOpen(true)}
              type="button"
            >
              <Search className="size-4" />
            </button>
            {showRegistrationCta ? (
              <Link
                className="text-body-copy hidden rounded-md bg-blue-700 px-3.5 py-1.5 font-medium text-white transition hover:bg-blue-800 lg:inline-flex"
                href={registrationConfig.externalUrl ?? registrationConfig.pageHref}
              >
                <T zh="立即注册" en="Register" />
              </Link>
            ) : null}
            <button
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
              className="rounded-md p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 lg:hidden"
              data-testid="mobile-nav-toggle"
              onClick={() => setMobileOpen((c) => !c)}
              type="button"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-gray-100 bg-white px-4 pb-4 pt-2 lg:hidden">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  className={cn(
                    "text-body-copy block py-2",
                    active ? "font-medium text-blue-700" : "text-gray-700",
                  )}
                  data-testid={
                    item.href === "/"
                      ? "mobile-nav-home"
                      : `mobile-nav-${item.href.replaceAll("/", "-").replace(/^-/, "")}`
                  }
                  href={item.href}
                  key={item.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {locale === "zh" ? item.label : item.labelEn}
                </Link>
              );
            })}
            <div className="mt-2 flex gap-2 border-t border-gray-100 pt-3">
              <button
                className="flex flex-1 items-center justify-center gap-2 rounded-md border border-gray-300 bg-gray-50 py-2 text-sm text-gray-700 transition hover:bg-gray-100"
                onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
                type="button"
              >
                <Search className="size-4" />
                <T zh="搜索" en="Search" />
              </button>
              {showRegistrationCta ? (
                <Link
                  className="text-body-copy flex-1 rounded-md bg-blue-700 py-2 text-center font-medium text-white"
                  href={registrationConfig.externalUrl ?? registrationConfig.pageHref}
                  onClick={() => setMobileOpen(false)}
                >
                  <T zh="立即注册" en="Register" />
                </Link>
              ) : null}
            </div>
          </div>
        ) : null}
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
