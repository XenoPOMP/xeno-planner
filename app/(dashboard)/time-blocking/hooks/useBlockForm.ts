import { type SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

import type { TimeBlockFormStateType } from '@/src/types';

import { useCreateTimeBlock } from './useCreateTimeBlock.ts';
import { useUpdateTimeBlock } from './useUpdateTimeBlock.ts';

export const useBlockForm = () => {
  const createBlock = useCreateTimeBlock();
  const updateBlock = useUpdateTimeBlock();

  const onSubmit: SubmitHandler<TimeBlockFormStateType> = ({
    duration,
    id,
    ...data
  }) => {
    const formattedData = {
      duration: +(duration || '0'),
      ...data,
    };

    if (!formattedData.name) {
      toast.error('Вы не ввели название блока!');
      return;
    }

    /** Update existing block. */
    if (id) {
      updateBlock({
        id,
        data: formattedData,
      });
    } else {
      createBlock(formattedData);
    }
  };

  return { onSubmit };
};
