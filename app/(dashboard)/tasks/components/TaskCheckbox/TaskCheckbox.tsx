import type { VariableFC } from '@xenopomp/advanced-types';

import Checkbox from '@/src/components/ui/Checkbox';

import type { TaskCheckboxProps } from './TaskCheckbox.props';

const TaskCheckbox: VariableFC<
  typeof Checkbox,
  TaskCheckboxProps,
  'children' | 'checked' | 'editable' | 'edit'
> = ({ register, isCompleted, updateTask, taskId, ...props }) => {
  return (
    <Checkbox
      checked={!!isCompleted}
      onChange={ev => {
        updateTask({
          id: taskId,
          data: {
            isCompleted: ev.target.checked,
          },
        });
      }}
      editable
      edit={{
        ...register('name'),
      }}
      {...props}
    />
  );
};

export default TaskCheckbox;
