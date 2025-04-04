"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { QrCode } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  phone: z.string().optional(),
  cabinType: z.enum(["interior", "oceanview", "balcony", "suite"]),
  message: z.string().min(5, { message: "Message is required" }),
})

type FormValues = z.infer<typeof formSchema>

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cabinType: "interior",
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
    // Here you would normally send the data to your backend
    setTimeout(() => {
      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1000)
  }

  const cabinTypes = [
    {
      type: "Interior",
      price: "$***",
      description: "Cozy and comfortable interior stateroom",
      color: "border-coral-500",
      value: "interior",
    },
    {
      type: "Ocean View",
      price: "$***",
      description: "Enjoy natural light and ocean views",
      color: "border-turquoise-500",
      value: "oceanview",
    },
    {
      type: "Balcony",
      price: "$***",
      description: "Private balcony with stunning sea views",
      color: "border-gold-500",
      value: "balcony",
    },
    {
      type: "Suite",
      price: "$***",
      description: "Luxurious suite with premium amenities",
      color: "border-coral-500",
      value: "suite",
    },
  ]

  return (
    <section id="booking" className="relative py-20 bg-gradient-to-b from-white to-turquoise-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full border-8 border-coral-300"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border-8 border-turquoise-300"></div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-coral-500">Booking & Logistics</h2>
            <div className="w-20 h-1 bg-coral-500 mx-auto mt-4"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your spot on this special celebration cruise! Group rates available until January 15, 2026.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-bold text-gray-800 mb-6"
            >
              Cabin Options
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {cabinTypes.map((cabin, index) => (
                <motion.div
                  key={cabin.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white p-6 rounded-xl shadow-md border-l-4 ${cabin.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <h4 className="text-xl font-bold text-gray-800">{cabin.type}</h4>
                  <p className="text-2xl font-bold text-turquoise-600 my-2">{cabin.price}</p>
                  <p className="text-gray-600 text-sm">{cabin.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 bg-white p-6 rounded-xl shadow-md"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-2">Important Dates</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-coral-500 font-bold mr-2">•</span>
                  <span>
                    <strong>Booking Deadline:</strong> February 15, 2026 
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-coral-500 font-bold mr-2">•</span>
                  <span>
                    <strong>Final Payment Due:</strong> March 10, 2026
                  </span>
                </li>
                {/* <li className="flex items-start">
                  <span className="text-coral-500 font-bold mr-2">•</span>
                  <span>
                    <strong>Cancellation Deadline:</strong> March 1, 2026 for full refund
                  </span>
                </li> */}
              </ul>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex justify-center"
            >
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="border-4 border-turquoise-500 p-2 inline-block rounded-xl">
                  <QrCode className="w-32 h-32 mx-auto text-turquoise-600 mb-2" />
                </div>
                <p className="text-gray-600 mt-2">Scan to book directly</p>
              </div>
            </motion.div> */}
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-bold text-gray-800 mb-6"
            >
              Contact Us
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              {isSubmitted ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h4>
                  <p className="text-gray-600">Your message has been sent. We'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-turquoise-500 focus:border-turquoise-500"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-turquoise-500 focus:border-turquoise-500"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-turquoise-500 focus:border-turquoise-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="cabinType" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Cabin Type
                    </label>
                    <select
                      id="cabinType"
                      {...register("cabinType")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-turquoise-500 focus:border-turquoise-500"
                    >
                      {cabinTypes.map((cabin) => (
                        <option key={cabin.value} value={cabin.value}>
                          {cabin.type} - {cabin.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      {...register("message")}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-turquoise-500 focus:border-turquoise-500"
                      placeholder="I'm interested in booking a cabin..."
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

