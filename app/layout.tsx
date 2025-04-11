import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Dancing_Script } from "next/font/google";
import { Providers } from "./providers";
// import "/favicon_ana.png"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Ana's 80th Birthday Cruise Celebration",
  description:
    "Join us for a 7-Day Western Caribbean Adventure to celebrate Mom's 80th birthday!",
  icons: {
    icon: '/favicon_ana.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${dancingScript.variable} font-sans overflow-x-hidden`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
