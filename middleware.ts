import {
  type MiddlewareConfig,
  type NextRequest,
  NextResponse,
} from 'next/server';

import { EnumTokens } from '@/src/services/auth.service.ts';
import { AUTH_PAGES, DASHBOARD_PAGES } from '@/src/types/routes.ts';

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request;

  /** Refresh token from cookies. */
  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

  /** True if current page is auth page. */
  const isAuthPage = url.includes('/auth');

  // Redirect logged user to dashboard
  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url));
  }

  /**
   * If user is not logged and trying
   * to access auth page, pass him.
   */
  if (isAuthPage) {
    return NextResponse.next();
  }

  /**
   * If user is not logged and trying to access
   * any other page, like dashboard pages,
   * redirect him to auth page.
   */
  if (!refreshToken) {
    return NextResponse.redirect(new URL(AUTH_PAGES.LOGIN, request.url));
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: [
    '/',
    '/dashboard',
    '/pomodoro',
    '/settings',
    '/tasks',
    '/time-blocking',
    '/auth/:path*',
  ],
};
