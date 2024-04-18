import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import HtmlHeading from '@/src/components/ui/Heading';

describe('HtmlHeading component', () => {
  test('It renders', () => {
    expectToRender(<HtmlHeading as={'h1'} />);
  });
});
