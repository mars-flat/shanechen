'use client'

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);
  };

  return (
    <div className="h-[10vh] md:sticky top-0">
      <div className="h-full bg-black text-lg text-white font-bold p-[1%] flex justify-center">
        <div className="w-[85%] h-full flex justify-between items-center">
          <Link href="/">Shane Chen</Link>

          <div className="max-md:block hidden">
            <button onClick={toggleMenu} className="text-white text-2xl">
              ☰
            </button>
          </div>

          <div className="max-md:hidden md:w-[40%] lg:w-[30%] xl:w-[20%]">
            <ul className="flex justify-between flex-wrap">
              <li><Link href="/about" className="hover:text-xl">Projects</Link></li>
              <li><Link href="/resume-website.pdf" className="hover:text-xl" target="_blank">Résumé</Link></li>
              <li><Link href="#footer" className="hover:text-xl">Contact</Link></li>
            </ul>
          </div>

          {isMenuOpen &&
            <div className={`max-md:block md:hidden absolute top-[10vh] left-0 w-full bg-linear-to-b/longer from-black to-lime-100 text-white`}>
              <ul className="h-[15vh] w-[90%] flex flex-col items-end">
                <li><Link href="/about" className="hover:text-xl mb-2">Projects</Link></li>
                <li><Link href="/resume-website.pdf" className="hover:text-xl mb-2" target="_blank">Résumé</Link></li>
                <li><Link href="#footer" className="hover:text-xl">Contact</Link></li>
              </ul>
            </div>
          }

        </div>
      </div>
    </div>
  );
}
