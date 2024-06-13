import { describe } from 'vitest';

import { testNextPage } from '@/__tests__/assets/utilities';
import ChangelogLayout from '@/app/changelog/layout.tsx';

describe('Changelog page layout tests', () => {
  testNextPage(<ChangelogLayout />);
});
