import Image from "next/image";
import Link from "next/link";

import { Roboto } from "next/font/google";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});


export default function ProjectCard({
  id,
  imageUrl,
  imageHeight,
  imageWidth,
  link,
  title,
  subtitle,
  desc,
  children
}: {
  id: number,
  imageUrl: string;
  imageHeight: number;
  imageWidth: number;
  link: string;
  title: string;
  subtitle: string;
  desc: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`shrink-0 w-[50vh] h-full relative flex justify-center items-center group snap-center snap-always ${roboto.className}`}>

      <div className="absolute top-0 left-0 bg-purple-100 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none drop-shadow-xl">
      </div>

      <div className="bg-purple-100 w-[95%] h-[97%] drop-shadow-sm text-gray-800 flex flex-col justify-between">

        <div className="w-full h-[90%] flex flex-col items-center">
          <div className="w-[60%] max-h-[40%] overflow-hidden flex items-start pt-[8%] mb-[3%]">
            <Image src={imageUrl} alt={title} height={imageHeight} width={imageWidth} className="rounded-lg"/>
          </div>
          <Link href={link} target="_blank" 
          className={`w-[80%] text-3xl font-bold break-words flex justify-start items-center hover:text-gray-600 transition-color duration-300 ${roboto.className}`}>
            {`${title}`}&nbsp;<FaLink className="text-xs text-gray-400 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
          <p className={`w-[80%] text-lg italic text-gray-500 ${roboto.className}`}>{subtitle}</p>
          <div className="w-[70%] h-[0.2%] bg-gray-400 group-hover:bg-black transition-color duration-500 my-[3%]"></div>
          <p className={`w-[80%] text-md ${roboto.className}`}>{desc}</p>
          <div className="w-[70%] h-[0.2%] bg-gray-400 group-hover:bg-black transition-color duration-500 my-[3%]"></div>
          <div className="w-[90%] h-[10%] flex justify-evenly items-center">
            {children}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[20%] flex justify-between items-center py-[6%] sm:opacity-0">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={`${i === (id-1) ? "h-4 w-4 bg-black" : "h-3 w-3 bg-gray-500"} rounded-full`}></div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}