import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxClientProvider from "./components/ParallaxClientProvider";

export const metadata: Metadata = {
  title: "Shane Chen's Website",
  icons: "/images/favicon.png",
  description: "I'm a computer science student at the University of Waterloo, class of 2029. I'm currently looking for summer 2025 internships. Let's have a chat!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ParallaxClientProvider>
          {children}
        </ParallaxClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
