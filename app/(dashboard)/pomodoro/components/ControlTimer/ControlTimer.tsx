import cn from 'classnames';
import { Pause, Play } from 'lucide-react';
import { type FC } from 'react';

import { useCreateSession } from '@/app/(dashboard)/pomodoro/hooks/useCreateSession.ts';
import Button from '@/src/components/ui/Button';

import type { ControlTimerProps } from './ControlTimer.props';

const ControlTimer: FC<ControlTimerProps> = ({
  id,
  isRunning,
  actions: { pauseHandler, playHandler, isUpdateRoundPending },
}) => {
  const { createSession } = useCreateSession();

  return !id ? (
    <article className={cn('flex-center')}>
      <Button
        thin
        hollow
        onClick={() => createSession()}
      >
        Создать сессию
      </Button>
    </article>
  ) : (
    <button
      className={cn(
        'flex-center cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed',
      )}
      onClick={isRunning ? pauseHandler : playHandler}
      disabled={isUpdateRoundPending}
    >
      {isRunning ? <Pause size={'1.5em'} /> : <Play size={'1.5em'} />}
    </button>
  );
};

export default ControlTimer;
