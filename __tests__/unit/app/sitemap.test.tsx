import { afterAll, beforeAll, describe, test, vi } from 'vitest';

import { clearMocks } from '@/__tests__/assets/mocks';
import { mockEnv } from '@/__tests__/assets/mocks/mockEnv';
import { expectToDeepEqual, testObject } from '@/__tests__/assets/utilities';
import { AppConstants } from '@/app/app.constants.ts';
import sitemap from '@/app/sitemap';

describe('Next.js sitemap generation', () => {
  beforeAll(() => {
    mockEnv();
  });

  afterAll(() => {
    clearMocks();
  });

  test('It works', () => {
    testObject(sitemap());
  });

  test('Canonical url equals to constant value by default', async () => {
    vi.unstubAllEnvs();
    testObject(sitemap());
  });

  test('All routes are added to sitemap', () => {
    const CANONICAL = AppConstants.defaultCanonical;

    const expected: string[] = [
      CANONICAL,
      // `${CANONICAL}/dashboard`,
      // `${CANONICAL}/tasks`,
      // `${CANONICAL}/pomodoro`,
      // `${CANONICAL}/time-blocking`,
      // `${CANONICAL}/settings`,
    ];
    const real = sitemap().map(({ url }) => url);

    expectToDeepEqual(expected, real);
  });
});
