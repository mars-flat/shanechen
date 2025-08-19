'use client'

import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

import RoleCard from "./components/roleCard";
import ProjectCard from "./components/projectCard";

import { Montserrat } from "next/font/google";
import Link from "next/link";

import { FiChevronDown } from "react-icons/fi";

import rolesData from "./data/roles.json";
import projectsData from "./data/projects.json";

import { Parallax } from 'react-scroll-parallax';
import FadeInParallax from "./components/FadeInParallax";
import SpinnableCoin from "./components/SpinnableCoin";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function HomePage() {
  return (
    <div className={`flex flex-col`}>
      <Header font={montserrat}/>
      <div className={`h-[70vh] bg-lime-100/95 text-black flex justify-center items-center`}>
        <div className="w-[50%] h-[50%]">
          <p className="text-xl mb-[1%]">Hello! I&apos;m</p>
          <p className={`text-6xl font-bold mb-[2%]`}>Shane Chen.</p>
          <p className="text-lg">I&apos;m a <strong>computer science</strong> student at the 
          <Link href="https://uwaterloo.ca" target="_blank" className="text-purple-800"> University of Waterloo</Link>, 
          class of 2029.</p>
          <p className="max-sm:hidden text-lg mb-[2%]">
            You may be interested in my 
            <Link href="/resume.pdf" target="_blank" className="text-purple-800"> resume </Link>
            or my 
            <Link href="#projects" className="text-purple-800"> projects</Link>
            .</p>
          <p className="max-sm:hidden text-lg">I&apos;m currently open to <strong>winter 2026</strong> internships.</p>
        </div>
        <div id="me" className="w-[15%] flex items-center justify-center">
          <SpinnableCoin src="/me.jpg" alt="insert nice picture of me" size={180} />
        </div>
      </div>
      <div id="projects" className="h-[30vh] bg-gradient-to-b from-lime-100/95 to-purple-200/95 flex justify-center">
        <Parallax opacity={[0.75, 0]} translateY={[0, -25]} easing="easeOutQuad">
          <div className="flex flex-col items-center justify-center">
            <span className={`text-xl font-bold text-black ${montserrat.className}`}>scroll down to see my portfolio</span>
            <FiChevronDown className="text-6xl text-black" />
          </div>
        </Parallax>
      </div>

      <div className="w-full bg-purple-200/95">
        <div className="flex flex-col text-black gap-8 p-8 max-w-7xl mx-auto">
          <div className="flex flex-row items-start gap-8 xl:gap-32">
            {/* Roles Column */}
            <div className="flex-[4] flex flex-col gap-4">
              <FadeInParallax translateYFrom={-50}>
                <h2 className={`text-4xl font-bold mb-2 ${montserrat.className}`}>Roles</h2>
              </FadeInParallax>
              {rolesData.roles.map((role, idx) => (
                <FadeInParallax key={idx}>
                  <RoleCard {...role} />
                </FadeInParallax>
              ))}
            </div>
            {/* Projects Column */}
            <div className="flex-[6] flex flex-col gap-4">
              <FadeInParallax translateYFrom={-50}>
                <h2 className={`text-4xl font-bold mb-2 ${montserrat.className}`}>Projects</h2>
              </FadeInParallax>
              {projectsData.projects.map((project, idx) => (
                <FadeInParallax key={idx}>
                  <ProjectCard {...project} />
                </FadeInParallax>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <p>More projects can be found on my&nbsp;</p>
            <a href="https://www.github.com/mars-flat" className="text-gray-600" target="_blank" rel="noopener noreferrer"> GitHub</a>.
          </div>
        </div>
      </div>
      <div id="contact"><Footer font={montserrat}/></div>
    </div>
  );
}

// should return a number between 0 and 1
function scroll(scrollY : number) {
  return Math.max(0, 0.5-(scrollY/600));
}

// should return a number between 0 and 1
function titleScroll(scrollY : number) {
  return Math.min(1, (scrollY-150)/600);
}
