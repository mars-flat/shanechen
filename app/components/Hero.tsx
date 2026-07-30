import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { LINES } from "../lib/mta";
import RouteBullet from "./RouteBullet";
import HeroMap from "./HeroMap";

/** Hero: the interactive system map, then an MTA platform station sign. */
export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pt-12">
      <HeroMap />

      <div
        id="here"
        className="scroll-mt-24 overflow-hidden rounded-2xl bg-[color:var(--color-mta-black)] text-white shadow-xl"
      >
        {/* colored service band, like the top of a platform sign */}
        <div className="flex h-2">
          <div className="flex-1" style={{ background: "var(--color-line-red)" }} />
          <div className="flex-1" style={{ background: "var(--color-line-green)" }} />
          <div className="flex-1" style={{ background: "var(--color-line-blue)" }} />
        </div>

        <div className="grid items-center gap-8 p-7 sm:p-10 md:grid-cols-[1fr_auto]">
          <div>
            <RouteBullet line={LINES.intro} size={36} />

            <p className="mt-5 text-lg text-neutral-400">Hello! I&apos;m</p>
            <h1 className="text-5xl font-bold leading-none tracking-tight sm:text-6xl">
              Shane Chen
            </h1>

            <p className="mt-5 max-w-xl text-lg text-neutral-200">
              I&apos;m a <strong className="font-bold text-white">computer science</strong>{" "}
              student at the{" "}
              <Link
                href="https://uwaterloo.ca"
                target="_blank"
                className="underline decoration-2 underline-offset-4"
                style={{ textDecorationColor: "var(--color-line-green)" }}
              >
                University of Waterloo
              </Link>
              .
            </p>
            <p className="mt-3 max-w-xl text-lg text-neutral-200">
              I&apos;m interested in full-stack development, distributed systems, and AI
              applications. Ride the map below to see where I&apos;ve been.
            </p>
            <p className="mt-3 max-w-xl text-lg text-neutral-200">
              I&apos;m looking for <strong className="font-bold text-white">Summer 2027</strong>{" "}
              internships. Happy to chat!
            </p>

            {/* line legend */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <span className="flex items-center gap-2 text-neutral-300">
                <RouteBullet line={LINES.career} size={26} /> Roles
              </span>
              <span className="flex items-center gap-2 text-neutral-300">
                <RouteBullet line={LINES.build} size={26} /> Projects
              </span>
            </div>

            <a
              href="#map"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[color:var(--color-mta-black)] transition-transform hover:scale-105"
            >
              View the map <FiChevronDown aria-hidden="true" />
            </a>
          </div>

          {/* photo framed as a circular station token */}
          <div className="mx-auto hidden md:block">
            <div className="rounded-full border-[6px] border-white/90 p-1 shadow-lg">
              <Image
                src="/me.jpg"
                alt="Shane Chen"
                width={190}
                height={190}
                priority
                className="h-[190px] w-[190px] rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
