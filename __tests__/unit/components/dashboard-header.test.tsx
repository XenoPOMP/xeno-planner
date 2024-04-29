import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import DashboardHeader from '@/src/components/layout/DashboardHeader';
import RQProvider from '@/src/components/providers/RQProvider/RQProvider.tsx';

describe('DashboardHeader component', () => {
  test('It renders', () => {
    expectToRender(<DashboardHeader />, { wrapper: RQProvider });
    expectToRender(<DashboardHeader heading={'It is a heading'} />, {
      wrapper: RQProvider,
    });
  });
});
