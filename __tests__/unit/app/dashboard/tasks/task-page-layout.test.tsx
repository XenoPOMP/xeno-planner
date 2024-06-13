import { describe } from 'vitest';

import { testNextPage } from '@/__tests__/assets/utilities';
import TaskPageLayout, {
  generateMetadata,
} from '@/app/(dashboard)/tasks/layout.tsx';

describe('Layout of task pages', () => {
  testNextPage(<TaskPageLayout />, {
    generateMetadata,
  });
});
