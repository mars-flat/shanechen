'use client'

import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

import { ScrollOpacityChange } from "./components/scrollResponsives";
import ProjectCard from "./components/projectCard";

import { FaChevronDown, FaGithub, FaPython, FaReact } from "react-icons/fa";
import { SiDjango, SiExpo, SiGraphql, SiMongodb, SiTypescript } from "react-icons/si";

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
      <div id="projects" className="h-[30vh] bg-linear-to-b/oklab from-lime-100 to-purple-200 flex justify-center">
        
        <ScrollOpacityChange changeFunction={scroll} initialOpacity={0.75}>
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-black">scroll down to see my portfolio</span>
            <FaChevronDown className="text-5xl text-black" />
          </div>
        </ScrollOpacityChange>

      </div>

      <div className="h-260 bg-purple-200 flex flex-col items-center text-black">
        <div className="h-[15%] flex items-center">
          <ScrollOpacityChange changeFunction={titleScroll}>
            <p className="text-5xl font-bold">Portfolio</p>
          </ScrollOpacityChange>
        </div>
        
        <div className="w-[90%] h-[100%] flex justify-evenly align-center flex-nowrap overflow-x-auto">
          <ProjectCard
            imageUrl="/match-resized.png" imageHeight={709} imageWidth={964}
            title="MatchMadeIn.Tech" link="https://devpost.com/software/loveatfirst-tech"
            subtitle=" Match with GitHub users who code like you"
            desc="Ever wondered who your programming soulmate is? With MatchMadeIn.Tech, you can find GitHub users who match your commit habits and language expertise. I designed an efficient GraphQL query to extract thousands of users for our dataset, and contributed to the matching API, which uses K-means clustering. This project won best use of GitHub at Hack the North X!">
              <FaGithub className="text-5xl"/>
              <FaPython className="text-5xl"/>
              <SiGraphql className="text-5xl"/>
          </ProjectCard>
          <ProjectCard
            imageUrl="/mobile-resized.jpg" imageHeight={936} imageWidth={1169}
            title="Project Metropolis: Mobile" link="https://maclyonsden.com/app"
            subtitle="An app for news and events at WLMCI"
            desc="During the pandemic, school announcements were a mess, and I had a burning passion to fix it. As part of Project Metropolis, the official school website team, I helped build, and later lead the development of a mobile app that put news and events on your phone. Using React Native for cross-platform support, the app has grown to over 800 users on iOS and Android!">
              <FaReact className="text-5xl"/>
              <SiTypescript className="text-5xl"/>
              <SiExpo className="text-5xl"/>
          </ProjectCard>
          <ProjectCard
            imageUrl="/faceoff-resized.jpg" imageHeight={401} imageWidth={539}
            title="Faceoffantasy" link="https://github.com/AAZZAZRON/faceoffantasy"
            subtitle="A custom fantasy hockey (NHL) platform"
            desc="Fantasy hockey doesn't have to end after the regular season! With Faceoffantasy, pick the players you think will gain the most points during playoff season and compete with other teams in your league. I built a fully customizable league system, with an easy way to invite other players and keep the competition going through the entire playoffs.">
              <SiDjango className="text-5xl"/>
              <SiMongodb className="text-5xl"/>
              <FaReact className="text-5xl"/>
          </ProjectCard>
        </div>
        <div className="h-[10%] flex flex-col justify-center">More projects can be found on my GitHub!</div>
      </div>
      <div id="contact"><Footer /></div>
    </div>
  );
}

// should return a number between 0 and 1
function scroll(scrollY : number) {
  return Math.max(0, 0.75-(scrollY/400));
}

// should return a number between 0 and 1
function titleScroll(scrollY : number) {
  return Math.min(1, (scrollY-150)/600);
}
