import { describe } from 'vitest';

import { testNextPage } from '@/__tests__/assets/utilities';
import AuthLayout, { generateMetadata } from '@/app/auth/layout.tsx';

describe('Auth pages layout tests', () => {
  testNextPage(<AuthLayout />, {
    generateMetadata,
  });
});
