import { describe, test } from 'vitest';

import { testObject } from '@/__tests__/assets/utilities';
import { NO_AUTOCOMPLETE } from '@/src/constants/fields.constants.ts';
import { NEW_BLOCK_FORM_ID } from '@/src/constants/ids.constants.ts';
import { NO_INDEX_PAGE } from '@/src/constants/seo.constants';
import { MINUTES_IN_DAY } from '@/src/constants/time.constants.ts';
import { FIELD_IS_REQUIRED } from '@/src/constants/validation.constants.ts';

describe('Test all constants', () => {
  test('SEO', () => {
    testObject(NO_INDEX_PAGE);
  });

  test('Fields constants', () => {
    testObject(NO_AUTOCOMPLETE);
  });

  test('Validation constants', () => {
    testObject(FIELD_IS_REQUIRED);
  });

  test('Time constants', () => {
    testObject({
      MINUTES_IN_DAY,
    });
  });

  test('IDs constants', () => {
    testObject({
      NEW_BLOCK_FORM_ID,
    });
  });
});
