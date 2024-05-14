import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { type LucideIcon, Trash } from 'lucide-react';

import { useDeleteTask } from '@/app/(dashboard)/tasks/hooks/useDeleteTask.ts';

import type { TaskDeleteButtonProps } from './TaskDeleteButton.props';

/**
 * This button deletes task with certain taskId.
 *
 * @param taskId
 * @param size
 * @param className
 * @param onClick
 * @param props
 * @constructor
 */
const TaskDeleteButton: VariableFC<
  LucideIcon,
  TaskDeleteButtonProps,
  'children'
> = ({ taskId, size = '1em', className, onClick, ...props }) => {
  // Task deletion is not supposed to be
  // invoked as often as update or create operations,
  // so it can be not debounced.
  const { deleteTask } = useDeleteTask(taskId);

  return (
    <Trash
      size={size}
      className={cn(
        'cursor-pointer opacity-30 hover:opacity-100 transition-opacity',
        className,
      )}
      onClick={ev => {
        deleteTask({ id: taskId });
        onClick?.(ev);
      }}
      {...props}
    />
  );
};

export default TaskDeleteButton;
