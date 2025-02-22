'use client'

import { useEffect, useState } from "react";

export function ScrollOpacityChange({ 
  changeFunction,
  initialOpacity,
  children
}: { 
  changeFunction: (scrollY: number) => number;
  initialOpacity?: number;
  children?: React.ReactNode; 
}) {
  const [scrollY, setScrollY] = useState(0);
  const [opacity, setOpacity] = useState(initialOpacity ?? 1);

  // add event listeners
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setOpacity(changeFunction(currentScrollY));
    }

    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    }
  }, []);

  return (
    <div style={{ opacity }}>{children}</div>
  );
}