"use client";

import { useEffect, useRef, useState } from "react";

interface Shape {
  className: string;
  /** How much this shape moves relative to mouse. 1 = default, 2 = twice as much */
  speed?: number;
}

interface FloatingShapesProps {
  shapes: Shape[];
}

export function FloatingShapes({ shapes }: FloatingShapesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function handleMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      // Normalize to -1..1 range
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      setOffset({ x, y });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} aria-hidden className="pointer-events-none absolute inset-0">
      {shapes.map((shape, i) => {
        const speed = shape.speed ?? 1;
        const moveX = offset.x * 20 * speed;
        const moveY = offset.y * 15 * speed;
        return (
          <div
            key={i}
            className={shape.className}
            style={{
              transform: `translate(${moveX}px, ${moveY}px)`,
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        );
      })}
    </div>
  );
}
