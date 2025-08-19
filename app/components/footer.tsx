import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { NextFont } from "next/dist/compiled/@next/font";
import { theme } from '../theme';

export default function Footer({ font } : { font: NextFont }) {
  return (
    <div className={theme.tw.bgBlack + " h-[60vh] p-[2%] flex flex-col items-center"}>
      <div className={theme.tw.textNeutral200 + " w-full h-[80%] p-[1%] flex justify-center"}>
        <div className="h-[80%] w-[35%] max-sm:w-[50%] p-4">
          <h1 className={`font-bold text-4xl mb-[5%] ${font.className}`}>Contact</h1>
          <p className="max-sm:w-full text-xl mb-[10%]">Connect with me using the social links on the right or email
            me at <a href="mailto:zshanechen@gmail.com" className={theme.tw.textGreen600}>zshanechen@gmail.com</a>.</p>
          <p className="text-sm max-md:hidden">The &apos;z&apos; stands for Zhiyuan, my Chinese name, and saves me from the tragic fate of using numbers.</p>
        </div>
        <div className={`h-[60%] w-[35%] p-4 flex text-xl flex-col justify-between items-end ${font.className}`}>
          <div className="w-[40%] max-xl:w-[55%]">
            <a href="https://www.linkedin.com/in/shanezchen" target="_blank" className="flex justify-end items-center">
              <span className="mr-[2%] max-lg:hidden">shanezchen</span><FaLinkedin className={theme.tw.textWhite + " text-3xl"} />
            </a>
          </div>
          <div className="w-[40%] max-xl:w-[55%]">
            <a href="https://www.github.com/mars-flat" target="_blank" className="flex justify-end items-center">
              <span className="mr-[2%] max-lg:hidden">mars-flat</span><FaGithub className={theme.tw.textWhite + " text-3xl"} />
            </a>
          </div>
          <div className="w-[40%] max-xl:w-[55%]">
            <a href="https://www.x.com/shanechenz" target="_blank" className="flex justify-end items-center">
              <span className="mr-[2%] max-lg:hidden">shanechenz</span><FaXTwitter className={theme.tw.textWhite + " text-3xl"} />
            </a>
          </div>
          <div className="w-[40%] max-xl:w-[55%]">
            <a href="https://www.instagram.com/chaneshen" target="_blank" className="flex justify-end items-center">
              <span className="mr-[2%] max-lg:hidden">chaneshen</span><FaInstagram className={theme.tw.textWhite + " text-3xl"} />
            </a>
          </div>
        </div>
      </div>
      <div className={theme.tw.textNeutral500 + ` w-full text-center ${font.className}`}>
        Copyright © 2025 Shane Chen
      </div>
    </div>
  );
}