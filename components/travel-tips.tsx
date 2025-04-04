"use client"

import { motion } from "framer-motion"
import { Plane, Luggage, Car } from "lucide-react"

export default function TravelTips() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="travel-tips" className="relative py-20 bg-gradient-to-b from-turquoise-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gold-200 opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-coral-200 opacity-20 blur-xl"></div>

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
            <div className="w-20 h-1 bg-turquoise-500 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-turquoise-600">Travel Tips & FAQ</h2>
            <div className="w-20 h-1 bg-turquoise-500 mx-auto mt-4"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know to prepare for our celebration cruise!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="bg-gradient-to-br from-coral-400 to-coral-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
              <Plane className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Arriving Early</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-coral-500 font-bold mr-2">•</span>
                <span>Fly into Tampa by May 10th (day before)</span>
              </li>
              <li className="flex items-start">
                <span className="text-coral-500 font-bold mr-2">•</span>
                <span>Tampa International Airport (TPA) is closest</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="bg-gradient-to-br from-turquoise-400 to-turquoise-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
              <Luggage className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Packing List</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-turquoise-500 font-bold mr-2">•</span>
                <span>
                  <strong>Required:</strong> Passport valid for 6+ months after travel
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-turquoise-500 font-bold mr-2">•</span>
                <span>Tropical attire, swimwear, sunscreen, hat</span>
              </li>
              <li className="flex items-start">
                <span className="text-turquoise-500 font-bold mr-2">•</span>
                <span>One formal outfit for Mom's birthday dinner</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="bg-gradient-to-br from-gold-400 to-gold-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
              <Car className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Transportation</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-gold-500 font-bold mr-2">•</span>
                <span>Port: Tampa, FL</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-500 font-bold mr-2">•</span>
                <span>Boarding time: **:00 AM - **:30 PM on May 11th</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          variants={fadeInUp}
          className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div className="p-4 border-b border-gray-100">
              <h4 className="font-bold text-turquoise-600">Do I need cruise insurance?</h4>
              <p className="text-gray-600 mt-1">
                While not required, we strongly recommend travel insurance to protect your investment.
              </p>
            </div>
            <div className="p-4 border-b border-gray-100">
              <h4 className="font-bold text-turquoise-600">What's included in the cruise fare?</h4>
              <p className="text-gray-600 mt-1">
                Accommodations, meals in main dining venues, entertainment, and basic beverages. Specialty dining,
                alcoholic beverages, and excursions are extra.
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-turquoise-600">Will we all be seated together for dinner?</h4>
              <p className="text-gray-600 mt-1">
                Yes, we've arranged for group dining. You'll select your preferred dining time when booking.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

