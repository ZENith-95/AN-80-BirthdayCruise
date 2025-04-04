import mongoose from "mongoose";

// Make MongoDB connection optional during build time
const MONGODB_URI = process.env.MONGODB_URI || "";

// Only throw error during runtime, not during build
if (!MONGODB_URI && process.env.NODE_ENV !== "production") {
  console.warn("No MONGODB_URI found in environment variables");
}

interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached: CachedConnection = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

export async function dbConnect() {
  // Skip database connection if URI is not provided
  if (!MONGODB_URI) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("Please define the MONGODB_URI environment variable");
    } else {
      console.warn("Skipping database connection - MONGODB_URI not provided");
      return null;
    }
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    // MongoDB connection options
    const options = {
      // These were likely in your previous working configuration
      bufferCommands: false,
      // Use existing settings from your MongoDB URI
      // Don't override with custom settings that might break it
    };

    try {
      console.log("Connecting to MongoDB Atlas...");
      cached.promise = mongoose.connect(MONGODB_URI, options);
    } catch (error) {
      console.error("MongoDB connection error:", error);
      throw error;
    }
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// Augment the NodeJS global type
declare global {
  var mongoose: CachedConnection | undefined;
}
