"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [exit, setExit] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if already loaded this session
    if (typeof window !== "undefined" && sessionStorage.getItem("preloaded")) {
      setDone(true);
      return;
    }

    let current = 0;
    intervalRef.current = setInterval(() => {
      const increment = current < 70 ? Math.floor(Math.random() * 8) + 3 : Math.floor(Math.random() * 4) + 1;
      current = Math.min(100, current + increment);
      setCount(current);

      if (current >= 100) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setTimeout(() => setExit(true), 400);
        setTimeout(() => {
          setDone(true);
          if (typeof window !== "undefined") {
            sessionStorage.setItem("preloaded", "true");
          }
        }, 1200);
      }
    }, 50);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (done) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0a0a0a]"
          animate={exit ? { y: "-100%" } : { y: 0 }}
          transition={exit ? { duration: 0.8, ease: [0.76, 0, 0.24, 1] } : {}}
        >
          {/* Name reveal */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl font-display font-bold tracking-tight"
              initial={{ y: "100%" }}
              animate={{ y: exit ? "-100%" : "0%" }}
              transition={{
                y: {
                  duration: exit ? 0.6 : 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: exit ? 0 : 0.2,
                },
              }}
            >
              <span className="text-[var(--foreground)]">Saloni</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #06d6a0, #f59e0b, #ff6b6b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Dabgar
              </span>
            </motion.h1>
          </div>

          {/* Counter */}
          <motion.div
            className="absolute bottom-12 right-12 flex items-end gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: exit ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-7xl md:text-9xl font-display font-bold tabular-nums leading-none gradient-text">
              {count}
            </span>
            <span className="text-xl md:text-2xl font-display text-[var(--muted)] mb-2">%</span>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--surface)]">
            <motion.div
              className="h-full origin-left"
              style={{
                background: "linear-gradient(90deg, #06d6a0, #f59e0b, #ff6b6b, #a855f7)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>

          {/* Subtle tagline */}
          <motion.p
            className="absolute bottom-12 left-12 text-xs font-mono text-[var(--muted)] tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: exit ? 0 : 0.6 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            ENGINEER / BUILDER / THINKER
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
