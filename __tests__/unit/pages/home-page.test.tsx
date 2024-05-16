import { describe, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import Home from '@/app/page';
import RQProvider from '@/src/components/providers/RQProvider/RQProvider.tsx';

describe('Index page', () => {
  test('Render without errors', () => {
    expectToRender(<Home />, { wrapper: RQProvider });
  });
});
