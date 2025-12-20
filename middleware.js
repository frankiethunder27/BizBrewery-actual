// Auth temporarily disabled to preview the app
// Re-enable when Google OAuth is set up

export default function middleware(req) {
  // No auth check - allow all access
  return;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
