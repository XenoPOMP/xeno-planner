import { Priority } from '@xeno-planner/backend-types';
import cn from 'classnames';
import { GripVertical } from 'lucide-react';
import { type FC } from 'react';

import { useUpdateTask } from '@/app/(dashboard)/tasks/hooks/useUpdateTask.ts';
import Checkbox from '@/src/components/ui/Checkbox';
import DatePicker from '@/src/components/ui/DatePicker';
import SelectField from '@/src/components/ui/SelectField';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';
import { getPriorityName } from '@/src/data/PriorityName.ts';

import type { TGripProps } from './TGrip.props';

const TGrip: FC<TGripProps> = ({
  task: { id, name, priority, createdAt, isCompleted },
}) => {
  const { updateTask } = useUpdateTask(id);

  return (
    <>
      <td {...columnType('grip')}>
        <div className={cn('flex items-center gap-[.2em]')}>
          <GripVertical
            size={'1.2em'}
            className={cn('text-secondary-border-accent cursor-grab')}
          />

          <Checkbox
            checked={!!isCompleted}
            onChange={ev => {
              updateTask({
                id,
                data: {
                  isCompleted: ev.target.checked,
                },
              });
            }}
          >
            {name}
          </Checkbox>
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
        className={cn('select-none')}
        {...columnType('grip')}
      >
        {priority && (
          <SelectField
            type={'priority-badges'}
            currentItem={getPriorityName(priority)}
            currentValue={priority}
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
        )}
      </td>
    </>
  );
};

export default TGrip;
