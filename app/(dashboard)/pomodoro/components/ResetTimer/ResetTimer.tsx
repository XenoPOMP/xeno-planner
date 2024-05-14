import cn from 'classnames';
import { RefreshCcw, TreePalm } from 'lucide-react';
import { type FC } from 'react';

import { useDeleteSession } from '@/app/(dashboard)/pomodoro/hooks/useDeleteSession.ts';
import { useLoadSettings } from '@/app/(dashboard)/pomodoro/hooks/useLoadSettings.ts';
import WithTooltip from '@/src/components/ui/WithTooltip';

import roundStyles from '../../rounds/PomodoroRounds/PomodoroRounds.module.scss';

import type { ResetTimerProps } from './ResetTimer.props';

// setSecondsLeft(workInterval * 60)

/**
 * This component restarts timer. Also contains
 * timer status badge.
 * @constructor
 */
const ResetTimer: FC<ResetTimerProps> = ({
  id,
  setIsRunning,
  setSecondsLeft,
  isBreakTime,
}) => {
  const { workInterval } = useLoadSettings();

  const { deleteSession, isPending } = useDeleteSession(() => {
    setSecondsLeft(workInterval * 60);
  });

  return (
    <article
      className={cn('flex justify-between', {
        'opacity-0 pointer-events-none': isPending,
      })}
    >
      <div>
        {isBreakTime && (
          <WithTooltip
            as={TreePalm}
            tooltip={{
              id: 'break-time-status-icon',
              content: 'Сейчас идет перерыв',
              placement: 'right',
            }}
          />
        )}
      </div>

      <button
        className={cn(
          roundStyles.withChevron,
          'disabled:opacity-30 disabled:cursor-not-allowed',
          {
            'opacity-0 pointer-events-none': !id,
          },
        )}
        onClick={() => {
          setIsRunning(false);

          if (id) {
            deleteSession(id);
          }
        }}
        disabled={isPending}
      >
        <RefreshCcw />
      </button>
    </article>
  );
};

export default ResetTimer;
