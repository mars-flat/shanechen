import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shane Chen",
  description:
    "Shane Chen — computer science student at the University of Waterloo, interested in full-stack development, distributed systems, and AI applications. Looking for Summer 2027 internships.",
  icons: { icon: "/images/favicon.png" },
  openGraph: {
    title: "Shane Chen",
    description:
      "Computer science student at the University of Waterloo. Roles and projects, mapped like a subway line.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0f0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
