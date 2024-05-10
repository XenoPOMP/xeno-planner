import { useQuery } from '@tanstack/react-query';

import { PomodoroService } from '@/src/services/pomodoro.service.ts';

export const useTodaySession = () => {
  const { data: sessionResponse, ...rest } = useQuery({
    queryKey: ['get today session'],
    queryFn: () => PomodoroService.getTodaySession(),
  });

  return { sessionResponse, ...rest };
};
