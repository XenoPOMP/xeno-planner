import { Priority } from '@xeno-planner/backend-types';
import cn from 'classnames';
import { type FC } from 'react';
import { Controller } from 'react-hook-form';

import SelectField from '@/src/components/ui/SelectField';
import { getPriorityName } from '@/src/data/PriorityName.ts';

import type { TaskBadgeSelectProps } from './TaskBadgeSelect.props';

const TaskBadgeSelect: FC<TaskBadgeSelectProps> = ({ control, smallText }) => {
  return (
    <Controller
      control={control}
      name={'priority'}
      render={({ field: { value, onChange } }) => (
        <SelectField
          outerClassName={cn('flex-grow')}
          className={cn({
            [`!p14`]: smallText,
          })}
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
  );
};

export default TaskBadgeSelect;
