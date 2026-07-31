"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, NAV_MENUS, SITE } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || mobile;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-white/95 backdrop-blur" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 lg:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.webp"
            alt="Elyra POS"
            width={110}
            height={30}
            priority
            className={solid ? "" : "brightness-0 invert"}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpen(null)}>
          {NAV_MENUS.map((menu) => (
            <div key={menu.label} className="relative" onMouseEnter={() => setOpen(menu.label)}>
              <button
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  solid ? "text-ink hover:text-brand" : "text-white hover:text-mint"
                }`}
              >
                {menu.label}
                <svg className={`h-3.5 w-3.5 transition-transform ${open === menu.label ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === menu.label && (
                <div className="absolute left-0 top-full w-72 rounded-xl border border-line bg-white p-4 shadow-lg">
                  {menu.children.map((group) => (
                    <div key={group.group || "all"}>
                      {group.group && <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">{group.group}</p>}
                      <ul className="space-y-1">
                        {group.items.map((item) => {
                          const label = typeof item === "string" ? item : item.label;
                          const href = typeof item === "string" ? "#layanan" : item.href;
                          return (
                            <li key={label}>
                              <Link
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                className="block rounded-md px-3 py-2 text-sm text-ink hover:bg-mint-soft hover:text-brand"
                              >
                                {label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                solid ? "text-ink hover:text-brand" : "text-white hover:text-mint"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={SITE.appUrl}
            className={`text-sm font-semibold transition-colors ${solid ? "text-ink hover:text-brand" : "text-white hover:text-mint"}`}
          >
            Log in
          </Link>
          <Link
            href={SITE.registerUrl}
            className={`rounded-lg px-4 py-2.5 text-sm font-bold transition-colors ${
              solid ? "bg-brand text-white hover:bg-brand-dark" : "bg-mint text-ink hover:bg-white"
            }`}
          >
            Coba Gratis
          </Link>
        </div>

        <button
          className={`lg:hidden ${solid ? "text-ink" : "text-white"}`}
          aria-label="Buka menu"
          onClick={() => setMobile((v) => !v)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            {mobile ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />}
          </svg>
        </button>
      </div>

      {mobile && (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {NAV_MENUS.map((menu) => (
              <div key={menu.label}>
                <button className="w-full py-2 text-left text-sm font-bold text-ink" onClick={() => setOpen(open === menu.label ? null : menu.label)}>
                  {menu.label}
                </button>
                {open === menu.label &&
                  menu.children
                    .map((g) => g.items)
                    .flat()
                    .map((item) => {
                    const label = typeof item === "string" ? item : item.label;
                    const href = typeof item === "string" ? "#layanan" : item.href;
                    return (
                      <Link
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        className="block py-1.5 pl-4 text-sm text-muted"
                      >
                        {label}
                      </Link>
                    );
                  })}
              </div>
            ))}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                className="block py-2 text-sm font-bold text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-3">
              <Link href={SITE.appUrl} className="flex-1 rounded-lg border border-brand py-2.5 text-center text-sm font-bold text-brand">
                Log in
              </Link>
              <Link href={SITE.registerUrl} className="flex-1 rounded-lg bg-brand py-2.5 text-center text-sm font-bold text-white">
                Coba Gratis
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
