import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
  // Create an expired cookie to clear the session
  const cookie = serialize("admin-session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: new Date(0), // Set to epoch time to expire immediately
    path: "/",
  });

  // Return success response with expired cookie
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });

  // Set the cookie in the response
  response.headers.set("Set-Cookie", cookie);

  return response;
} 