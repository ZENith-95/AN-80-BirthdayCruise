"use client";

import { motion } from "framer-motion";
import { CreditCard, Ship, CalendarDays } from "lucide-react";
import Image from "next/image";
import BookingForm from "./booking-form";

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
              Reserve Your <span className="text-coral-500">Cabin</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure your spot on this unforgettable celebration voyage. Choose
              your perfect cabin and join us for a week of joy and festivities!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <BookingForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Important Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Ship className="h-5 w-5 text-coral-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-800">
                      Cruise Line
                    </h4>
                    <p className="text-gray-600">
                      Royal Caribbean - Symphony of the Seas
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CalendarDays className="h-5 w-5 text-coral-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-800">Dates</h4>
                    <p className="text-gray-600">May 11–17, 2025 (7 days)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CreditCard className="h-5 w-5 text-coral-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-800">
                      Payment
                    </h4>
                    <p className="text-gray-600">$500 deposit due at booking</p>
                    <p className="text-gray-600">
                      Full payment due by February 1, 2025
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-medium text-gray-800 mb-2">
                  Cancellation Policy
                </h4>
                <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                  <li>Full refund available until 90 days before sailing</li>
                  <li>50% refund available 89-60 days before sailing</li>
                  <li>No refunds within 59 days of sailing</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  For questions or assistance with your booking, please contact
                  our cruise specialist at{" "}
                  <a
                    href="mailto:cruise@example.com"
                    className="text-coral-500 hover:underline"
                  >
                    cruise@example.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
