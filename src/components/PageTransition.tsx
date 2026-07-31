"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

// ponytail: timing transisi, utak-atik di sini
const FADE_IN_MS = 200;
const PUSH_DELAY_MS = 250;
const MIN_DISPLAY_MS = 250;
const FADE_OUT_MS = 400;

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [fading, setFading] = useState(false);
  const pathRef = useRef(pathname);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!a || a.target === "_blank") return;
      const href = a.getAttribute("href") || "";
      if (!href.startsWith("/")) return;
      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === pathRef.current && url.hash === a.hash) return;
      e.preventDefault();
      setShow(true);
      setFading(false);
      timer.current = setTimeout(() => router.push(href), FADE_IN_MS + PUSH_DELAY_MS);
    };
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [router]);

  useEffect(() => {
    if (!show || pathRef.current === pathname) return;
    pathRef.current = pathname;
    const t = setTimeout(() => setFading(true), MIN_DISPLAY_MS);
    const t2 = setTimeout(() => setShow(false), MIN_DISPLAY_MS + FADE_OUT_MS);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [pathname, show]);

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity ${
        show && !fading ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ transitionDuration: `${fading ? FADE_OUT_MS : FADE_IN_MS}ms` }}
    >
      <Image src="/logo.webp" alt="" width={180} height={48} priority />
      <span className="mt-6 h-1 w-24 overflow-hidden rounded-full bg-mint-soft">
        <span className="loading-bar-fill" />
      </span>
    </div>
  );
}
