"use client";

import { useEffect, useRef, useState } from "react";

const MIN_MS = 2200; // minimum dwell — the descent should never feel rushed
const MAX_MS = 3500; // hard cap — never hold the page hostage

/**
 * Tracks real load progress (document.readyState + document.fonts.ready) but
 * renders it as a continuously easing value so the gauge never jumps or stalls.
 *
 * Returns progress in [0, 1] and `done` once the exit may begin
 * (real load complete AND MIN_MS elapsed, or MAX_MS reached).
 */
export function usePreloadProgress(active: boolean) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const raf = useRef(0);

  useEffect(() => {
    if (!active) return;

    const start = performance.now();
    let loaded = false;
    let shown = 0; // eased value actually displayed

    const markLoaded = () => { loaded = true; };
    if (document.readyState === "complete") markLoaded();
    else window.addEventListener("load", markLoaded, { once: true });
    document.fonts?.ready.then(markLoaded).catch(() => {});

    const tick = (now: number) => {
      const t = now - start;
      // Creep toward 0.9 while loading; release to 1 once real signals land.
      // Time-based floor keeps the gauge moving even on a stalled network.
      const floor = Math.min(0.9, t / MAX_MS);
      const target = loaded ? 1 : Math.max(floor, Math.min(0.9, t / 1800));
      shown += (target - shown) * 0.045; // exponential ease — smooth, no jumps
      setProgress(shown);

      const mayExit = (loaded && shown > 0.985 && t >= MIN_MS) || t >= MAX_MS;
      if (mayExit) {
        setProgress(1);
        setDone(true);
        return;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("load", markLoaded);
    };
  }, [active]);

  return { progress, done };
}
