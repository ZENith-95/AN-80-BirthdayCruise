"use client"

import { motion } from "framer-motion"
import { Calendar, Ship, BookOpenCheck } from "lucide-react"

export default function CruiseDetails() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="cruise-details"
      className="relative py-20 bg-gradient-to-b from-turquoise-900 to-turquoise-800 text-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border-8 border-gold-300"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full border-8 border-coral-300"></div>
      </div>

      {/* Palm tree decorations */}
      <div className="absolute left-0 bottom-0 w-40 h-40 opacity-20 pointer-events-none">
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

      <div className="absolute right-0 top-20 w-40 h-40 opacity-20 pointer-events-none">
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

      <div className="container mx-auto px-4 pt-10 z-20 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="w-20 h-1 bg-gold-400 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Cruise Details
            </h2>
            <div className="w-20 h-1 bg-gold-400 mx-auto mt-4"></div>
          </div>
          <p className="text-xl text-turquoise-100 max-w-3xl mx-auto">
            Join us for a week of celebration, relaxation, and adventure as we
            sail through the beautiful Western Caribbean!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
            className="bg-turquoise-700/50 backdrop-blur-sm rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border-t-4 border-coral-500 group hover:-translate-y-2"
          >
            <div className="bg-coral-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Dates</h3>
            <p className="text-coral-400">May 11–17, 2026</p>
            <p className="text-coral-400 mt-2">Departing from Tampa, FL</p>
            <p className="text-coral-400 mt-2"><span className="text-turquoise-100">Cruise Line:</span> Carnival Cruise Line</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeInUp}
            className="bg-turquoise-700/50 backdrop-blur-sm rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border-t-4 border-turquoise-400 group hover:-translate-y-2"
          >
            <div className="bg-turquoise-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <Ship className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Contact Details</h3>
            <p className="text-turquoise-100"> Contact: <span className="text-turquoise-300">Carnival Cruise Line</span> </p>
            <p className="text-turquoise-100 mt-2"> For Reservation: <span className="text-turquoise-300">1800-819-3902</span> </p>
            <p className="text-turquoise-100 mt-2"> <span className="text-turquoise-300">ext 70232:</span> For group sales </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            variants={fadeInUp}
            className="bg-turquoise-700/50 backdrop-blur-sm rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border-t-4 border-gold-400 group hover:-translate-y-2"
          >
            <div className="bg-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <BookOpenCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Booking Details
            </h3>
            <p className="text-turquoise-100"> Booking Number: <span className="text-gold-300">CR59M8</span> </p>
            <p className="text-turquoise-100"> Group Name: <span className="text-gold-300">Ana's 80th Birthday </span></p>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

