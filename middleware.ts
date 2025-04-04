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

    // Log cookie information for debugging
    console.log("Checking authentication for path:", pathname);
    console.log(
      "Cookies present:",
      request.cookies.getAll().map((c) => c.name)
    );

    // Check for authenticated session
    const isAuthenticated = request.cookies.has("admin-session");
    console.log("Authentication status:", isAuthenticated);

    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      console.log("Not authenticated, redirecting to login");
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    console.log("Authentication successful, allowing access to:", pathname);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
