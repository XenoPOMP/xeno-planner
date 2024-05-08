import { afterAll, beforeAll, describe, test } from 'vitest';

import { clearMocks, mockRouter } from '@/__tests__/assets/mocks';
import { expectToRender } from '@/__tests__/assets/utilities';
import SettingsPage from '@/app/(dashboard)/settings/page.tsx';
import RQProvider from '@/src/components/providers/RQProvider/RQProvider.tsx';

describe('Settings page', () => {
  beforeAll(() => {
    mockRouter();
  });

  afterAll(() => {
    clearMocks();
  });

  test('It renders', () => {
    expectToRender(<SettingsPage />, {
      wrapper: RQProvider,
    });
  });
});
