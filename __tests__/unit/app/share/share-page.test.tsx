import { beforeAll, describe, expect, test, vi } from 'vitest';

import { mockEnv } from '@/__tests__/assets/mocks/mockEnv.ts';
import { testNextPage } from '@/__tests__/assets/utilities';
import { generateQrCodeUrl } from '@/app/(landing)/share/generateQrCodeUrl.ts';
import SharePage, { generateMetadata } from '@/app/(landing)/share/page.tsx';

describe('Share page (with QR-code) test', () => {
  beforeAll(() => {
    mockEnv({
      CANONICAL_URL: 'http://localhost:4242',
    });
  });

  testNextPage(<SharePage searchParams={{ route: '' }} />, {
    generateMetadata,
  });

  test('QR-code URL generation works', () => {
    // No route provided
    expect(generateQrCodeUrl(process.env.CANONICAL_URL)).toBe(
      'http://localhost:4242',
    );

    expect(generateQrCodeUrl(process.env.CANONICAL_URL, 'dashboard')).toBe(
      'http://localhost:4242/dashboard',
    );
  });

  test('Check if default canonical is applied', () => {
    // Clear all mocks
    vi.unstubAllEnvs();

    // No route provided
    expect(generateQrCodeUrl(process.env.CANONICAL_URL)).toBe(
      'http://localhost:3000',
    );
  });
});
