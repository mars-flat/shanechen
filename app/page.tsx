'use client'

import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import { FaChevronDown } from "react-icons/fa";
import { ScrollOpacityChange } from "./components/scrollResponsives";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="h-[70vh] bg-lime-100 font-inter text-black flex justify-center items-center">
        <div className="w-[45%] h-[50%]">
          <p className="text-xl mb-[1%]">Nice to meet you! I&apos;m</p>
          <p className="text-6xl font-bold mb-[2%]">Shane Chen.</p>
          <p className="text-lg">I&apos;m a <strong>computer science</strong> student at the <em>University of Waterloo</em>, class of 2029.</p>
          <p className="max-sm:hidden text-lg mb-[2%]">You may be interested in my resume or my projects.</p>
          <p className="max-sm:hidden text-lg">I&apos;m currently looking for <strong>summer 2025</strong> internships. Let&apos;s have a chat!</p>
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
      <div className="h-[30vh] bg-linear-to-b/oklab from-lime-100 to-purple-100 flex justify-center">
        
        <ScrollOpacityChange changeFunction={scroll} initialOpacity={0.75}>
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-black">Scroll to see Project Overview</span>
            <FaChevronDown className="text-5xl text-black" />
          </div>
        </ScrollOpacityChange>

      </div>
      <div className="h-[100vh] bg-purple-100 flex flex-col justify-between items-center">
        <div className="h-[15%] flex items-center">
          <p className="text-5xl font-bold">Projects (coming soon)</p>
        </div>
        {/* 
        <div className="w-[65%] h-[15%] border-2">
          <p className="text-lg">I've had the pleasure of working at Project Metropolis, where I developed a mobile app for students to track announcements and events.</p>
          <p className="text-lg">I've also explored data science, backend and database dev, and cybersecurity.</p>
          <p className="text-lg">Check it out!</p>
        </div>
        <div className="w-[90%] h-[70%] border-2 flex">

        </div>
        <div className="h-[10%]">More projects can be found on the projects page or on my GitHub!</div>
        */}
      </div>
      <div id="footer"><Footer /></div>
    </div>
  );
}

// should return a number between 0 and 1
function scroll(scrollY : number) {
  return Math.max(0, 0.75-(scrollY/400));
}
