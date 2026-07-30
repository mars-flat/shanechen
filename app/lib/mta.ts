/**
 * The Shane Chen Transit System.
 *
 * Each section of the site is modelled as a subway line; roles and projects
 * are the stops along it. Colors are the official NYC subway route colors.
 */

export interface TransitLineMeta {
  /** single-character route bullet, e.g. "C" */
  bullet: string;
  /** human-readable line name */
  name: string;
  /** CSS color for the route */
  color: string;
  /** "dark" when the bullet needs black text (e.g. the yellow line) */
  ink?: "light" | "dark";
}

export const LINES = {
  intro: {
    bullet: "1",
    name: "Intro Line",
    color: "var(--color-line-red)",
    ink: "light",
  },
  career: {
    bullet: "2",
    name: "Career Line",
    color: "var(--color-line-green)",
    ink: "light",
  },
  build: {
    bullet: "3",
    name: "Build Line",
    color: "var(--color-line-blue)",
    ink: "light",
  },
} as const satisfies Record<string, TransitLineMeta>;
