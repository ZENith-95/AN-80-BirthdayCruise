import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

// Server-side authentication
export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    // Validate credentials server-side
    const isValid =
      username === process.env.ADMIN_USER &&
      password === process.env.ADMIN_PASSWORD;

    if (!isValid) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create a secure HTTP-only cookie
    const cookieValue = serialize("admin-session", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax", // Changed from strict to lax to allow redirects
      maxAge: 7200, // 2 hours
      path: "/",
    });

    // Return success response with cookie
    const response = NextResponse.json({
      success: true,
      message: "Authentication successful",
    });

    // Set the cookie in the response
    response.headers.set("Set-Cookie", cookieValue);

    return response;
  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred during login" },
      { status: 500 }
    );
  }
}
