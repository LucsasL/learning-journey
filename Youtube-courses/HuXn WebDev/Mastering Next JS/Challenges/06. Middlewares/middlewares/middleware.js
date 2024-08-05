import { NextResponse } from "next/server";

export function middleware(req, res) {
  console.log("Middleware ran.");
  return NextResponse.redirect(new URL("/about", req.url));
}

// direction
export const config = {
  matcher: ["/about/:path*"],
};