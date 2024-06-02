import { renderHook } from '@testing-library/react';
import { describe, test } from 'vitest';

import { expectHookToRender } from '@/__tests__/assets/utilities';
import { ViLogger } from '@/__tests__/assets/utilities/vi-logger.ts';
import RQProvider from '@/src/components/providers/RQProvider/RQProvider.tsx';
import { useLinkedMutation } from '@/src/hooks/useLinkedMutation.ts';

describe('useLinkedMutation test', () => {
  // Shared render function
  const renderFn = () =>
    useLinkedMutation(['test query'], {
      onSuccess() {
        ViLogger.debug('onSuccess call from useLinkedMutation hook.');
      },
    });
  // Shared render options
  const renderOptions = {
    wrapper: RQProvider,
  };

  test('It renders', () => {
    expectHookToRender(renderFn, renderOptions);
  });

  test('onSuccess invalidation works', () => {
    // Render hook and destructurize it to get mutate
    // function.
    const {
      result: {
        current: { mutate },
      },
    } = renderHook(renderFn, renderOptions);

    // Trying to mutate query
    mutate();
  });
});
