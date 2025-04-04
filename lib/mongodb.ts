import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
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
