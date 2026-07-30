import type { TransitLineMeta } from "../lib/mta";
import RouteBullet from "./RouteBullet";

/**
 * A labelled subway line: a route-bullet header above a vertical rail of stops.
 * Pass <Station /> elements as children.
 */
export default function TransitLine({
  line,
  label,
  count,
  id,
  children,
}: {
  line: TransitLineMeta;
  label: string;
  count: number;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="flex-1 scroll-mt-24" aria-label={`${label} line`}>
      <header className="mb-6 flex items-center gap-3">
        <RouteBullet line={line} size={40} />
        <div>
          <h2 className="text-xl font-bold leading-none tracking-tight">{label}</h2>
          <p className="mt-1 text-xs font-medium uppercase tracking-widest text-neutral-500">
            {line.name} · {count} stop{count === 1 ? "" : "s"}
          </p>
        </div>
      </header>
      <ol className="transit-line" style={{ ["--line" as string]: line.color }}>
        {children}
      </ol>
    </section>
  );
}
