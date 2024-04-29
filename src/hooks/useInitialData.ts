import { useEffect } from 'react';
import { type UseFormReset } from 'react-hook-form';

import { useProfile } from '@/src/hooks/useProfile.ts';
import type { UserFormType } from '@/src/types';

export const useInitialData = (reset: UseFormReset<UserFormType>) => {
  const { data, isSuccess } = useProfile();

  useEffect(() => {
    if (isSuccess && data) {
      reset({
        email: data.user.email,
        name: data.user.name,
        breakInterval: data.user.breakInterval,
        intervalsCount: data.user.intervalsCount,
        workInterval: data.user.workInterval,
      });
    }
  }, [isSuccess]);
};
