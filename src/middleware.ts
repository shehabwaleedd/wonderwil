import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const accessToken = request.cookies.get('access_token');
    const protectedPaths = ['/', '/about', '/expertise', '/wonder'];
    const isProtectedPath = protectedPaths.some(path => request.nextUrl.pathname === path);

    if (!accessToken && isProtectedPath) {
        return NextResponse.rewrite(new URL('/access', request.url));
    }

    if (accessToken && request.nextUrl.pathname === '/access') {
        return NextResponse.rewrite(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/about', '/expertise', '/wonder', '/access'],
};