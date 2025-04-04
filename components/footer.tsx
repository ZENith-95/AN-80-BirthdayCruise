"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Wave divider */}
      <div className="absolute top-0 left-0 right-0 h-16 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full rotate-180"
        >
          <path
            fill="#0d9488"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50,90 L55,60 C55,60 70,50 65,40 C60,30 50,35 50,35 C50,35 40,25 30,35 C20,45 45,55 45,55 L50,90"
              stroke="#f59e0b"
              strokeWidth="2"
            />
            <path
              d="M50,35 C50,35 60,15 50,10 C40,5 40,20 40,20"
              stroke="#f59e0b"
              strokeWidth="2"
            />
            <path
              d="M50,40 C50,40 70,30 65,20 C60,10 50,25 50,25"
              stroke="#f59e0b"
              strokeWidth="2"
            />
            <path
              d="M50,35 C50,35 30,15 25,25 C20,35 45,35 45,35"
              stroke="#f59e0b"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-turquoise-400">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-coral-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-coral-400" />
                <span>moms80thcruise@example.com</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-turquoise-400">
                Follow & Share
              </h4>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-white hover:text-coral-400 transition-colors duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-coral-400 transition-colors duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-coral-400 transition-colors duration-300"
                >
                  <Twitter className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-turquoise-400">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="#home"
                  className="hover:text-coral-400 transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  href="#cruise-details"
                  className="hover:text-coral-400 transition-colors duration-300"
                >
                  Cruise Details
                </Link>
                <Link
                  href="#highlights"
                  className="hover:text-coral-400 transition-colors duration-300"
                >
                  Highlights
                </Link>
                <Link
                  href="#itinerary"
                  className="hover:text-coral-400 transition-colors duration-300"
                >
                  Itinerary
                </Link>
                <Link
                  href="#booking"
                  className="hover:text-coral-400 transition-colors duration-300"
                >
                  Booking
                </Link>
                <Link
                  href="#travel-tips"
                  className="hover:text-coral-400 transition-colors duration-300"
                >
                  Travel Tips
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-8 text-center md:text-right"
            >
              <p className="text-lg italic text-turquoise-400">
                "Let's sail into 80 years of joy with sunshine, laughter, and
                endless blue horizons!"
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Mom's 80th Birthday Cruise. All rights
            reserved.
          </p>
          <p className="mt-2">Website created with ❤️ by the family</p>
        </div>
      </div>
    </footer>
  );
}
