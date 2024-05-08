import { afterAll, beforeAll, describe, test } from 'vitest';

import { clearMocks, mockRouter } from '@/__tests__/assets/mocks';
import { expectToRender } from '@/__tests__/assets/utilities';
import RQProvider from '@/src/components/providers/RQProvider/RQProvider.tsx';
import AccountSettings from '@/src/components/settings/AccountSettings';

describe('Update settings section', () => {
  beforeAll(() => {
    mockRouter();
  });

  afterAll(() => {
    clearMocks();
  });

  test('It renders', () => {
    expectToRender(<AccountSettings />, {
      wrapper: RQProvider,
    });
  });
});
