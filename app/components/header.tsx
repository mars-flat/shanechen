'use client'

import { useState } from "react";
import Link from "next/link";
import { NextFont } from "next/dist/compiled/@next/font";

export default function Header({ font } : { font: NextFont }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);
  };

  return (
    <div className="h-[10vh] md:sticky top-0 z-100">
      <div className={`h-full bg-black text-lg text-white ${font.className} p-[1%] flex justify-center`}>
        <div className="w-[85%] h-full flex justify-between items-center">
          <Link href="/">Shane Chen</Link>

          <div className="max-md:block hidden">
            <button onClick={toggleMenu} className="text-white text-2xl">
              ☰
            </button>
          </div>

          <div className="max-md:hidden md:w-[40%] lg:w-[30%] xl:w-[25%]">
            <ul className="flex justify-between flex-wrap items-center">
              <li><Link href="#projects" className="hover:text-xl">Projects</Link></li>
              <li><Link href="/resume.pdf" className="hover:text-xl" target="_blank">Résumé</Link></li>
              <li><Link href="#contact" className="hover:text-xl">Contact</Link></li>
            </ul>
          </div>

          {isMenuOpen &&
            <div className={`max-md:block md:hidden absolute top-[10vh] left-0 w-full bg-linear-to-b/longer from-black to-lime-100 text-white`}>
              <ul className="h-[15vh] w-[90%] flex flex-col items-end">
                <li><Link href="#projects" className="hover:text-xl mb-2">Projects</Link></li>
                <li><Link href="/resume.pdf" className="hover:text-xl mb-2" target="_blank">Résumé</Link></li>
                <li><Link href="#contact" className="hover:text-xl">Contact</Link></li>
              </ul>
            </div>
          }

        </div>
      </div>
    </div>
  );
}
