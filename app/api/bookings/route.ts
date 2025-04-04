import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { Booking, IBooking } from "@/models/Booking";
import { sendConfirmationEmail } from "@/lib/email";

// Helper function to check authentication
const isAuthenticated = (req: NextRequest) => {
  const cookies = req.cookies;
  return cookies.has("admin-session");
};

export async function POST(req: NextRequest) {
  try {
    const db = await dbConnect();
    // If database connection fails during build or missing env vars
    if (!db) {
      return NextResponse.json(
        { success: false, error: "Database connection not available" },
        { status: 503 }
      );
    }

    const body = await req.json();

    // Validate input
    const { name, email, phone, guests, cabinType, specialRequests } = body;

    if (!name || !email || !phone || !guests || !cabinType) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create booking in database
    const booking = await Booking.create(body);

    // Send confirmation email
    await sendConfirmationEmail(booking as IBooking);

    return NextResponse.json({ success: true, data: booking }, { status: 201 });
  } catch (error: any) {
    console.error("Booking creation error:", error.message);

    return NextResponse.json(
      { success: false, error: error.message || "Something went wrong" },
      { status: 400 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    // Check if user is authenticated for viewing bookings
    if (!isAuthenticated(req)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const db = await dbConnect();
    // If database connection fails during build or missing env vars
    if (!db) {
      return NextResponse.json(
        { success: false, error: "Database connection not available" },
        { status: 503 }
      );
    }

    const bookings = await Booking.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: bookings });
  } catch (error: any) {
    console.error("Error fetching bookings:", error.message);

    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}
