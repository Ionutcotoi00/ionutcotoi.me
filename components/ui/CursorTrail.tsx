"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Point {
  x: number;
  y: number;
  id: number;
}

export default function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    let pointId = 0;
    let lastTime = 0;
    const throttleDelay = 16; // ~60fps throttling

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastTime < throttleDelay) return;
      lastTime = currentTime;

      const newPoint: Point = {
        x: e.clientX,
        y: e.clientY,
        id: pointId++,
      };

      setPoints((prev) => [...prev.slice(-10), newPoint]); // Reduced from 20 to 10

      setTimeout(() => {
        setPoints((prev) => prev.filter((p) => p.id !== newPoint.id));
      }, 800); // Slightly faster fade
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {points.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 rounded-full bg-[var(--accent-primary)]/30"
          initial={{
            x: point.x - 4,
            y: point.y - 4,
            scale: 1,
            opacity: 0.6,
          }}
          animate={{
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            left: point.x,
            top: point.y,
          }}
        />
      ))}
    </div>
  );
}

