"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.3 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    window.addEventListener("mousemove", handleMouseMove);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor], input, textarea, [role='button']");
      if (interactive) setIsHovering(true);
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor], input, textarea, [role='button']");
      if (interactive) setIsHovering(false);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseMove]);

  return (
    <>
      {/* Glow ring */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          width: { type: "spring", damping: 20, stiffness: 300 },
          height: { type: "spring", damping: 20, stiffness: 300 },
          opacity: { duration: 0.15 },
        }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-200"
          style={{
            width: "100%",
            height: "100%",
            borderColor: isHovering ? "rgba(139, 92, 246, 0.5)" : "rgba(148, 163, 230, 0.2)",
            boxShadow: isHovering
              ? "0 0 20px rgba(139, 92, 246, 0.15), inset 0 0 20px rgba(139, 92, 246, 0.05)"
              : "none",
          }}
        />
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: isHovering ? 6 : 4,
          height: isHovering ? 6 : 4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.15 },
        }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: isHovering ? "rgba(139, 92, 246, 0.9)" : "rgba(148, 163, 230, 0.5)",
          }}
        />
      </motion.div>
    </>
  );
}
