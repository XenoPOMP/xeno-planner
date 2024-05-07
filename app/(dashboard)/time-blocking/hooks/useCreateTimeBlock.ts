import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TimeBlockService } from '@/src/services/time-block.service.ts';
import type { TimeBlockFormStateType } from '@/src/types';

export const useCreateTimeBlock = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['time blocking', 'create'],
    mutationFn: (data: TimeBlockFormStateType) =>
      TimeBlockService.createTimeBlock(data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['time blocks', 'list'],
      });
    },
  });

  return mutate;
};
