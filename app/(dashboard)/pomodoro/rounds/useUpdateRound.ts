import { useMutation, useQueryClient } from '@tanstack/react-query';

import { PomodoroService } from '@/src/services/pomodoro.service.ts';
import type { PomodoroRoundFormStateType } from '@/src/types';

interface IUseUpdateRoundMutationData {
  id: string;
  data: PomodoroRoundFormStateType;
}

export const useUpdateRound = () => {
  const queryClient = useQueryClient();

  const { mutate: updateRound, isPending: isUpdateRoundPending } = useMutation({
    mutationKey: ['update round'],
    mutationFn: ({ id, data }: IUseUpdateRoundMutationData) =>
      PomodoroService.updateRound(id, data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['get today session'],
      });
    },
  });

  return { updateRound, isUpdateRoundPending };
};
