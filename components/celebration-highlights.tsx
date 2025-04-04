"use client"

import { motion } from "framer-motion"
import { Utensils, GlassWater, Compass } from "lucide-react"

export default function CelebrationHighlights() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="highlights" className="relative py-20 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF3333"
            d="M47.1,-57.5C59.9,-47.3,68.7,-31.6,72.1,-14.6C75.5,2.4,73.5,20.7,64.8,34.9C56.1,49.1,40.7,59.2,24.4,65.2C8.1,71.2,-9.1,73.1,-25.6,68.5C-42.1,63.9,-57.9,52.8,-67.4,37.3C-76.9,21.8,-80.1,1.9,-75.1,-15.2C-70.1,-32.3,-56.9,-46.6,-42.1,-56.5C-27.3,-66.4,-10.9,-71.9,3.9,-76.5C18.7,-81.1,34.3,-67.7,47.1,-57.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#14B8A6"
            d="M47.7,-51.2C59.5,-42.9,65.8,-25.9,68.2,-8.3C70.6,9.3,69.2,27.5,59.9,39.8C50.7,52.1,33.6,58.5,16.9,62.5C0.1,66.5,-16.3,68.1,-31.1,62.4C-45.9,56.7,-59.1,43.7,-65.2,28C-71.3,12.3,-70.3,-6.1,-63.2,-20.6C-56.1,-35.1,-42.9,-45.7,-29.2,-53.5C-15.5,-61.3,-1.3,-66.3,11.9,-65.8C25.1,-65.3,35.9,-59.4,47.7,-51.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 z-20 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="w-20 h-1 bg-coral-500 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-coral-500">Birthday Celebration Highlights</h2>
            <div className="w-20 h-1 bg-coral-500 mx-auto mt-4"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've planned special moments throughout the cruise to celebrate Mom's milestone birthday!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="bg-gradient-to-br from-coral-400 to-coral-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Utensils className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Sunset Group Dinner</h3>
            <p className="text-gray-600">
              Join us for an elegant dinner with ocean views in a private dining room to celebrate Mom's special day.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm font-medium text-turquoise-600">May 14th, 7:00 PM</p>
              <p className="text-xs text-gray-500 mt-1">Formal attire requested</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="bg-gradient-to-br from-turquoise-400 to-turquoise-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <GlassWater className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Special Onboard Toast</h3>
            <p className="text-gray-600">
              A champagne celebration with all guests to honor Mom's 80 years of joy, wisdom, and adventures.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm font-medium text-turquoise-600">May 15th, 4:00 PM</p>
              <p className="text-xs text-gray-500 mt-1">Sunset Deck</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="bg-gradient-to-br from-gold-400 to-gold-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Compass className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Optional Excursions</h3>
            <p className="text-gray-600">
              Join Us for special group excursions including beach days, and cultural tours.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm font-medium text-turquoise-600">Details at Welcome Meeting</p>
              <p className="text-xs text-gray-500 mt-1">May 11th, 8:00 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

