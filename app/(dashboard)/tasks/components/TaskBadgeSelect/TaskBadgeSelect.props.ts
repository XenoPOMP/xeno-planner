import type { TaskDatePickerProps } from '@/app/(dashboard)/tasks/components/TaskDatePicker/TaskDatePicker.props.ts';

export interface TaskBadgeSelectProps
  extends Pick<TaskDatePickerProps, 'control'>,
    Pick<TaskDatePickerProps, 'smallText'> {}
