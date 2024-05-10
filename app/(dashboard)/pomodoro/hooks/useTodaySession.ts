import { useQuery } from '@tanstack/react-query';
import type { SetState } from '@xenopomp/advanced-types';
import { useEffect } from 'react';

import { PomodoroService } from '@/src/services/pomodoro.service.ts';
import type { IPomodoroRoundResponse } from '@/src/types';

interface IUseTodaySession {
  setActiveRound: SetState<IPomodoroRoundResponse | undefined>;
  setSecondsLeft: SetState<number>;
  workInterval: number;
}

export const useTodaySession = ({
  setActiveRound,
  setSecondsLeft,
  workInterval,
}: IUseTodaySession) => {
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
