import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import { FaChevronDown } from "react-icons/fa";
import { ScrollOpacityChange } from "./components/scrollResponsives";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="h-[70vh] bg-gray-200 font-inter flex justify-center items-center">
        <div className="w-[45%] h-[50%]">
          <p className="text-xl mb-[1%]">Nice to meet you! I'm</p>
          <p className="text-6xl font-bold mb-[2%]">Shane Chen.</p>
          <p className="text-lg">I'm a <strong>computer science</strong> student at the <em>University of Waterloo</em>, class of 2029.</p>
          <p className="text-lg mb-[2%]">You may be interested in my resume or my projects.</p>
          <p className="text-lg">I'm currently looking for <strong>summer 2025</strong> internships. Let's have a chat!</p>
        </div>
        <div className="w-[20%]">
          <Image
            src="/me.jpg"
            alt="insert nice picture of me"
            width={1170}
            height={1189}
            style={{ borderRadius: '50%' }}
          />
        </div>
      </div>
      <div className="h-[80vh] bg-gradient-to-b from-gray-200 to-lime-100 flex justify-center">
        
        <ScrollOpacityChange changeFunction={scroll} initialOpacity={0.75}>
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-bold">Scroll to see Project Overview</span>
            <FaChevronDown className="text-5xl" />
          </div>
        </ScrollOpacityChange>

      </div>
      <div className="h-[100vh] bg-lime-100"></div>
      <Footer />
    </div>
  );
}

// should return a number between 0 and 1
async function scroll(scrollY : number) {
  'use server'
  return 0.75-(scrollY/400);
}
