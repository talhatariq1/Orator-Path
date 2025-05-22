import { NextResponse } from 'next/server';

// Server-side redirect from /home to /dashboard
export function GET() {
  // Create a URL object for the dashboard page
  const dashboardUrl = new URL('/dashboard', process.env.NEXT_PUBLIC_URL || 'http://localhost:3000');

  // Return a redirect response
  return NextResponse.redirect(dashboardUrl, { status: 307 });
}
