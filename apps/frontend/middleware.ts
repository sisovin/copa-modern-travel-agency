import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Define protected route patterns
  const protectedRoutes = ['/dashboard', '/profile', '/settings'];

  // Check if the request is for a protected route
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const token = req.cookies.get('token');

    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
      jwt.verify(token, secret);
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/profile', '/settings'],
};
