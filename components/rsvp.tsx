"use client"

import { motion } from "framer-motion"
import { PartyPopper, Gift, CreditCard } from "lucide-react"
import Link from "next/link"

export default function RSVP() {
  return (
    <section id="rsvp" className="relative py-20 bg-gradient-to-b from-white to-turquoise-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-8 border-coral-300"></div>
        <div className="absolute bottom-1/2 -left-24 w-64 h-64 rounded-full border-8 border-gold-300"></div>
      </div>

      <div className="container mx-auto px-4 z-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="w-20 h-1 bg-coral-500 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-coral-500">RSVP & Group Gift</h2>
            <div className="w-20 h-1 bg-coral-500 mx-auto mt-4"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let us know you're joining the celebration and consider contributing to a special gift for Mom!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100"
          >
            <div className="bg-gradient-to-br from-coral-400 to-coral-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <PartyPopper className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join the Celebration!</h3>
            <p className="text-gray-600 mb-8">
              Please let us know by December 15, 2024 if you plan to join us for this special celebration. Early booking
              ensures we can all be together!
            </p>
            <Link
              href="#booking"
              className="inline-block bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              RSVP Now
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-turquoise-400 to-turquoise-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Group Gift Options</h3>
              <p className="text-gray-600 mb-6">
                In lieu of individual gifts, consider contributing to one of these special experiences for Mom:
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start p-4 bg-turquoise-50 rounded-lg">
                <div className="bg-gradient-to-br from-gold-400 to-gold-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Onboard Credit</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Contribute to Mom's onboard account for spa treatments, specialty dining, or shore excursions.
                  </p>
                  <button className="text-sm bg-gradient-to-r from-turquoise-500 to-turquoise-600 hover:from-turquoise-600 hover:to-turquoise-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 shadow-sm">
                    Contribute to Onboard Credit
                  </button>
                </div>
              </div>

              <div className="flex items-start p-4 bg-coral-50 rounded-lg">
                <div className="bg-gradient-to-br from-coral-400 to-coral-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Cruise Photo Package</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Help us capture all the special moments with a professional photo package for Mom.
                  </p>
                  <button className="text-sm bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 shadow-sm">
                    Contribute to Photo Package
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

