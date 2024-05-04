import { useQuery } from '@tanstack/react-query';

import { TaskService } from '@/src/services/task.service.ts';

export const useTasks = () => {
  const { data } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => TaskService.getTasks(),
  });

  return {
    tasks: data,
  };
};
