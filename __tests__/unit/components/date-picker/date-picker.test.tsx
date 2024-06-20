import { cleanup } from '@testing-library/react';
import { afterEach, describe, test } from 'vitest';

import { assertNotThrowing } from '@/__tests__/assets/assertions';
import { expectToRender } from '@/__tests__/assets/utilities';
import { renderDatePickerTest } from '@/__tests__/unit/components/date-picker/TestDatePicker.tsx';
import DatePicker from '@/src/components/ui/DatePicker';

describe('DatePicker component tests', () => {
  afterEach(() => cleanup());

  test('It renders', () => {
    expectToRender(<DatePicker position={'right'} />);
  });

  test('Toggle button works', () => {
    const { toggle } = renderDatePickerTest({});

    // Click toggle button twice
    assertNotThrowing(() => toggle());
    assertNotThrowing(() => toggle());
  });
});
