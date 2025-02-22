import Link from "next/link";

export default function Header() {
  return (
    <div className="h-[10vh] sticky top-0">
      <div className="h-full bg-green-800 font-mono text-lg text-white font-bold p-[1%] flex justify-center">
        <div className="w-[90%] h-full flex justify-between items-center">
          <Link href="/">Shane Chen</Link>
          <div className="w-[30%]">
            <ul className="flex justify-between">
              <li><Link href="/about">Projects</Link></li>
              <li><Link href="/services">Contact</Link></li>
              <li><Link href="/contact">Photos</Link></li>
              <li><Link href="/resume">Resume</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
