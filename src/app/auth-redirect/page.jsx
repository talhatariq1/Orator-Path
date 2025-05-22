"use client";

import RedirectHandler from '../components/auth/RedirectHandler';

/**
 * Special page to handle redirects after authentication
 * This page is used when the user is stuck on a redirect page
 */
export default function AuthRedirectPage() {
  return <RedirectHandler />;
}
