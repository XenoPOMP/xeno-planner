import { describe } from 'vitest';

import { testNextPage } from '@/__tests__/assets/utilities';
import TimeBlockingPage, {
  generateMetadata,
} from '@/app/(dashboard)/time-blocking/page.tsx';

describe('Time blocking page tests', () => {
  testNextPage(<TimeBlockingPage />, {
    generateMetadata,
  });
});
