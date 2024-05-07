import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

import { TimeBlockService } from '@/src/services/time-block.service.ts';
import type { TimeBlockFormStateType } from '@/src/types';

import { RESET_DATA } from '../data/reset.data.ts';

export const useCreateTimeBlock = () => {
  const queryClient = useQueryClient();
  const { reset } = useFormContext<TimeBlockFormStateType>();

  const { mutate } = useMutation({
    mutationKey: ['time blocks', 'create'],
    mutationFn: (data: TimeBlockFormStateType) =>
      TimeBlockService.createTimeBlock(data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['time blocks', 'list'],
      });

      reset(RESET_DATA);
    },
  });

  return mutate;
};
