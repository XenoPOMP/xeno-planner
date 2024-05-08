import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import { toast } from 'sonner';

import { TimeBlockService } from '@/src/services/time-block.service.ts';
import type { TimeBlockFormStateType } from '@/src/types';

import { RESET_DATA } from '../data/reset.data.ts';

export const useUpdateTimeBlock = () => {
  const queryClient = useQueryClient();
  const { reset } = useFormContext<TimeBlockFormStateType>();

  const { mutate } = useMutation({
    mutationKey: ['time blocks', 'create'],
    mutationFn: ({ id, data }: { id: string; data: TimeBlockFormStateType }) =>
      TimeBlockService.updateTimeBlock(id, data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['time blocks', 'list'],
      });

      reset(RESET_DATA);
    },
    onError() {
      toast.error('Не удалось обновить блок.');
    },
  });

  return mutate;
};
