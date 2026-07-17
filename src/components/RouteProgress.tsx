"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// However fast the navigation resolves, the bar stays up at least this long
// so it always reads as visible feedback rather than a flicker.
const MIN_VISIBLE_MS = 350;

function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const key = `${pathname}?${searchParams.toString()}`;

  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const shownAt = useRef<number | null>(null);
  const trickleTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevKey = useRef(key);

  useEffect(() => {
    function start() {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      if (trickleTimer.current) clearInterval(trickleTimer.current);
      shownAt.current = Date.now();
      setVisible(true);
      setProgress(0.08);
      trickleTimer.current = setInterval(() => {
        setProgress((p) => (p < 0.9 ? p + (0.9 - p) * 0.1 : p));
      }, 120);
    }

    function onClick(e: MouseEvent) {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor || (anchor.target && anchor.target !== "_self")) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname + url.search === window.location.pathname + window.location.search) return;

      start();
    }

    window.addEventListener("click", onClick);
    window.addEventListener("popstate", start);
    return () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("popstate", start);
      if (trickleTimer.current) clearInterval(trickleTimer.current);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  // Route actually changed: finish the bar, but keep it up for the minimum window.
  useEffect(() => {
    if (prevKey.current === key) return;
    prevKey.current = key;
    if (trickleTimer.current) clearInterval(trickleTimer.current);
    setProgress(1);

    const elapsed = shownAt.current ? Date.now() - shownAt.current : MIN_VISIBLE_MS;
    const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0);
    hideTimer.current = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, remaining + 150);
  }, [key]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[200] h-[3px]">
      <div
        className="h-full bg-lagoon shadow-[0_0_8px_rgba(32,178,170,0.7)] transition-[width,opacity] duration-200 ease-out"
        style={{ width: `${progress * 100}%`, opacity: visible ? 1 : 0 }}
      />
    </div>
  );
}

export function RouteProgress() {
  return (
    <Suspense fallback={null}>
      <ProgressBar />
    </Suspense>
  );
}
