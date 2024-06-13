import { describe } from 'vitest';

import { testNextPage } from '@/__tests__/assets/utilities';
import RegisterPage, { generateMetadata } from '@/app/auth/register/page.tsx';

describe('Register page tests', () => {
  testNextPage(<RegisterPage />, { generateMetadata });
});
