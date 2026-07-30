import type { TransitLineMeta } from "../lib/mta";

/** The classic circular MTA route marker: a colored disc with a letter. */
export default function RouteBullet({
  line,
  size = 28,
}: {
  line: TransitLineMeta;
  size?: number;
}) {
  return (
    <span
      className="route-bullet"
      data-ink={line.ink === "dark" ? "dark" : "light"}
      style={{
        // @ts-expect-error -- CSS custom property
        "--bullet": line.color,
        width: size,
        height: size,
        fontSize: size * 0.56,
      }}
      aria-hidden="true"
    >
      {line.bullet}
    </span>
  );
}
