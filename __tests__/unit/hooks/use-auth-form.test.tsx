import { afterAll, beforeAll, describe, test } from 'vitest';

import { clearMocks, mockRouter } from '@/__tests__/assets/mocks';
import { expectHookToRender } from '@/__tests__/assets/utilities';
import RQProvider from '@/src/components/providers/RQProvider/RQProvider.tsx';
import { useAuthForm } from '@/src/hooks/useAuthForm.ts';

describe('useAuthForm hook', () => {
  beforeAll(() => {
    mockRouter();
  });

  afterAll(() => {
    clearMocks();
  });

  test('It renders', () => {
    expectHookToRender(() => useAuthForm('login'), {
      wrapper: RQProvider,
    });
  });
});
