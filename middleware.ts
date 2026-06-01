import { NextResponse, type NextRequest } from "next/server";

const allowedOrigins = new Set(["https://videosnap.io", "http://localhost:3000"]);

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const origin = request.headers.get("origin");
  const isDevelopment = process.env.NODE_ENV !== "production";
  const scriptSrc = [
    "'self'",
    "'unsafe-inline'",
    isDevelopment ? "'unsafe-eval'" : null,
    "https://www.googletagmanager.com",
    "https://pagead2.googlesyndication.com",
  ]
    .filter(Boolean)
    .join(" ");

  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Content-Security-Policy",
    `default-src 'self'; img-src 'self' data: https:; script-src ${scriptSrc}; style-src 'self' 'unsafe-inline'; frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com; connect-src 'self' https://*.supabase.co https://www.google-analytics.com`,
  );

  if (request.nextUrl.pathname.startsWith("/api") && origin && !allowedOrigins.has(origin)) {
    return NextResponse.json({ error: "CORS blocked" }, { status: 403 });
  }

  if (request.nextUrl.pathname.startsWith("/api/extract")) {
    const url = request.nextUrl.searchParams.get("url");
    if (url && /^(javascript:|data:)/i.test(url)) {
      return NextResponse.json({ error: "Blocked URL scheme" }, { status: 400 });
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
