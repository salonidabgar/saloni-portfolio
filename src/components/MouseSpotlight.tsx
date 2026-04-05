"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";

export default function MouseSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 150 });

  const background = useMotionTemplate`
    radial-gradient(800px circle at ${smoothX}px ${smoothY}px,
      rgba(61, 122, 90, 0.04),
      rgba(212, 168, 83, 0.02) 40%,
      transparent 70%)
  `;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY + window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-500"
      style={{ background }}
    />
  );
}
