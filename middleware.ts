// middleware.ts
import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
export default withAuth(
  function middleware(req) {
    const url = req?.nextUrl?.pathname;
    const isAdmin = req?.nextauth?.token?.role;

    if (url?.startsWith("/admin") && isAdmin === false) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"],
};
