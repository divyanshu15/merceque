import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-for-development-only';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Fix the /admin 404 error by redirecting to /admin/products
  if (pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/products', request.url));
  }

  // 2. Protect all other /admin routes (except /admin/login)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const token = request.cookies.get('admin-auth')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      const secret = new TextEncoder().encode(JWT_SECRET);
      await jwtVerify(token, secret);
      // Valid token, allow access
      return NextResponse.next();
    } catch (error) {
      // Invalid or expired token, redirect to login
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
