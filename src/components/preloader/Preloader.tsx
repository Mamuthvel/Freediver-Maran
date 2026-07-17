"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePreloadProgress } from "./usePreloadProgress";

const EASE = [0.22, 1, 0.36, 1] as const;
const SESSION_KEY = "sc-dived";

/*
 * "Marine snow" — deterministic positions (seeded PRNG, computed once at module
 * scope) so the server-rendered markup matches hydration exactly.
 */
function mulberry32(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(40); // −40 M, naturally
const PARTICLES = Array.from({ length: 36 }, () => ({
  left: rand() * 100,
  top: rand() * 100,
  size: 1 + rand() * 1.5,
  opacity: 0.15 + rand() * 0.25,
  duration: 14 + rand() * 14,
  delay: -rand() * 20, // negative delay: field is already in motion on reveal
}));

/**
 * First-visit-per-session preloader. Zero-flash strategy:
 * an inline script in layout.tsx adds `sc-preload` to <html> before first
 * paint when the session flag is absent; CSS shows this (server-rendered)
 * overlay only under that class. So the scene covers the very first frame
 * without blocking RSC streaming, and repeat navigations never render it.
 */
export function Preloader() {
  const [active, setActive] = useState(false);
  const [exited, setExited] = useState(false);
  const reduced = useReducedMotion();
  const { progress, done } = usePreloadProgress(active);

  useEffect(() => {
    // The inline script already decided; we just read its verdict.
    if (document.documentElement.classList.contains("sc-preload")) {
      setActive(true);
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch {}
    } else {
      setExited(true);
    }
  }, []);

  // Unlock scroll the moment the exit animation starts, not when it ends —
  // the hero should feel reachable as it "rises" into view.
  useEffect(() => {
    if (done) document.documentElement.classList.remove("sc-preload");
  }, [done]);

  if (exited) return null;

  const depth = (progress * 40).toFixed(1);
  const depthLabel = progress === 0 ? "0.0" : `−${depth}`;

  return (
    <AnimatePresence onExitComplete={() => setExited(true)}>
      {!done && (
        <motion.div
          aria-hidden
          className="sc-preloader fixed inset-0 z-[100] overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, #0A4D68 0%, #062A42 55%, #041E30 100%)",
          }}
          // Exit: the viewer keeps sinking — the scene appears to accelerate
          // away overhead while the hero (and its own "0 M" DepthMarker)
          // rises from below. 900ms, shared easing with page reveals.
          exit={
            reduced
              ? { opacity: 0, transition: { duration: 0.6 } }
              : { y: "-100%", transition: { duration: 0.9, ease: EASE } }
          }
        >
          {!reduced && (
            <>
              {/* Volumetric god-rays — blurred gradient blades, slow drift.
                  WebGL fork point: replace this block + the orb with a lazy
                  react-three-fiber scene (MeshTransmissionMaterial) if the
                  bundle budget ever allows. */}
              <div className="sc-ray sc-ray-1" />
              <div className="sc-ray sc-ray-2" />
              <div className="sc-ray sc-ray-3" />

              {/* Marine snow drifting upward — sells that *we* are sinking */}
              <div className="absolute inset-0">
                {PARTICLES.map((p, i) => (
                  <span
                    key={i}
                    className="sc-snow"
                    style={{
                      left: `${p.left}%`,
                      top: `${p.top}%`,
                      width: p.size,
                      height: p.size,
                      opacity: p.opacity,
                      animationDuration: `${p.duration}s`,
                      animationDelay: `${p.delay}s`,
                    }}
                  />
                ))}
              </div>

              {/* The glass orb — layered gradients faking refraction */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="sc-orb">
                  <div className="sc-orb-rim" />
                  <div className="sc-orb-caustic" />
                  <div className="sc-orb-highlight" />
                </div>
              </div>
            </>
          )}

          {/* Entry veil: 1.2s fade in from black */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: EASE }}
          />

          {/* Depth gauge */}
          <div className="absolute bottom-10 left-6 flex items-end gap-4 sm:left-10">
            <div className="relative h-24 w-px bg-[#7FDBD4]/15">
              <div
                className="absolute inset-x-0 top-0 bg-[#7FDBD4]/60"
                style={{ height: `${(reduced ? 1 : progress) * 100}%` }}
              />
            </div>
            <div className="font-gauge text-[#7FDBD4]/60">
              <motion.p
                className="text-[10px] uppercase tracking-[0.3em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
              >
                Descending
              </motion.p>
              <p className="mt-1 text-2xl tabular-nums tracking-[0.15em]">
                {reduced ? "−40.0" : depthLabel}
                <span className="ml-2 text-sm text-[#7FDBD4]/40">M</span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
