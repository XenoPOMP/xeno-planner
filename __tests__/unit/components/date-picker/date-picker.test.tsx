import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import DatePicker from '@/src/components/ui/DatePicker';

describe('DatePicker component tests', () => {
  test('It renders', () => {
    expectToRender(<DatePicker position={'right'} />);
  });
});
