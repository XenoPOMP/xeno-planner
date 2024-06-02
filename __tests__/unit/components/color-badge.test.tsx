import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import ColorBadge from '@/src/components/ui/ColorBadge';

describe('ColorBadge test', () => {
  test('It renders', () => {
    expectToRender(<ColorBadge />);
  });

  test('No hex', () => {
    expectToRender(<ColorBadge hex={false} />);
  });

  test('Colors are being parsed', () => {
    expectToRender(<ColorBadge>tomato</ColorBadge>);
    expectToRender(<ColorBadge>#FFFFFF</ColorBadge>);
  });
});
