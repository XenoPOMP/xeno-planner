import { afterAll, beforeAll, describe, test } from 'vitest';

import { clearMocks, mockFonts } from '@/__tests__/assets/mocks';
import { expectToRender } from '@/__tests__/assets/utilities';
import DesignSystem from '@/src/components/ui/DesignSystem';

describe('DesignSystem component', () => {
  beforeAll(() => {
    mockFonts();
  });

  afterAll(() => {
    clearMocks();
  });

  test('It renders', () => {
    expectToRender(<DesignSystem />);
  });
});
