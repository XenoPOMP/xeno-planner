import { describe, test } from 'vitest';

import { assertNotThrowing } from '@/__tests__/assets/assertions';
import { renderAuthFormTest } from '@/__tests__/assets/components/TestAuthFormComponent.tsx';
import { ViLogger } from '@/__tests__/assets/utilities/vi-logger.ts';

describe('AuthForm tests', () => {
  test('Disallow default event', () => {
    const { submit } = renderAuthFormTest({
      onSubmit: () => {
        ViLogger.debug('Calling onSubmit method of AuthForm....');
      },
      allowDefaultEvent: false,
    });

    assertNotThrowing(() => submit());
  });
});
