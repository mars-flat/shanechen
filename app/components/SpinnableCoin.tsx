"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface SpinnableCoinProps {
  src: string;
  alt: string;
  size?: number;
}

const SpinnableCoin: React.FC<SpinnableCoinProps> = ({ src, alt, size = 180 }) => {
  const [rotation, setRotation] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const velocity = useRef(0);
  const inertiaFrame = useRef<number | null>(null);
  const isInertia = useRef(false);
  const rotationRef = useRef(0); // always-latest rotation
  const snapTimeout = useRef<number | null>(null);

  // params you can tweak
  const frictionPer16ms = 0.96;
  const minVelocityForInertia = 0.1; // below this: no inertia, snap immediately
  const snapDurationMs = 220;        // how long the snap animation lasts

  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  // Prevent highlight/select
  const coinStyle: React.CSSProperties = {
    perspective: "800px",
    width: size,
    height: size,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    WebkitUserSelect: "none",
    userSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    isInertia.current = false;
    lastX.current = e.clientX;
    lastTime.current = performance.now();
    velocity.current = 0;

    if (inertiaFrame.current) {
      cancelAnimationFrame(inertiaFrame.current);
      inertiaFrame.current = null;
    }
    if (snapTimeout.current) {
      window.clearTimeout(snapTimeout.current);
      snapTimeout.current = null;
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging.current) return;
    const now = performance.now();
    const deltaX = e.clientX - lastX.current;
    const dt = now - lastTime.current;

    if (dt > 0) {
      // px per ms -> scale to ~per 16ms frame
      velocity.current = (deltaX / dt) * 16;
    }

    setRotation(prev => prev + deltaX);
    lastX.current = e.clientX;
    lastTime.current = now;
  };

  const handleMouseUp = () => {
    dragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);

    if (Math.abs(velocity.current) <= minVelocityForInertia) {
      // No inertia; snap right away
      snapToNearestFace();
    } else {
      startInertia();
    }
  };

  // Inertia animation (no CSS transition)
  const startInertia = () => {
    let v = velocity.current;
    if (Math.abs(v) <= minVelocityForInertia) {
      snapToNearestFace();
      return;
    }

    isInertia.current = true;
    let prev = performance.now();

    const step = (now: number) => {
      const dt = now - prev || 16;
      prev = now;

      // apply rotation using current v
      setRotation(prevRot => prevRot + v);

      // frame-rate independent decay
      const decay = Math.pow(frictionPer16ms, dt / 16);
      v *= decay;

      if (Math.abs(v) > minVelocityForInertia) {
        inertiaFrame.current = requestAnimationFrame(step);
      } else {
        isInertia.current = false;
        inertiaFrame.current = null;
        snapToNearestFace();
      }
    };

    inertiaFrame.current = requestAnimationFrame(step);
  };

  // Compute the angle to the nearest face and animate snap via CSS transition
  const snapToNearestFace = () => {
    // Normalize current angle
    const current = rotationRef.current;
    let mod = current % 360;
    if (mod < 0) mod += 360;

    // Target faces at 0 or 180 degrees
    const to0 = mod;           // distance to 0 (mod space)
    const to180 = Math.abs(mod - 180);

    // Choose nearest face in absolute space with minimal movement
    const targetMod = to0 <= to180 ? 0 : 180;

    // Convert back to absolute angle near current:
    // pick the equivalent target angle closest to `current`
    const base = Math.round(current / 360) * 360;
    const candidates = [base + targetMod, base - 360 + targetMod, base + 360 + targetMod];
    let target = candidates[0];
    let bestDist = Math.abs(target - current);
    for (let i = 1; i < candidates.length; i++) {
      const d = Math.abs(candidates[i] - current);
      if (d < bestDist) {
        bestDist = d;
        target = candidates[i];
      }
    }

    // Use a one-off CSS transition to snap
    // We momentarily enable transition by letting dragging=false and isInertia=false
    // and then setting rotation to the target.
    // To ensure we don't immediately apply another change, clear any pending timeouts.
    if (snapTimeout.current) window.clearTimeout(snapTimeout.current);

    // Set target; allow CSS transition to handle easing
    setRotation(target);

    // Optionally, after the snap, clear any lingering timers (no state needed here)
    snapTimeout.current = window.setTimeout(() => {
      snapTimeout.current = null;
    }, snapDurationMs + 50);
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (inertiaFrame.current) cancelAnimationFrame(inertiaFrame.current);
      if (snapTimeout.current) window.clearTimeout(snapTimeout.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={coinStyle}
      onMouseDown={handleMouseDown}
      onDragStart={e => e.preventDefault()}
    >
      <div
        style={{
          width: size,
          height: size,
          position: "relative",
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotation}deg)`,
          // No transitions while dragging or during inertia. Otherwise allow a short snap ease.
          transition:
            dragging.current || isInertia.current
              ? "none"
              : `transform ${snapDurationMs}ms cubic-bezier(0.4,0,0.2,1)`,
          cursor: "grab",
          WebkitUserSelect: "none",
          userSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          willChange: "transform",
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            background: "white",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: "cover" }}
            draggable={false}
            onDragStart={e => e.preventDefault()}
          />
        </div>

        {/* Back */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            background: "white",
            transform: "rotateY(180deg)",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: "cover" }}
            draggable={false}
            onDragStart={e => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
};

export default SpinnableCoin;
