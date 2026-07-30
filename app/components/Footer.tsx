import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

const SOCIALS = [
  { icon: FaLinkedin, handle: "shanezchen", href: "https://www.linkedin.com/in/shanezchen" },
  { icon: FaGithub, handle: "mars-flat", href: "https://www.github.com/mars-flat" },
  { icon: FaXTwitter, handle: "shanechenz", href: "https://www.x.com/shanechenz" },
  { icon: FaInstagram, handle: "chaneshen", href: "https://www.instagram.com/chaneshen" },
];

/** Footer styled as the last stop on the line. */
export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-4 pb-14 pt-6 sm:px-6">
      <div className="rounded-2xl bg-[color:var(--color-mta-black)] p-7 text-white shadow-xl sm:p-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-neutral-300">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ background: "var(--color-line-red)" }}
            aria-hidden="true"
          />
          Last stop
        </span>

        <div className="mt-6 grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">Contact</h2>
            <p className="mt-4 max-w-md text-lg text-neutral-300">
              Connect with me using the links on the right, or email me at{" "}
              <a
                href="mailto:zshanechen@gmail.com"
                className="font-medium underline decoration-2 underline-offset-4"
                style={{ textDecorationColor: "var(--color-line-green)" }}
              >
                zshanechen@gmail.com
              </a>
              .
            </p>
            <p className="mt-3 max-w-md text-sm text-neutral-500">
              The &apos;z&apos; stands for Zhiyuan, my Chinese name, and saves me from the tragic
              fate of using numbers.
            </p>
          </div>

          <ul className="flex flex-col gap-2 sm:items-end">
            {SOCIALS.map(({ icon: Icon, handle, href }) => (
              <li key={handle}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <span className="text-sm">{handle}</span>
                  <Icon className="text-2xl" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-5 text-center text-sm text-neutral-500">
          Copyright © 2026 Shane Chen
        </div>
      </div>
    </footer>
  );
}
