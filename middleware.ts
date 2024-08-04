import { type MiddlewareConfig, NextResponse } from 'next/server';

import { auth } from '@/auth';
import { AUTH_PAGES, DASHBOARD_PAGES } from '@/src/types/routes.ts';

export const middleware = auth(req => {
  const { url } = req;

  // True if current page is auth page.
  const isAuthPage = url.includes('/auth');
  // True if user is authenticated
  const isAuthenticated = !!req.auth;

  // Redirect logged user to dashboard, if auth page is opened
  if (isAuthPage && isAuthenticated) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url));
  }

  // If user is not logged and trying
  // to access auth page, pass him.
  if (isAuthPage) {
    return NextResponse.next();
  }

  // If user is not logged and trying to access
  // any other page, like dashboard pages,
  // redirect him to auth page.
  if (!isAuthPage) {
    return NextResponse.redirect(new URL(AUTH_PAGES.LOGIN, req.url));
  }

  return NextResponse.next();
});

export const config: MiddlewareConfig = {
  matcher: [
    // '/',
    '/dashboard',
    '/pomodoro',
    '/settings',
    '/tasks/(.*)',
    '/time-blocking',
    '/auth/login',
    '/auth/register',
  ],
};
