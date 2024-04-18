import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import DashboardPageLayout from '@/app/(dashboard)/layout.tsx';

describe('Dashboard layout components', () => {
  test('DashboardPageLayout renders', () => {
    expectToRender(<DashboardPageLayout />);
  });
});
