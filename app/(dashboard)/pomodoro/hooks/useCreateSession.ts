import { useMutation, useQueryClient } from '@tanstack/react-query';

import { PomodoroService } from '@/src/services/pomodoro.service.ts';

export const useCreateSession = () => {
  const queryClient = useQueryClient();

  const { mutate: createSession, isPending } = useMutation({
    mutationKey: ['create new session'],
    mutationFn: () => PomodoroService.createSession(),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['get today session'],
      });
    },
  });

  return { createSession, isPending };
};
