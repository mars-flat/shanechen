import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  imageUrl,
  imageHeight,
  imageWidth,
  link,
  title,
  subtitle,
  desc,
  children
}: {
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
    <div className="shrink-0 w-[50vh] h-full relative flex justify-center items-center group">

      <div className="h-[200px] absolute top-0 left-0 bg-lime-50 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none drop-shadow-xl">
      </div>

      <div className="bg-purple-100 w-[95%] h-[97%] drop-shadow-xl flex flex-col items-center text-gray-800">
        <div className="w-[70%] overflow-hidden flex items-start py-[10%]">
          <Image src={imageUrl} alt={title} height={imageHeight} width={imageWidth} className="rounded-lg"/>
        </div>
        <Link href={link} target="_blank" className="w-[90%] text-3xl font-bold mb-[2%] hover:text-gray-500 transition-color duration-300">{title}</Link>
        <p className="w-[90%] text-lg italic text-gray-500">{subtitle}</p>
        <div className="w-[70%] h-[0.1%] bg-gray-400 my-[3%]"></div>
        <p className="w-[90%] text-md">{desc}</p>
        <div className="w-[70%] h-[0.1%] bg-gray-400 my-[3%]"></div>
        <div className="w-[90%] h-[10%] flex justify-evenly items-center">
          {children}
        </div>
      </div>
    </div>
  );
}