import { Draggable } from '@hello-pangea/dnd';
import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { useForm } from 'react-hook-form';

import TaskBadgeSelect from '@/app/(dashboard)/tasks/components/TaskBadgeSelect';
import TaskCheckbox from '@/app/(dashboard)/tasks/components/TaskCheckbox';
import TaskDatePicker from '@/app/(dashboard)/tasks/components/TaskDatePicker';
import { useTaskDebounce } from '@/app/(dashboard)/tasks/hooks/useTaskDebounce.ts';
import { useUpdateTask } from '@/app/(dashboard)/tasks/hooks/useUpdateTask.ts';
import type { TaskFormStateType } from '@/src/types';

import KanbanOverlay from '../KanbanOverlay';

import styles from './KanbanCard.module.scss';
import type { KanbanCardProps } from './KanbanCard.props';

const KanbanCard: VariableFC<
  'article',
  KanbanCardProps,
  'children' | 'ref'
> = ({ task, className, ...props }) => {
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

  // Checkbox value should not be updated debounced too
  const { updateTask } = useUpdateTask(task.id);

  return (
    <Draggable
      draggableId={task.id}
      index={0}
    >
      {provided => {
        if (
          provided.draggableProps.style &&
          'top' in provided.draggableProps.style
        ) {
          // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
          // @ts-ignore This number may be undefined.
          provided.draggableProps.style.top = undefined;
          // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
          // @ts-ignore This number may be undefined.
          provided.draggableProps.style.left = undefined;
        }

        return (
          <article
            ref={provided.innerRef}
            className={cn('relative', styles.card, className)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            {...props}
          >
            <KanbanOverlay taskId={task.id} />

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
      }}
    </Draggable>
  );
};

export default KanbanCard;
