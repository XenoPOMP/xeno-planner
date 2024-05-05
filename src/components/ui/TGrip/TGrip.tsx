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

  // Task deletion is not supposed to be
  // invoked as often as update or create operations,
  // so it can be not debounced.
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
                editable
                edit={{
                  ...register('name'),
                }}
              />
            )}
          />
        </div>
      </td>

      <td
        className={cn('select-none')}
        {...columnType('grip')}
      >
        <Controller
          control={control}
          name={'createdAt'}
          render={({ field }) => (
            <DatePicker
              position={'left'}
              {...field}
            />
          )}
        />
      </td>

      <td
        className={cn('select-none flex justify-between items-center')}
        {...columnType('grip')}
      >
        <Controller
          control={control}
          name={'priority'}
          render={({ field: { value, onChange } }) => (
            <SelectField
              outerClassName={cn('flex-grow')}
              type={'priority-badges'}
              currentItem={
                value ? getPriorityName(value) : 'Нажмите, чтобы выбрать'
              }
              currentValue={value || undefined}
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
              onSelection={val => {
                onChange(val as Priority);
              }}
            />
          )}
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
