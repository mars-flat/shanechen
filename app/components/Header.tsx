"use client";

import { useState } from "react";
import Link from "next/link";

const NAV = [
  { href: "#map", label: "Experiences" },
  { href: "/shane_chen_resume_public.pdf", label: "Résumé", external: true },
  { href: "#contact", label: "Contact" },
];

/** MTA-signage top bar: black panel, white Helvetica, station-name wordmark. */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[color:var(--color-mta-black)] text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-bold uppercase tracking-wide"
          onClick={() => setOpen(false)}
        >
          <span
            className="route-bullet"
            style={{
              ["--bullet" as string]: "#fff",
              color: "var(--color-mta-black)",
              width: 28,
              height: 28,
              fontSize: 15,
            }}
            aria-hidden="true"
          >
            S
          </span>
          Shane Chen
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-7 text-sm font-medium uppercase tracking-wide">
            {NAV.map((item) => (
              <li key={item.label}>
                {/* plain anchors: next/link is unreliable for hash-only hrefs */}
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-neutral-300 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="text-2xl leading-none md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-neutral-800 md:hidden"
          aria-label="Primary"
        >
          <ul className="flex flex-col px-4 py-2 text-sm font-medium uppercase tracking-wide">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-neutral-300 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
