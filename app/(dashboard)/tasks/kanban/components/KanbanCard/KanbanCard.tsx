import cn from 'classnames';
import { type FC } from 'react';
import { useForm } from 'react-hook-form';

import TaskBadgeSelect from '@/app/(dashboard)/tasks/components/TaskBadgeSelect';
import TaskCheckbox from '@/app/(dashboard)/tasks/components/TaskCheckbox';
import TaskDatePicker from '@/app/(dashboard)/tasks/components/TaskDatePicker';
import { useTaskDebounce } from '@/app/(dashboard)/tasks/hooks/useTaskDebounce.ts';
import { useUpdateTask } from '@/app/(dashboard)/tasks/hooks/useUpdateTask.ts';
import type { TaskFormStateType } from '@/src/types';

import styles from './KanbanCard.module.scss';
import type { KanbanCardProps } from './KanbanCard.props';

const KanbanCard: FC<KanbanCardProps> = ({ task }) => {
  const { control, watch, register } = useForm<TaskFormStateType>({
    defaultValues: {
      name: task.name,
      isCompleted: task.isCompleted,
      createdAt: task.createdAt,
      priority: task.priority,
    },
  });

  // Update information debounced.
  useTaskDebounce({ watch, itemId: task.id });

  // Task deletion is not supposed to be
  // invoked as often as update or create operations,
  // so it can be not debounced.
  // const { deleteTask } = useDeleteTask(task.id);

  // Checkbox value should not be updated debounced too
  const { updateTask } = useUpdateTask(task.id);

  return (
    <article className={cn(styles.card)}>
      <TaskCheckbox
        taskId={task.id}
        register={register}
        isCompleted={task.isCompleted}
        updateTask={updateTask}
      />

      <TaskDatePicker
        control={control}
        smallText
      />

      <TaskBadgeSelect
        control={control}
        smallText
      />
    </article>
  );
};

export default KanbanCard;
