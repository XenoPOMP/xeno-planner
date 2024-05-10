'use client';

import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { useTimer } from '@/app/(dashboard)/pomodoro/hooks/useTimer.ts';
import { useTimerActions } from '@/app/(dashboard)/pomodoro/hooks/useTimerActions.ts';
import { useTodaySession } from '@/app/(dashboard)/pomodoro/hooks/useTodaySession.ts';
import PomodoroRounds from '@/app/(dashboard)/pomodoro/rounds/PomodoroRounds';
import CircleLoader from '@/src/components/ui/CircleLoader';

import ControlTimer from '../ControlTimer';
import Countdown from '../Countdown';
import ResetTimer from '../ResetTimer';

import styles from './Timer.module.scss';
import type { TimerProps } from './Timer.props.ts';

/**
 * Contains all logic for pomodoro timer.
 *
 * @param children
 * @param className
 * @param props
 * @constructor
 */
const Timer: VariableFC<'section', TimerProps, 'children'> = ({
  className,
  ...props
}) => {
  const timerState = useTimer();
  const { isLoading, sessionResponse } = useTodaySession(timerState);

  const rounds = sessionResponse?.rounds;
  const actions = useTimerActions({
    ...timerState,
    rounds,
  });

  return (
    <section
      className={cn('flex flex-col gap-[1em] w-fit', styles.timer, className)}
      {...props}
    >
      {isLoading ? (
        <CircleLoader />
      ) : (
        <>
          <ResetTimer
            id={sessionResponse?.id}
            setIsRunning={timerState.setIsRunning}
            setSecondsLeft={timerState.setSecondsLeft}
          />

          <div className={cn(styles.body)}>
            <Countdown secondsLeft={timerState.secondsLeft} />

            {sessionResponse?.id && (
              <PomodoroRounds
                rounds={rounds}
                activeRound={timerState.activeRound}
                nextRoundHandler={actions.nextRoundHandler}
                prevRoundHandler={actions.prevRoundHandler}
              />
            )}
          </div>

          <ControlTimer
            id={sessionResponse?.id}
            isRunning={timerState.isRunning}
            actions={actions}
          />
        </>
      )}
    </section>
  );
};

export default Timer;
