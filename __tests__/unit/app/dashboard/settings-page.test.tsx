import { describe } from 'vitest';

import { testNextPage } from '@/__tests__/assets/utilities';
import SettingsPage, {
  generateMetadata,
} from '@/app/(dashboard)/settings/page.tsx';

describe('Settings page tests', () => {
  testNextPage(<SettingsPage />, {
    generateMetadata,
  });
});
