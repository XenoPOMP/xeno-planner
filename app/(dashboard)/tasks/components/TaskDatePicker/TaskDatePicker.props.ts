import type { FormHookResult } from '@/app/(dashboard)/tasks/components/TaskCheckbox/TaskCheckbox.props.ts';

export interface TaskDatePickerProps extends Pick<FormHookResult, 'control'> {
  smallText?: boolean;
}
