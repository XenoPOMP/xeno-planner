import { describe } from 'vitest';

import { testNextPage } from '@/__tests__/assets/utilities';
import DashboardPage, {
  generateMetadata,
} from '@/app/(dashboard)/dashboard/page.tsx';

describe('Dashboard page in routing', () => {
  testNextPage(<DashboardPage />, {
    generateMetadata,
  });
});
