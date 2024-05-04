'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { TaskService } from '@/src/services/task.service.ts';
import type { ITaskResponse } from '@/src/types';

export const useTasks = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => TaskService.getTasks(),
  });

  const [items, setItems] = useState<ITaskResponse[] | undefined>(data);

  useEffect(() => {
    setItems(data);
  }, [data]);

  return {
    tasks: items,
    isLoading,
  };
};
