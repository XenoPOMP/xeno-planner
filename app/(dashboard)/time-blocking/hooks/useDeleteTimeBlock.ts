import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TimeBlockService } from '@/src/services/time-block.service.ts';

export const useDeleteTimeBlock = (key?: string) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['time blocks', 'delete', key],
    mutationFn: (id: string) => TimeBlockService.deleteTimeBlock(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['time blocks', 'list'],
      });
    },
  });

  return mutate;
};
