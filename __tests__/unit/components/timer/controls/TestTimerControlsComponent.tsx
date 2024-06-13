import { render } from '@testing-library/react';
import { type ComponentProps, type FC } from 'react';
import { vi } from 'vitest';

import ControlTimer from '@/app/(dashboard)/pomodoro/components/ControlTimer';
import RQProvider from '@/src/components/providers/RQProvider/RQProvider.tsx';

const TestTimerControlsComponent: FC<
  {} & Partial<ComponentProps<typeof ControlTimer>>
> = ({
  id = '-1 NOT EXISTING',
  isRunning = false,
  actions = {
    isUpdateRoundPending: false,
    pauseHandler: vi.fn,
    playHandler: vi.fn,
    nextRoundHandler: vi.fn,
    prevRoundHandler: vi.fn,
  },
}) => {
  return (
    <>
      <ControlTimer
        id={id}
        isRunning={isRunning}
        actions={actions}
      />
    </>
  );
};

export const renderTimerControlTest = (
  props?: ComponentProps<typeof TestTimerControlsComponent>,
) => {
  const result = render(<TestTimerControlsComponent {...props} />, {
    wrapper: RQProvider,
  });

  return {
    result,
  };
};
