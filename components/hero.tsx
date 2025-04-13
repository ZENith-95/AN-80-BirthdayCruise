"use client";

import { motion, useAnimate } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/public/hero-cruise.jpg";
import heroImage2 from "@/public/cruise.jpeg";
import { useEffect } from "react";
import { Great_Vibes, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

// Note: dancingScript should already be defined in your layout.tsx
// If you need to use it here, you'll need to pass it as a prop or define it here similarly

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage2}
          alt="Cruise ship sailing at sunset"
          fill
          priority
          className="object-cover"
          style={{ filter: "brightness(0.9)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/60"></div> {/* Increased overlay opacity */}
      </div>

      {/* Animated wave overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-10 opacity-70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
        >
          <motion.path
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              pathLength: [0, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            fill="#06b6d4"
            fillOpacity="0.8"
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></motion.path>
        </svg>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-10 md:left-20 z-10"
      >
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-turquoise-500/80 blur-md"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-40 right-10 md:right-20 z-10"
      >
        <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-gold-500/80 blur-md"></div>
      </motion.div>

      <div className="container mx-auto px-4 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-6">
            <p
              className={`text-3xl ${greatVibes.className} w-fit md:text-4xl text-gold-300 ml-[20%] transform rotate-[-20deg] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]`}
            >
              Ahoy!
            </p>
            <span
              className={`inline-block text-2xl md:text-3xl text-gold-200 font-light mb-2 ${playfair.className}`}
            >
              JOIN US AS WE CELEBRATE
            </span>
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-4 drop-shadow-lg font-dancing-script`}
            >
              <span className="block mb-6 bg-gradient-to-r from-gold-200 to-pink-200 text-transparent bg-clip-text">
                Anastasie Nervais&apos;
              </span>
              <span className="text-turquoise-200 relative">
                <span className="relative z-10 bg-gradient-to-r from-gold-300 via-pink-200 to-turquoise-200 text-transparent bg-clip-text">
                  80<sup className="text-gold-300">th</sup> Birthday
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-gold-400 via-pink-400 to-turquoise-400 opacity-20 blur-lg z-0"></span>
              </span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-turquoise-400 to-turquoise-200 rounded-xl opacity-30 blur-md"></div>
            <p
              className={`relative text-2xl md:text-3xl text-white mb-8 px-6 py-3 font-medium ${playfair.className}`}
            >
              A 6-Day Western Caribbean Adventure – May 11–17, 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <Link
              href="#booking"
              className="inline-block bg-gradient-to-r from-gold-400 to-pink-400 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:from-gold-500 hover:to-pink-500 shadow-md"
            >
              Important Information
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1], y: [10, 0] }}
        transition={{
          duration: 3,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <Link
          href="#cruise-details"
          className="text-white flex flex-col items-center"
        >
          <span className="mb-2 text-sm font-light">Scroll Down</span>
          <ArrowDown className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
