import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TaskService } from '@/src/services/task.service.ts';

export const useDeleteTask = (key?: string) => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask } = useMutation({
    mutationKey: ['delete task', key],
    mutationFn: ({ id }: { id: string }) => TaskService.deleteTask(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
    },
  });

  return { deleteTask };
};
