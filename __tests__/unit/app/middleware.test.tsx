import { NextRequest, NextResponse } from 'next/server';
import { afterAll, beforeAll, describe, test } from 'vitest';

import { assertNotThrowing } from '@/__tests__/assets/assertions';
import { clearMocks, mockRouter } from '@/__tests__/assets/mocks';
import { middleware } from '@/middleware.ts';
import { DASHBOARD_PAGES } from '@/src/types/routes.ts';

describe('Next.js middleware', () => {
  beforeAll(() => {
    mockRouter();
  });

  afterAll(() => {
    clearMocks();
  });

  /** Generates mock request and response objects. */
  const issueConfig = (
    requestConfig: ConstructorParameters<typeof NextRequest> = [
      new URL('http://localhost:3000'),
    ],
  ): [request: NextRequest, response: NextResponse] => {
    const req = new NextRequest(...requestConfig);
    const res = new NextResponse();
    return [req, res];
  };

  test('It not throwing', async (): Promise<void> => {
    assertNotThrowing(async () => await middleware(...issueConfig()));
  });

  test('Checks for refreshToken', () => {
    const [req, res] = issueConfig([new URL('http://localhost:3000/auth')]);
    req.cookies.set('refreshToken', 'someToken');

    // Asserts for correct middleware work
    assertNotThrowing(async () => await middleware(req, res));
  });

  test('Checks if current page is auth', () => {
    const [req, res] = issueConfig([new URL('http://localhost:3000/auth')]);

    // Asserts for correct middleware work
    assertNotThrowing(async () => await middleware(req, res));
  });

  test('If logged, pass him to page', () => {
    const [req, res] = issueConfig([
      new URL(`http://localhost:3000${DASHBOARD_PAGES.HOME}`),
    ]);
    req.cookies.set('refreshToken', 'someToken');

    // Asserts for correct middleware work
    assertNotThrowing(async () => await middleware(req, res));
  });
});
