import { describe, test, vi } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import ResetTimer from '@/app/(dashboard)/pomodoro/components/ResetTimer';
import RQProvider from '@/src/components/providers/RQProvider/RQProvider.tsx';

describe('ResetTimer component tests', () => {
  test('It renders', () => {
    expectToRender(
      <ResetTimer
        id={'-1 DOES NOT EXIST'}
        setIsRunning={vi.fn}
        setSecondsLeft={vi.fn}
        isBreakTime={false}
      />,
      {
        wrapper: RQProvider,
      },
    );
  });
});
