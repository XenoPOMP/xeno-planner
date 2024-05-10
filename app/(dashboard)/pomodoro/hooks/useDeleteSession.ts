import { useMutation, useQueryClient } from '@tanstack/react-query';

import { PomodoroService } from '@/src/services/pomodoro.service.ts';

export const useDeleteSession = (onDeleteSuccess: () => void) => {
  const queryClient = useQueryClient();

  const { mutate: deleteSession, isPending } = useMutation({
    mutationKey: ['delete session'],
    mutationFn: (id: string) => PomodoroService.deleteSession(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['get today session'],
      });
      onDeleteSuccess();
    },
  });

  return { deleteSession, isPending };
};
