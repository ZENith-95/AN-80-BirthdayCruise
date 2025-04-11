"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Ship,
  CalendarDays,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";

export default function Booking() {
  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Important <span className="text-coral-500">Information</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key details about our celebration voyage. Please review this
              information for your planning.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4 border-gray-100">
                Cruise Information
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Ship className="h-6 w-6 text-coral-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">
                        Cruise Line
                      </h4>
                      <p className="text-gray-600">Carnival - Ship(Paradise)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CalendarDays className="h-6 w-6 text-coral-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">
                        Dates
                      </h4>
                      <p className="text-gray-600">May 11–17, 2026 (6 days)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="h-6 w-6 text-coral-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">
                        Contact Information
                      </h4>
                      <div className="space-y-2 mt-2">
                        <a
                          target="_blank"
                          href="mailto:eulavais@gmail.com"
                          className="flex items-center text-gray-600 hover:text-coral-500"
                        >
                          <Mail className="h-4 w-4 mr-2 text-coral-500" />
                          eulavais@gmail.com
                        </a>
                        <a
                          target="_blank"
                          href="tel:9739419652"
                          className="flex items-center text-gray-600 hover:text-coral-500"
                        >
                          <Phone className="h-4 w-4 mr-2 text-coral-500" />
                          +1 (973) 941-9652 <span> - (Laurine)</span>
                        </a>
                        <a
                          target="_blank"
                          href="tel:9739419652"
                          className="flex items-center text-gray-600 hover:text-coral-500"
                        >
                          <Phone className="h-4 w-4 mr-2 text-coral-500" />
                          +1 (862) 444-9872 <span> - (Genevieve)</span>
                        </a>
                        <a
                          target="_blank"
                          href="https://wa.me/19739419652"
                          className="flex items-center text-gray-600 hover:text-coral-500"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 mr-2 text-coral-500"
                            fill="currentColor"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          WhatsApp Laurine
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CreditCard className="h-6 w-6 text-coral-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">
                    Payment Details
                  </h4>
                  <div className="space-y-2">
                    <p className="flex gap-1 items-center text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-coral-500 mr-2"></span>
                      First deposit of
                      <span className="text-coral-500 font-semibold mx-1">
                        $25
                      </span>
                      by
                      <span className="text-coral-500 font-semibold ml-1">
                        June 7, 2025
                      </span>
                      to secure your spot
                    </p>

                    <p className="flex gap-1 items-center text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-coral-500 mr-2"></span>
                      Pay
                      <span className="text-coral-500 font-semibold mx-1">
                        $250
                      </span>
                      for the assigned cabin of your choice
                    </p>

                    <p className="flex gap-1 items-center text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-coral-500 mr-2"></span>
                      Full payment due by
                      <span className="text-coral-500 font-semibold ml-1">
                        March, 2026
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 bg-turquoise-50 -mx-8 -mb-8 p-8">
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  Important Notes
                </h4>
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>
                    All guests must have a valid passport that expires at least
                    6 months after the cruise end date
                  </li>
                  <li>Travel insurance is highly recommended</li>
                  <li>
                    Please inform us of any special dietary requirements or
                    accessibility needs
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
