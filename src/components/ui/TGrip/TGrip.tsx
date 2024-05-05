import { Priority } from '@xeno-planner/backend-types';
import cn from 'classnames';
import { GripVertical, Trash } from 'lucide-react';
import { type FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useDeleteTask } from '@/app/(dashboard)/tasks/hooks/useDeleteTask.ts';
import { useTaskDebounce } from '@/app/(dashboard)/tasks/hooks/useTaskDebounce.ts';
import Checkbox from '@/src/components/ui/Checkbox';
import DatePicker from '@/src/components/ui/DatePicker';
import SelectField from '@/src/components/ui/SelectField';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';
import { getPriorityName } from '@/src/data/PriorityName.ts';
import type { TaskFormStateType } from '@/src/types';

import type { TGripProps } from './TGrip.props';

const TGrip: FC<TGripProps> = ({
  task: { id, name, priority, createdAt, isCompleted },
}) => {
  // TODO Debounced update
  // TODO Debounced create

  const { control, watch } = useForm<TaskFormStateType>({
    defaultValues: {
      name,
      isCompleted,
      createdAt,
      priority,
    },
  });

  // Update information debounced.
  useTaskDebounce({ watch, itemId: id });

  const { deleteTask } = useDeleteTask(id);

  return (
    <>
      <td {...columnType('grip')}>
        <div className={cn('flex items-center gap-[.2em]')}>
          <GripVertical
            size={'1.2em'}
            className={cn('text-secondary-border-accent cursor-grab')}
          />

          <Controller
            control={control}
            name={'isCompleted'}
            render={({ field: { value, onChange } }) => (
              <Checkbox
                checked={!!value}
                onChange={onChange}
              >
                {name}
              </Checkbox>
            )}
          />
        </div>
      </td>

      <td
        className={cn('select-none')}
        {...columnType('grip')}
      >
        <DatePicker
          position={'left'}
          value={createdAt}
        />
      </td>

      <td
        className={cn('select-none flex justify-between items-center')}
        {...columnType('grip')}
      >
        <SelectField
          outerClassName={cn('flex-grow')}
          type={'priority-badges'}
          currentItem={
            priority ? getPriorityName(priority) : 'Нажмите, чтобы выбрать'
          }
          currentValue={priority || undefined}
          items={[
            {
              name: getPriorityName(Priority.low),
              value: Priority.low,
            },
            {
              name: getPriorityName(Priority.medium),
              value: Priority.medium,
            },
            {
              name: getPriorityName(Priority.high),
              value: Priority.high,
            },
          ]}
          onSelection={val => {}}
        />

        <Trash
          size={'1em'}
          className={cn(
            'cursor-pointer opacity-30 hover:opacity-100 transition-opacity',
          )}
          onClick={() => deleteTask({ id })}
        />
      </td>
    </>
  );
};

export default TGrip;
