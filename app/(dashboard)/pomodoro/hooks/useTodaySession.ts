import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { useLoadSettings } from '@/app/(dashboard)/pomodoro/hooks/useLoadSettings.ts';
import type { ITimerState } from '@/app/(dashboard)/pomodoro/timer.types.ts';
import { PomodoroService } from '@/src/services/pomodoro.service.ts';

export const useTodaySession = ({
  setActiveRound,
  setSecondsLeft,
}: ITimerState) => {
  const { workInterval } = useLoadSettings();

  const {
    data: sessionResponse,
    isSuccess,
    ...rest
  } = useQuery({
    queryKey: ['get today session'],
    queryFn: () => PomodoroService.getTodaySession(),
  });

  const rounds = sessionResponse?.rounds;

  useEffect(() => {
    if (isSuccess && rounds) {
      const activeRound = rounds.find(round => !round.isCompleted);
      setActiveRound(activeRound);

      if (activeRound && activeRound.totalSeconds !== 0) {
        setSecondsLeft(workInterval - activeRound.totalSeconds);
      }
    }
  }, [isSuccess, rounds]);

  return { sessionResponse, isSuccess, ...rest };
};
