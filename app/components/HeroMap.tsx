"use client";

import { useState } from "react";

type LineId = "intro" | "roles" | "projects";

interface StationDef {
  x: number;
  y: number;
  label: string;
  labelX?: number;
  labelY: number;
  anchor?: "start" | "middle" | "end";
}

interface RouteDef {
  id: LineId;
  n: string;
  name: string;
  color: string;
  href: string;
  /** route geometry — 45°/90° angles only, like a real transit map */
  d: string;
  /** draw-in animation delay (s) */
  delay: number;
  bullet: { x: number; y: number };
  /** true when the bullet sits at the far end of the line */
  bulletAtEnd?: boolean;
  stations: StationDef[];
}

const ROUTES: RouteDef[] = [
  {
    id: "intro",
    n: "1",
    name: "Intro",
    color: "var(--color-line-red)",
    href: "#here",
    d: "M 72 72 H 384 L 456 144 H 888",
    delay: 0.15,
    bullet: { x: 40, y: 72 },
    stations: [
      { x: 72, y: 72, label: "Hello — I’m Shane!", labelY: 48 },
      { x: 216, y: 72, label: "CS @ UWaterloo", labelY: 100 },
      { x: 384, y: 72, label: "Full-stack developer", labelY: 48 },
      { x: 624, y: 144, label: "Distributed systems & AI", labelY: 122 },
      { x: 888, y: 144, label: "Open for Summer 2027", labelX: 896, labelY: 172, anchor: "end" },
    ],
  },
  {
    id: "roles",
    n: "2",
    name: "Roles",
    color: "var(--color-line-green)",
    href: "#roles",
    d: "M 120 432 V 264 L 240 144 H 456 L 528 216 H 888",
    delay: 0.5,
    bullet: { x: 120, y: 470 },
    stations: [
      { x: 120, y: 432, label: "Metropolis · Mobile Lead", labelX: 142, labelY: 437, anchor: "start" },
      { x: 180, y: 204, label: "Solace · AI Dev Intern", labelX: 200, labelY: 209, anchor: "start" },
      { x: 888, y: 216, label: "Your team next?", labelX: 896, labelY: 196, anchor: "end" },
    ],
  },
  {
    id: "projects",
    n: "3",
    name: "Projects",
    color: "var(--color-line-blue)",
    href: "#projects",
    d: "M 120 360 H 264 L 336 288 H 600 L 672 360 H 888",
    delay: 0.85,
    bullet: { x: 928, y: 360 },
    bulletAtEnd: true,
    stations: [
      { x: 216, y: 360, label: "WATonomous Rover", labelY: 390 },
      { x: 408, y: 288, label: "Convergence", labelY: 266 },
      { x: 504, y: 288, label: "Re-Prompt That", labelY: 318 },
      { x: 600, y: 288, label: "ICar", labelY: 266 },
      { x: 744, y: 360, label: "MatchMadeIn.Tech", labelY: 390 },
      { x: 888, y: 360, label: "Faceoff Fantasy", labelX: 896, labelY: 338, anchor: "end" },
    ],
  },
];

/** stations shared by two lines — drawn MTA-style with a dark ring, never dimmed */
const TRANSFERS = [
  {
    x: 456,
    y: 144,
    label: "Shopify · SWE Intern",
    labelX: 444,
    labelY: 174,
    anchor: "end" as const,
  },
  {
    x: 120,
    y: 360,
    label: "Poket · SWE Intern",
    labelX: 104,
    labelY: 364,
    anchor: "end" as const,
  },
];

/**
 * The hero system map: three interconnected routes. Hovering a line brightens
 * it and dims the rest; clicking rides you to its section.
 */
export default function HeroMap() {
  const [active, setActive] = useState<LineId | null>(null);

  return (
    <div className="mb-10">
      {/* caption + interactive legend */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
          System map · hover a line, tap to ride
        </p>
        <div className="flex items-center gap-2">
          {ROUTES.map((r) => (
            <a
              key={r.id}
              href={r.href}
              onMouseEnter={() => setActive(r.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(r.id)}
              onBlur={() => setActive(null)}
              className={`flex items-center gap-1.5 rounded-full border border-[color:var(--color-paper-line)] bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                active && active !== r.id ? "opacity-40" : ""
              }`}
            >
              <span
                className="route-bullet"
                style={{ ["--bullet" as string]: r.color, width: 20, height: 20, fontSize: 11 }}
                aria-hidden="true"
              >
                {r.n}
              </span>
              {r.name}
            </a>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox="-28 0 988 500"
          className="h-auto w-full min-w-[760px]"
          aria-label="Transit map of Shane’s intro, roles, and projects — click a line to jump to its section"
        >
          {ROUTES.map((r) => (
            <a
              key={r.id}
              href={r.href}
              aria-label={`${r.name} line — jump to section`}
              className={`hm-line ${active === r.id ? "is-hot" : ""} ${
                active && active !== r.id ? "is-dim" : ""
              }`}
              style={{ ["--hm-c" as string]: r.color }}
              onMouseEnter={() => setActive(r.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(r.id)}
              onBlur={() => setActive(null)}
            >
              {/* wide invisible hit area so the thin route is easy to hover */}
              <path d={r.d} className="hm-hit" />
              <path
                d={r.d}
                pathLength={1}
                className="hm-path"
                stroke={r.color}
                style={{ ["--d" as string]: `${r.delay}s` }}
              />
              {/* little train that rides the active line */}
              <circle
                className="hm-train"
                r={6}
                fill="#fff"
                stroke={r.color}
                strokeWidth={3.5}
                style={{ ["offsetPath" as string]: `path("${r.d}")` }}
              />

              {/* numbered route bullet at the line's free end */}
              <g
                className="hm-node"
                style={{ ["--d" as string]: `${r.delay + (r.bulletAtEnd ? 1.1 : 0)}s` }}
              >
                <circle cx={r.bullet.x} cy={r.bullet.y} r={14} fill={r.color} />
                <text
                  x={r.bullet.x}
                  y={r.bullet.y}
                  dy="0.35em"
                  textAnchor="middle"
                  fontSize={15}
                  fontWeight={700}
                  fill="#fff"
                >
                  {r.n}
                </text>
              </g>

              {r.stations.map((s, i) => (
                <g
                  key={s.label}
                  className="hm-node"
                  style={{ ["--d" as string]: `${r.delay + 0.3 + i * 0.12}s` }}
                >
                  <circle cx={s.x} cy={s.y} r={7} fill="#fff" stroke={r.color} strokeWidth={4} />
                  <text
                    className="hm-label"
                    x={s.labelX ?? s.x}
                    y={s.labelY}
                    textAnchor={s.anchor ?? "middle"}
                  >
                    {s.label}
                  </text>
                </g>
              ))}
            </a>
          ))}

          {/* transfer stations — shared by two lines, always lit */}
          {TRANSFERS.map((t) => (
            <g key={t.label} className="hm-node hm-xfer" style={{ ["--d" as string]: "1.55s" }}>
              <circle
                cx={t.x}
                cy={t.y}
                r={9.5}
                fill="#fff"
                stroke="var(--color-mta-ink)"
                strokeWidth={4.5}
              />
              <text
                className="hm-label hm-label--xfer"
                x={t.labelX}
                y={t.labelY}
                textAnchor={t.anchor}
              >
                {t.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <p className="mt-1 text-right text-[0.65rem] font-medium uppercase tracking-widest text-neutral-400">
        3 lines · 16 stops · 2 transfers
      </p>
    </div>
  );
}
