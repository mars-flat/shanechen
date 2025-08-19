'use client'

import { useState } from "react";
import Link from "next/link";
import { NextFont } from "next/dist/compiled/@next/font";
import { theme } from '../theme';

export default function Header({ font } : { font: NextFont }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);
  };

  return (
    <div className="h-[10vh] md:sticky top-0 z-100">
      <div className={theme.tw.bgBlack + " h-full text-lg " + theme.tw.textWhite + " " + font.className + " p-[1%] flex justify-center"}>
        <div className="w-[85%] h-full flex justify-between items-center">
          <Link href="/" className={theme.tw.textWhite + " text-xl hover:text-2xl transition-text duration-200"}>Shane Chen</Link>

          <div className="max-md:block hidden">
            <button onClick={toggleMenu} className={theme.tw.textWhite + " text-2xl"}>
              ☰
            </button>
          </div>

          <div className="max-md:hidden md:w-[40%] lg:w-[30%] xl:w-[25%]">
            <ul className="flex justify-between flex-wrap items-center">
              <li><Link href="#projects" className={theme.tw.textWhite + " hover:text-xl transition-text duration-200"}>Portfolio</Link></li>
              <li><Link href="/shane_chen_resume_public.pdf" className={theme.tw.textWhite + " hover:text-xl transition-text duration-200"} target="_blank">Résumé</Link></li>
              <li><Link href="#contact" className={theme.tw.textWhite + " hover:text-xl transition-text duration-200"}>Contact</Link></li>
            </ul>
          </div>

          {isMenuOpen &&
            <div className={theme.tw.bgBlack + " max-md:block md:hidden absolute top-[10vh] left-0 w-full " + theme.tw.textWhite}>
              <ul className="h-[15vh] w-[90%] flex flex-col items-end">
                <li><Link href="#projects" className="!text-white hover:text-xl mb-2">Portfolio</Link></li>
                <li><Link href="/shane_chen_resume_public.pdf" className="!text-white hover:text-xl mb-2" target="_blank">Résumé</Link></li>
                <li><Link href="#contact" className="!text-white hover:text-xl">Contact</Link></li>
              </ul>
            </div>
          }

        </div>
      </div>
    </div>
  );
}
