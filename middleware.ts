import { type MiddlewareConfig, NextResponse } from 'next/server';

import { auth } from '@/auth';

export default auth(_req => {
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
