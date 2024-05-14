import cn from 'classnames';
import { GripVertical } from 'lucide-react';
import { type FC } from 'react';
import { useForm } from 'react-hook-form';

import TaskBadgeSelect from '@/app/(dashboard)/tasks/components/TaskBadgeSelect';
import TaskCheckbox from '@/app/(dashboard)/tasks/components/TaskCheckbox';
import TaskDatePicker from '@/app/(dashboard)/tasks/components/TaskDatePicker';
import TaskDeleteButton from '@/app/(dashboard)/tasks/components/TaskDeleteButton';
import { useTaskDebounce } from '@/app/(dashboard)/tasks/hooks/useTaskDebounce.ts';
import { useUpdateTask } from '@/app/(dashboard)/tasks/hooks/useUpdateTask.ts';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';
import type { TaskFormStateType } from '@/src/types';

import styles from './TGrip.module.scss';
import type { TGripProps } from './TGrip.props';

const TGrip: FC<TGripProps> = ({
  task: { id, name, priority, createdAt, isCompleted },
}) => {
  const { control, watch, register } = useForm<TaskFormStateType>({
    defaultValues: {
      name,
      isCompleted,
      createdAt,
      priority,
    },
  });

  // Update information debounced.
  useTaskDebounce({ watch, itemId: id });

  // Checkbox value should not be updated debounced too
  const { updateTask } = useUpdateTask(id);

  return (
    <>
      <td
        {...columnType('grip')}
        className={cn(styles.gripIconHolder)}
      >
        <div className={cn('flex items-center gap-[.2em]')}>
          <GripVertical
            size={'1.2em'}
            className={cn(
              'text-secondary-border-accent cursor-grab hover:text-primary-font transition-colors',
              styles.icon,
            )}
          />

          <TaskCheckbox
            taskId={id}
            register={register}
            isCompleted={isCompleted}
            updateTask={updateTask}
          />
        </div>
      </td>

      <td
        className={cn('select-none')}
        {...columnType('grip')}
      >
        <TaskDatePicker control={control} />
      </td>

      <td
        className={cn('select-none flex justify-between items-center')}
        {...columnType('grip')}
      >
        <TaskBadgeSelect control={control} />

        <TaskDeleteButton taskId={id} />
      </td>
    </>
  );
};

export default TGrip;
