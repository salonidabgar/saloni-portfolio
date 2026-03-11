"use client";

import { useMemo, useState, useEffect } from "react";

export default function Starfield() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const stars = useMemo(() => {
    if (!mounted) return [];
    const layers = [];

    // Layer 1: Small dim stars
    const smallStars = Array.from({ length: 80 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      delay: Math.random() * 6,
      duration: Math.random() * 3 + 3,
    }));

    // Layer 2: Medium brighter stars
    const mediumStars = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 1.2,
      opacity: Math.random() * 0.5 + 0.2,
      delay: Math.random() * 4,
      duration: Math.random() * 4 + 2,
    }));

    // Layer 3: Rare bright accent stars
    const accentStars = Array.from({ length: 8 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 1.5,
      opacity: Math.random() * 0.4 + 0.3,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 3,
      color: Math.random() > 0.5 ? "rgba(139, 92, 246, 0.8)" : "rgba(34, 211, 238, 0.7)",
    }));

    layers.push(...smallStars.map((s) => ({ ...s, color: "rgba(255, 255, 255, 0.7)" })));
    layers.push(...mediumStars.map((s) => ({ ...s, color: "rgba(255, 255, 255, 0.85)" })));
    layers.push(...accentStars);

    return layers;
  }, [mounted]);

  if (!mounted) return <div className="starfield-container fixed inset-0 z-[0] pointer-events-none overflow-hidden" />;

  return (
    <div className="starfield-container fixed inset-0 z-[0] pointer-events-none overflow-hidden">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star-twinkle absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
