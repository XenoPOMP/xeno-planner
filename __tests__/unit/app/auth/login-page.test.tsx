import { describe } from 'vitest';

import { testNextPage } from '@/__tests__/assets/utilities';
import LoginPage, { generateMetadata } from '@/app/auth/login/page.tsx';

describe('Login page tests', () => {
  testNextPage(<LoginPage />, {
    generateMetadata,
  });
});
