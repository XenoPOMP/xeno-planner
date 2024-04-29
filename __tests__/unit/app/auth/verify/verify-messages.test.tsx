import { describe, expect, test } from 'vitest';

import {
  expectToDeepEqual,
  expectToRender,
} from '@/__tests__/assets/utilities';
import VerificationAcceptedPage, {
  generateMetadata as acceptedMetadata,
} from '@/app/auth/verify/accepted/page.tsx';
import VerificationExpiredPage, {
  generateMetadata as expiredMetadata,
} from '@/app/auth/verify/expired/page.tsx';

describe('Verification messages test', () => {
  test('Accepted renders', () => {
    expectToRender(<VerificationAcceptedPage />);
  });

  test('Accepted metadata is correct', async () => {
    const { title, robots } = await acceptedMetadata();

    expect(title).toBe('Аккаунт подтвержден');
    expectToDeepEqual(robots, { index: false, follow: false });
  });

  test('Expired renders', () => {
    expectToRender(<VerificationExpiredPage />);
  });

  test('Expired metadata is correct', async () => {
    const { title, robots } = await expiredMetadata();

    expect(title).toBe('Письмо недействительно');
    expectToDeepEqual(robots, { index: false, follow: false });
  });
});
