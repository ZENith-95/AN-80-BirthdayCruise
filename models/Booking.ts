import mongoose, { Schema, models, model } from "mongoose";

export interface IBooking {
  name: string;
  email: string;
  phone: string;
  guests: number;
  cabinType: "Interior" | "Ocean View" | "Balcony" | "Suite";
  specialRequests?: string;
  createdAt: Date;
}

const BookingSchema = new Schema<IBooking>({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [100, "Name cannot be more than 100 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
  },
  phone: {
    type: String,
    required: [true, "Please provide a phone number"],
  },
  guests: {
    type: Number,
    required: [true, "Please provide number of guests"],
    min: [1, "At least 1 guest is required"],
  },
  cabinType: {
    type: String,
    required: [true, "Please select a cabin type"],
    enum: ["Interior", "Ocean View", "Balcony", "Suite"],
  },
  specialRequests: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Booking =
  models.Booking || model<IBooking>("Booking", BookingSchema);
