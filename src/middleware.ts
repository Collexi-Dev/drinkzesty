import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware does two things:
 *  1. Sets x-locale + x-pathname headers so the root layout can render
 *     a locale-aware <html lang> attribute.
 *  2. Protects /brand/* with HTTP Basic Auth using BRAND_AUTH from env.
 *     Format: BRAND_AUTH="username:password". If unset, /brand/* returns 503
 *     so we never accidentally ship the toolkit publicly.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Brand auth gate
  if (pathname === "/brand" || pathname.startsWith("/brand/")) {
    const expected = process.env.BRAND_AUTH;
    if (!expected) {
      return new NextResponse("Brand toolkit is not configured.", {
        status: 503,
        headers: { "X-Robots-Tag": "noindex, nofollow" },
      });
    }

    const header = request.headers.get("authorization");
    if (header?.startsWith("Basic ")) {
      const decoded = atob(header.slice("Basic ".length));
      if (decoded === expected) {
        const ok = NextResponse.next();
        ok.headers.set("x-locale", "nl-BE");
        ok.headers.set("x-pathname", pathname);
        ok.headers.set("X-Robots-Tag", "noindex, nofollow");
        return ok;
      }
    }

    return new NextResponse("Authentication required.", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Zesty brand toolkit", charset="UTF-8"',
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  // 2. Locale header for everyone else
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "nl-BE";
  const response = NextResponse.next();
  response.headers.set("x-locale", locale);
  response.headers.set("x-pathname", pathname);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};
