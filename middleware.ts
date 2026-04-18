import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    
    // Explicitly check for session cookies to assist getToken
    const hasSessionCookie = request.cookies.has("next-auth.session-token") || 
                           request.cookies.has("__Secure-next-auth.session-token");

    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
        // Match the cookie name based on protocol
        secureCookie: request.nextUrl.protocol === 'https:',
    });

    // Low-level fallback for some mobile browsers that lose the JWT header but keep the cookie
    const isAuthenticated = !!token || (hasSessionCookie && pathname.startsWith("/api/auth/session") === false);

    // Define routes
    const isAdminRoute = pathname.startsWith("/admin");
    const isAuthRoute = pathname.startsWith("/auth");
    const isProfileRoute = pathname.startsWith("/profile");
    const isOrdersRoute = pathname.startsWith("/orders");
    const isLegacyDashboardRoute = pathname.startsWith("/dashboard");

    // Redirect legacy dashboard routes to new admin dashboard
    if (isLegacyDashboardRoute) {
        const newPathname = pathname.replace("/dashboard", "/admin/dashboard");
        return NextResponse.redirect(new URL(newPathname, request.url));
    }

    // Require authentication for admin, profile, and user orders routes
    if (!isAuthenticated && (isAdminRoute || isProfileRoute || isOrdersRoute)) {
        const loginUrl = new URL("/auth/login", request.url);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
    }

    // If authenticated but trying to access admin route without admin privileges
    if (token && isAdminRoute && token.isAdmin !== true) {
        return NextResponse.redirect(new URL("/profile", request.url));
    }

    // If already authenticated, redirect away from auth pages
    if (isAuthenticated && isAuthRoute) {
        const redirectUrl = (token?.isAdmin || hasSessionCookie) ? "/admin/dashboard" : "/profile";
        return NextResponse.redirect(new URL(redirectUrl, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (images, etc)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
