import { NextResponse } from "next/server";

export function middleware(req) {
  console.log("middleware ran");
  return NextResponse.redirect(new URL("/login", req.url));
}

// direction
export const config = {
  matcher: ["/users/:path*"],
};
