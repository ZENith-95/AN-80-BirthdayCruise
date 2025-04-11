"use client"

import { motion } from "framer-motion"
import { Ship, Waves, TreePalmIcon as PalmTree, Fish, Umbrella, CoffeeIcon as Cocktail, Home } from "lucide-react"

export default function Itinerary() {
  const days = [
    {
      date: "May 11",
      title: "Bon Voyage from Tampa! 🚢",
      description: "Board the ship and set sail for adventure!",
      icon: <Ship className="w-8 h-8 text-white" />,
      color: "bg-coral-500",
    },
    {
      date: "May 12",
      title: "Fun Day at Sea 🌊",
      description: "Enjoy the pools, entertainment, and onboard activities.",
      icon: <Waves className="w-8 h-8 text-white" />,
      color: "bg-coral-300",
    },
    {
      date: "May 13",
      title: "Isla Tropicale, Roatán 🌴",
      description: "Discover this tropical paradise in Honduras.",
      icon: <Umbrella className="w-8 h-8 text-white" />,
      color: "bg-turquoise-300",
    },
    {
      date: "May 14",
      title: "Belize 🐠",
      description: "Stingrays & Seven Mile Beach adventures await.",
      icon: <Fish className="w-8 h-8 text-white" />,
      color: "bg-turquoise-500",
    },
    {
      date: "May 15",
      title: "Cozumel, Mexico 🏝️",
      description: "Swim, Shop, or Snorkel in this beautiful Mexican island.",
      icon: <PalmTree className="w-8 h-8 text-white" />,
      color: "bg-turquoise-300",
    },
    {
      date: "May 16",
      title: "Fun Day at Sea 🍹",
      description: "Pool Parties & Pampering on our final day at sea.",
      icon: <Cocktail className="w-8 h-8 text-white" />,
      color: "bg-gold-300",
    },
    {
      date: "May 17",
      title: "Return to Tampa 🚢",
      description: "Disembark with wonderful memories of our celebration.",
      icon: <Home className="w-8 h-8 text-white" />,
      color: "bg-gold-500",
    },
  ];

  return (
    <section id="itinerary" className="relative py-20 bg-gradient-to-b from-turquoise-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-coral-200 opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-turquoise-200 opacity-20 blur-xl"></div>

      <div className="container mx-auto px-4 z-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="w-20 h-1 bg-turquoise-500 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-turquoise-600">Itinerary at a Glance</h2>
            <div className="w-20 h-1 bg-turquoise-500 mx-auto mt-4"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six days of celebration, relaxation, and adventure await!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-coral-300 via-turquoise-300 to-gold-300 z-0"></div>

            {days.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative z-10 flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-10 h-10 md:w-16 md:h-16 rounded-full ${day.color} flex items-center justify-center shadow-lg`}>
                    {day.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-4 md:pr-8 text-right" : "pl-4 md:pl-8 text-left"}`}>
                  <div className="bg-white p-3 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">{day.date}</h3>
                    <h4 className="text-base md:text-lg font-semibold text-turquoise-600 mb-1 md:mb-2">{day.title}</h4>
                    <p className="text-sm md:text-base text-gray-600">{day.description}</p>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

