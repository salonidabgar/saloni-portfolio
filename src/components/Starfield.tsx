"use client";

import { useState, useEffect } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
  color: string;
}

export default function Starfield() {
  const [stars, setStars] = useState<Star[]>([]);

  // Generate stars on the client only, after mount, to stay SSR-safe and
  // keep render pure (Math.random must not run during render).
  useEffect(() => {
    const layers: Star[] = [];

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
      color: Math.random() > 0.5 ? "rgba(52, 211, 153, 0.6)" : "rgba(255, 107, 107, 0.5)",
    }));

    layers.push(...smallStars.map((s) => ({ ...s, color: "rgba(255, 255, 255, 0.7)" })));
    layers.push(...mediumStars.map((s) => ({ ...s, color: "rgba(255, 255, 255, 0.85)" })));
    layers.push(...accentStars);

    setStars(layers);
  }, []);

  if (stars.length === 0) return <div className="starfield-container fixed inset-0 z-[0] pointer-events-none overflow-hidden" />;

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
