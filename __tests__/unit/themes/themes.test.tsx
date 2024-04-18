import { describe, test } from 'vitest';

import { testObject } from '@/__tests__/assets/utilities';
import { darkTheme, lightTheme } from '@/src/themes';

describe('App themes', () => {
  test('Test as object', () => {
    testObject(darkTheme);
    testObject(lightTheme);
  });
});
