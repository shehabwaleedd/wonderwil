import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const accessToken = request.cookies.get('access_token');

    if (!accessToken && request.nextUrl.pathname !== '/access') {
        return NextResponse.redirect(new URL('/access', request.url));
    }

    if (accessToken && request.nextUrl.pathname === '/access') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};