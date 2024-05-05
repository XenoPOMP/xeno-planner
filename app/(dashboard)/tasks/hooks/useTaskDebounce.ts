import debounce from 'lodash.debounce';
import { useCallback, useEffect } from 'react';
import { type UseFormWatch } from 'react-hook-form';

import type { TaskFormStateType } from '@/src/types';

import { useCreateTask } from './useCreateTask.ts';
import { useUpdateTask } from './useUpdateTask.ts';

interface IUseTaskDebounce {
  watch: UseFormWatch<TaskFormStateType>;
  itemId: string;
}

export const useTaskDebounce = ({ watch, itemId }: IUseTaskDebounce) => {
  const { createTask } = useCreateTask();
  const { updateTask } = useUpdateTask();

  const debouncedCreateTask = useCallback(
    debounce((formData: TaskFormStateType) => {
      createTask(formData);
    }, 444),
    [],
  );

  const debouncedUpdateTask = useCallback(
    debounce((formData: TaskFormStateType) => {
      updateTask({
        id: itemId,
        data: formData,
      });
    }, 444),
    [],
  );

  useEffect(() => {
    const { unsubscribe } = watch(formData => {
      if (itemId) {
        debouncedUpdateTask({
          ...formData,
          priority: formData.priority || undefined,
        });
      } else {
        debouncedCreateTask(formData);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [watch(), debouncedUpdateTask, debouncedCreateTask]);

  return {};
};
