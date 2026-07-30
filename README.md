# Personal Website — Shane Chen

A personal portfolio built as a **NYC-subway transit map**: roles and projects
are the stops along the *Career* and *Build* lines. Typeset in Helvetica (the
MTA standard) with the official NYC subway route colors.

Built with TypeScript, Next.js (App Router), React, and Tailwind CSS v4.

## Run locally

```bash
npm install     # first time only
npm run dev     # start the dev server → http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

- `app/page.tsx` — the map: hero, the two transit lines, contact.
- `app/components/` — `Header`, `Hero`, `TransitLine`, `Station`, `Footer`,
  `RouteBullet`, and a small `Reveal` scroll-in wrapper.
- `app/lib/mta.ts` — line definitions (colors, bullets).
- `app/data/` — `roles.json` and `projects.json` (the stops).
- `app/globals.css` — the transit design system.
