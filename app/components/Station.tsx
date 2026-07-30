import Image from "next/image";
import type { TransitLineMeta } from "../lib/mta";

export interface StationProps {
  line: TransitLineMeta;
  /** station name — the role/project title */
  title: string;
  /** second line — the company or project description */
  subtitle: string;
  /** the timeline, shown as the stop's schedule */
  meta?: string;
  link: string;
  image: string;
  /** skills shown as transfer indicators */
  transfers?: string[];
  /** opt-in: mark the stop as ongoing ("NOW") with a pulsing marker */
  live?: boolean;
}

/** One stop on a transit line. */
export default function Station({
  line,
  title,
  subtitle,
  meta,
  link,
  image,
  transfers,
  live = false,
}: StationProps) {

  return (
    <li className="station" style={{ ["--line" as string]: line.color }}>
      <div className="station__rail" aria-hidden="true">
        <span className={`station__marker${live ? " station__marker--live" : ""}`} />
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="station-card group"
        style={{ ["--line" as string]: line.color }}
      >
        <Image
          src={"/" + image}
          alt={`${title} logo`}
          width={52}
          height={52}
          className="flex-none rounded-lg object-cover"
          style={{ width: 52, height: 52 }}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <h3 className="text-base font-bold leading-tight tracking-tight text-[color:var(--color-mta-ink)]">
              {title}
            </h3>
            {live && (
              <span className="text-[0.6rem] font-bold uppercase tracking-wider text-[color:var(--line)]">
                Now
              </span>
            )}
          </div>
          <p className="mt-0.5 text-sm text-neutral-600">{subtitle}</p>
          {meta && (
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-neutral-400">
              {meta}
            </p>
          )}
          {transfers && transfers.length > 0 && (
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {transfers.map((t) => (
                <li key={t} className="transfer-chip">
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>
      </a>
    </li>
  );
}
