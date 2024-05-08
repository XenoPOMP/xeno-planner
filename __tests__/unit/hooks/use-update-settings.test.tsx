import { describe, test } from 'vitest';

import { expectHookToRender } from '@/__tests__/assets/utilities';
import RQProvider from '@/src/components/providers/RQProvider/RQProvider.tsx';
import { useUpdateSettings } from '@/src/hooks/useUpdateSettings.ts';

describe('useUpdateSettings hook', () => {
  test('It renders', () => {
    expectHookToRender(useUpdateSettings, {
      wrapper: RQProvider,
    });
  });
});
