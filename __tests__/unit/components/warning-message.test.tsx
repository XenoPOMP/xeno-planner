import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import WarningMessage from '@/src/components/ui/WarningMessage';

describe('WarningMessage component', () => {
  test('It renders', () => {
    expectToRender(<WarningMessage />);
  });
});
