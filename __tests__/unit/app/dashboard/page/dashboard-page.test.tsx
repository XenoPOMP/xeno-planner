import { describe, test } from 'vitest';

import { mockRouter } from '@/__tests__/assets/mocks';
import {
  expectToRender,
  injectMocks,
  testObject,
} from '@/__tests__/assets/utilities';
import DashboardPage, {
  generateMetadata,
} from '@/app/(dashboard)/dashboard/page.tsx';
import RQProvider from '@/src/components/providers/RQProvider/RQProvider.tsx';

describe('Dashboard page in routing', () => {
  injectMocks({
    mockingFn: () => {
      mockRouter();
    },
  });

  test('It renders', () => {
    expectToRender(<DashboardPage />, {
      wrapper: RQProvider,
    });
  });

  test('Dashboard metadata is correct', async () => {
    testObject(await generateMetadata());
  });
});
