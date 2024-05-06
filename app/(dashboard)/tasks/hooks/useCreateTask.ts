import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { TaskService } from '@/src/services/task.service.ts';
import type { TaskFormStateType } from '@/src/types';

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: createTask } = useMutation({
    mutationKey: ['create task'],
    mutationFn: (data: TaskFormStateType) => TaskService.createTask(data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
    },
    onError() {
      toast.error('Не удалось создать задачу');
    },
  });

  return { createTask };
};
