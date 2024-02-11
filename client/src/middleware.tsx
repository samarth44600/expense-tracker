import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const pathName: string = request.nextUrl.pathname;

  if (pathName === "/") {
    return NextResponse.redirect(new URL("/expenses", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/expenses", "/category"],
};
