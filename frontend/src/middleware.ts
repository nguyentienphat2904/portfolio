import { NextRequest, NextResponse } from "next/server";


export function middleware(request: NextRequest) {
    const token = request.cookies.get("access_token")?.value;
    const pathname = request.nextUrl.pathname;

    if (
        pathname === "/login"
    ) {
        return NextResponse.next();
    }

    if (!token) {
        return NextResponse.redirect(
            new URL(
                "/login",
                request.url
            )
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/admin/:path*",
    ],
};