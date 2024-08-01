import { NextResponse } from "next/server";

export function middleware(req) {
  console.log("middleware ran");

  if (req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login"), req.url);
  }

  return NextResponse.json({ success: true });
}

// direction
export const config = {
  matcher: ["/users/:path*"]
};