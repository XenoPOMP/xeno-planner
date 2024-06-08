import { describe } from 'vitest';

import { testNextPage } from '@/__tests__/assets/utilities';
import ListViewTasksPage from '@/app/(dashboard)/tasks/list-view/page.tsx';

describe('List view tasks page', () => {
  testNextPage(<ListViewTasksPage />);
});
