import cn from 'classnames';
import { type FC } from 'react';
import { Controller } from 'react-hook-form';

import DatePicker from '@/src/components/ui/DatePicker';

import type { TaskDatePickerProps } from './TaskDatePicker.props';

const TaskDatePicker: FC<TaskDatePickerProps> = ({ control, smallText }) => {
  return (
    <Controller
      control={control}
      name={'createdAt'}
      render={({ field }) => (
        <DatePicker
          {...field}
          position={'left'}
          className={cn({
            [`p16`]: smallText,
          })}
        />
      )}
    />
  );
};

export default TaskDatePicker;
