import { type SubmitHandler, useFormContext } from 'react-hook-form';
import { toast } from 'sonner';

import { useCreateTimeBlock } from '@/app/(dashboard)/time-blocking/hooks/useCreateTimeBlock.ts';
import type { TimeBlockFormStateType } from '@/src/types';

export const useBlockForm = () => {
  const createBlock = useCreateTimeBlock();
  const { reset } = useFormContext<TimeBlockFormStateType>();

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
      // TODO Update form logic
    } else {
      createBlock(formattedData);
    }

    reset();
  };

  return { onSubmit };
};
