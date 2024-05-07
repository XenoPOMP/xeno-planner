import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { TimeBlockService } from '@/src/services/time-block.service.ts';
import type { TimeBlockFormStateType } from '@/src/types';

export const useUpdateTimeBlock = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['time blocks', 'create'],
    mutationFn: ({ id, data }: { id: string; data: TimeBlockFormStateType }) =>
      TimeBlockService.updateTimeBlock(id, data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['time blocks', 'list'],
      });
    },
    onError() {
      toast.error('Не удалось обновить блок.');
    },
  });

  return mutate;
};
