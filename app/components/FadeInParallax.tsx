"use client";
import React, { useRef } from "react";
import { useParallax } from "react-scroll-parallax";

type ScrollParallaxProps = {
  children: React.ReactNode;
  from?: number; // starting opacity
  to?: number;   // ending opacity
  finishBy?: number; // fraction of progress [0..1] over which to finish the effect
  translateYFrom?: number; // starting translateY in px
  translateYTo?: number;   // ending translateY in px
  className?: string;
};

export default function ScrollParallax({
  children,
  from = 0,
  to = 1,
  finishBy = 0.5,
  translateYFrom = 0,
  translateYTo = 0,
  className = "",
}: ScrollParallaxProps) {
  const innerRef = useRef<HTMLDivElement>(null);

  const { ref } = useParallax<HTMLDivElement>({
    onProgressChange: (p) => {
      let t = Math.min(p / finishBy, 1); // squash to [0,1]
      t = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; // cubic ease-in-out
      if (innerRef.current) {
        innerRef.current.style.opacity = String(from + (to - from) * t);
        innerRef.current.style.transform = `translateY(${translateYFrom + (translateYTo - translateYFrom) * t}px)`;
      }
    },
  });

  return (
    <div ref={ref}>
      <div
        ref={innerRef}
        className={className}
        style={{
          opacity: from,
          transform: `translateY(${translateYFrom}px)`,
          transition: "opacity 0.2s linear, transform 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
