import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

// Server-side authentication
export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    console.log("Login attempt with username:", username);
    console.log("Expected username:", process.env.ADMIN_USER);
    // Don't log actual passwords, just log whether one exists
    console.log("Admin password configured:", !!process.env.ADMIN_PASSWORD);

    // Validate credentials server-side
    const isValid =
      username === process.env.ADMIN_USER &&
      password === process.env.ADMIN_PASSWORD;

    if (!isValid) {
      console.log("Authentication failed - invalid credentials");
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    console.log("Authentication successful, setting cookie");

    // Create a secure HTTP-only cookie
    const cookieValue = serialize("admin-session", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax", // Changed from strict to lax to allow redirects
      maxAge: 7200, // 2 hours (extended from 1 hour)
      path: "/",
    });

    console.log("Cookie created with options:", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7200,
      path: "/",
    });

    // Return success response with cookie
    const response = NextResponse.json({
      success: true,
      message: "Authentication successful",
    });

    // Set the cookie in the response
    response.headers.set("Set-Cookie", cookieValue);
    console.log("Cookie header set:", cookieValue.substring(0, 30) + "...");

    return response;
  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred during login" },
      { status: 500 }
    );
  }
}
