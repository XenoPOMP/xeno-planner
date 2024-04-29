import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import VerificationPageLayout from '@/app/auth/verify/layout.tsx';

describe('Verify page layout', () => {
  test('It renders', () => {
    expectToRender(<VerificationPageLayout />);
  });
});
