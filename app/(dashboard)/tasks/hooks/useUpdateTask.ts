import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TaskService } from '@/src/services/task.service.ts';
import type { TaskFormStateType } from '@/src/types';

export const useUpdateTask = (key?: string) => {
  const queryClient = useQueryClient();

  const { mutate: updateTask } = useMutation({
    mutationKey: ['update task', key],
    mutationFn: ({ id, data }: { id: string; data: TaskFormStateType }) =>
      TaskService.updateTask(id, data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
    },
  });

  return { updateTask };
};
