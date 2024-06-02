import { describe, test } from 'vitest';

import { expectToDeepEqual } from '@/__tests__/assets/utilities';
import { isDragging } from '@/src/utils/react/data-attributes';

describe('isDragging func', () => {
  test('It returns correct "data-is-dragging"  attr key-value pair', () => {
    expectToDeepEqual(isDragging(), {
      'data-is-dragging': false,
    });
  });
});
