import { Priority } from '@xeno-planner/backend-types';
import cn from 'classnames';
import { GripVertical, Trash } from 'lucide-react';
import { type FC } from 'react';

import { useDeleteTask } from '@/app/(dashboard)/tasks/hooks/useDeleteTask.ts';
import { useUpdateTask } from '@/app/(dashboard)/tasks/hooks/useUpdateTask.ts';
import DatePicker from '@/src/components/ui/DatePicker';
import SelectField from '@/src/components/ui/SelectField';
import TGripCheckbox from '@/src/components/ui/TGripCheckbox';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';
import { getPriorityName } from '@/src/data/PriorityName.ts';

import type { TGripProps } from './TGrip.props';

const TGrip: FC<TGripProps> = ({
  task: { id, name, priority, createdAt, isCompleted },
}) => {
  // TODO Debounced update
  // TODO Debounced create

  const { updateTask } = useUpdateTask(id);
  const { deleteTask } = useDeleteTask(id);

  return (
    <>
      <td {...columnType('grip')}>
        <div className={cn('flex items-center gap-[.2em]')}>
          <GripVertical
            size={'1.2em'}
            className={cn('text-secondary-border-accent cursor-grab')}
          />

          <TGripCheckbox
            id={id}
            isCompleted={isCompleted}
            name={name}
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
          onChange={date =>
            updateTask({
              id,
              data: {
                createdAt: new Date(date),
              },
            })
          }
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
          onSelection={val => {
            updateTask({
              id,
              data: {
                priority: val as Priority,
              },
            });
          }}
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
