import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { UserService } from '@/src/services/user.service.ts';
import type { UserFormType } from '@/src/types';

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['update profile'],
    mutationFn: (data: UserFormType) => UserService.update(data),
    onSuccess() {
      toast.success('Профиль был успешно обновлен');
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
    onError() {
      toast.error('Произошла ошибка при обновлении профиля!');
    },
  });

  return {
    mutate,
    isPending,
  };
};
