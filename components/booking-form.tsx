"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { IBooking } from "@/models/Booking";

type BookingFormData = Omit<IBooking, "createdAt">;

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>();

  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const onSubmit = async (data: BookingFormData) => {
    try {
      setSubmitStatus({});

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to book your cabin");
      }

      setSubmitStatus({
        success: true,
        message:
          "Your cabin has been successfully booked! Check your email for confirmation.",
      });

      reset();
    } catch (error: any) {
      setSubmitStatus({
        success: false,
        message: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
      {submitStatus.success ? (
        <div className="text-center p-6">
          <div className="mb-4 text-5xl text-green-500">✓</div>
          <h3 className="text-2xl font-bold mb-2 text-gray-800">
            Booking Confirmed!
          </h3>
          <p className="text-gray-600 mb-4">{submitStatus.message}</p>
          <button
            onClick={() => setSubmitStatus({})}
            className="px-4 py-2 bg-coral-500 text-white rounded-md hover:bg-coral-600 transition-colors"
          >
            Book Another Cabin
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coral-500 focus:border-coral-500"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email",
                  },
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coral-500 focus:border-coral-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coral-500 focus:border-coral-500"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="guests"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Number of Guests <span className="text-red-500">*</span>
              </label>
              <input
                id="guests"
                type="number"
                min="1"
                {...register("guests", {
                  required: "Number of guests is required",
                  min: {
                    value: 1,
                    message: "At least 1 guest is required",
                  },
                  valueAsNumber: true,
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coral-500 focus:border-coral-500"
              />
              {errors.guests && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.guests.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="cabinType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Cabin Type <span className="text-red-500">*</span>
              </label>
              <select
                id="cabinType"
                {...register("cabinType", {
                  required: "Cabin type is required",
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coral-500 focus:border-coral-500"
              >
                <option value="">Select Cabin Type</option>
                <option value="Interior">Interior Cabin</option>
                <option value="Ocean View">Ocean View Cabin</option>
                <option value="Balcony">Balcony Cabin</option>
                <option value="Suite">Suite</option>
              </select>
              {errors.cabinType && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.cabinType.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="specialRequests"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                rows={4}
                {...register("specialRequests")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coral-500 focus:border-coral-500"
                placeholder="Any dietary requirements, accessibility needs, or other special requests?"
              ></textarea>
            </div>
          </div>

          {submitStatus.success === false && (
            <div className="p-4 bg-red-50 text-red-500 rounded-md">
              {submitStatus.message}
            </div>
          )}

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-semibold rounded-full hover:from-coral-600 hover:to-coral-700 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:ring-offset-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Processing..." : "Reserve My Cabin"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
