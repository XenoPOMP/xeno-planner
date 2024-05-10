import type { useForm } from 'react-hook-form';

import { type useUpdateTask } from '@/app/(dashboard)/tasks/hooks/useUpdateTask.ts';
import type { ITaskResponse, TaskFormStateType } from '@/src/types';

export type FormHookResult = ReturnType<typeof useForm<TaskFormStateType>>;

type UpdateTaskHookResult = ReturnType<typeof useUpdateTask>;

export interface TaskCheckboxProps
  extends Pick<FormHookResult, 'register'>,
    Pick<UpdateTaskHookResult, 'updateTask'>,
    Pick<ITaskResponse, 'isCompleted'> {
  taskId: ITaskResponse['id'];
}
