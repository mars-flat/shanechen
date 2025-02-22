import Link from "next/link";
import Copyright from "./copyright";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="h-[50vh] bg-black p-[2%] flex flex-col items-center">
      <div className="w-full h-[80%] text-white p-[1%] flex justify-center">
        <div className="h-[80%] w-[35%] max-sm:w-[50%] p-4">
          <h1 className="font-bold text-4xl mb-[5%]">Contact</h1>
          <p className="max-sm:w-full text-xl mb-[10%]">Connect with me using the social links on the right or email
            me at <a href="mailto:zshanechen@gmail.com" className="text-green-600">zshanechen@gmail.com</a>.</p>
          <p className="text-sm max-md:hidden">The 'z' stands for Zhiyuan, my Chinese name, and saves me from the tragic fate of using numbers.</p>
        </div>

        <div className="h-[60%] w-[35%] p-4 flex text-xl flex-col justify-between items-end">
          <div className="w-[40%] max-xl:w-[55%]">
            <a href="https://www.linkedin.com/in/shanezchen" target="_blank"
            className="flex justify-end items-center">
              <span className="mr-[2%] max-lg:hidden">shanezchen</span><FaLinkedin className="text-white text-3xl" />
            </a>
          </div>

          <div className="w-[40%] max-xl:w-[55%]">
            <a href="https://www.github.com/mars-flat" target="_blank"
            className="flex justify-end items-center">
              <span className="mr-[2%] max-lg:hidden">mars-flat</span><FaGithub className="text-white text-3xl" />
            </a>
          </div>

          <div className="w-[40%] max-xl:w-[55%]">
            <a href="https://www.instagram.com/chaneshen" target="_blank"
            className="flex justify-end items-center">
              <span className="mr-[2%] max-lg:hidden">chaneshen</span><FaInstagram className="text-white text-3xl" />
            </a>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
}