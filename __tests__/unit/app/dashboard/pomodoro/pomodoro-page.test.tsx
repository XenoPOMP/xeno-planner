import { describe } from 'vitest';

import { testNextPage } from '@/__tests__/assets/utilities';
import PomodoroPage, {
  generateMetadata,
} from '@/app/(dashboard)/pomodoro/page.tsx';

describe('Pomodoro page', () => {
  testNextPage(<PomodoroPage />, { generateMetadata });
});
