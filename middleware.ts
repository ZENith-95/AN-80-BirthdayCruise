import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Add protected routes that require admin authentication
const PROTECTED_ROUTES = ["/admin", "/admin/bookings"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path is a protected route
  if (PROTECTED_ROUTES.some((route) => pathname.startsWith(route))) {
    // Skip authentication check for the login page
    if (pathname === "/admin/login") {
      return NextResponse.next();
    }

    // Check for authenticated session
    const isAuthenticated = request.cookies.has("admin-session");

    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
