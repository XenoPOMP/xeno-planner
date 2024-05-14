import type { IPomodoroRoundResponse } from '@/src/types';

import type { ITimerState } from '../timer.types.ts';

import { useLoadSettings } from './useLoadSettings.ts';
import { useUpdateRound } from './useUpdateRound.ts';

type UseTimerActionsType = ITimerState & {
  rounds: IPomodoroRoundResponse[] | undefined;
};

export const useTimerActions = ({
  activeRound,
  secondsLeft,
  setIsRunning,
  // setActiveRound,
  // setSecondsLeft,
  rounds,
}: UseTimerActionsType) => {
  const { workInterval } = useLoadSettings();
  const { updateRound, isUpdateRoundPending } = useUpdateRound();

  const pauseHandler = () => {
    setIsRunning(false);

    if (activeRound?.id) {
      updateRound({
        id: activeRound?.id,
        data: {
          totalSeconds: secondsLeft,
          isCompleted: Math.floor(secondsLeft / 60) >= workInterval,
        },
      });
    }
  };

  const playHandler = () => {
    setIsRunning(true);
  };

  const nextRoundHandler = () => {
    if (!activeRound?.id) {
      return;
    }

    updateRound({
      id: activeRound?.id,
      data: {
        isCompleted: true,
        totalSeconds: workInterval * 60,
      },
    });
  };

  const prevRoundHandler = () => {
    const lastCompletedRound = rounds
      ?.filter(round => round.isCompleted)
      .at(-1);

    if (!lastCompletedRound?.id) {
      return;
    }

    updateRound({
      id: lastCompletedRound?.id,
      data: {
        isCompleted: false,
        totalSeconds: 0,
      },
    });
  };

  return {
    isUpdateRoundPending,
    pauseHandler,
    playHandler,
    nextRoundHandler,
    prevRoundHandler,
  };
};
