import { NextRequest, NextResponse } from "next/server";

// let requestCount = 0;
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }
}
