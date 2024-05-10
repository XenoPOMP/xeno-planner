import cn from 'classnames';
import { RefreshCcw } from 'lucide-react';
import { type FC } from 'react';

import { useDeleteSession } from '@/app/(dashboard)/pomodoro/hooks/useDeleteSession.ts';
import { useLoadSettings } from '@/app/(dashboard)/pomodoro/hooks/useLoadSettings.ts';

import roundStyles from '../../rounds/PomodoroRounds/PomodoroRounds.module.scss';

import styles from './ResetTimer.module.scss';
import type { ResetTimerProps } from './ResetTimer.props';

// setSecondsLeft(workInterval * 60)

/**
 * This component restarts timer.
 * @constructor
 */
const ResetTimer: FC<ResetTimerProps> = ({
  id,
  setIsRunning,
  setSecondsLeft,
}) => {
  const { workInterval } = useLoadSettings();

  const { deleteSession, isPending } = useDeleteSession(() => {
    setSecondsLeft(workInterval * 60);
  });

  return (
    <button
      className={cn(
        styles.reset,
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
  );
};

export default ResetTimer;
