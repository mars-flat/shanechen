'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

export default function TestPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* First Section: Takes up full height but only 50% width initially */}
      <div
        className="min-h-screen bg-[#F7F8F2] flex justify-center items-center"
        style={{
          width: `calc(50vw + ${Math.min(scrollY, 100) * 0.5}px)`, // Adjust width on scroll
        }}
      >
        <h1 className="text-3xl font-semibold">Coming soon!</h1>
        <Link href="/" className="hover:text-xl">Home</Link>
      </div>
    </div>
  );
}