'use client';

import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import CircleLoader from '@/src/components/ui/CircleLoader';
import TGroup from '@/src/components/ui/TGroup';
import THead from '@/src/components/ui/THead';
import { useTasks } from '@/src/hooks/useTasks.ts';

import styles from './TaskTable.module.scss';
import type { TaskTableProps } from './TaskTable.props';

/**
 * Generates data attribute for column styling
 * inside TaskTable.
 * @param type
 */
export const columnType = (type: 'grip' | 'group' | 'add') => {
  const base = {
    'data-column-type': type,
  };

  const fullSpanBase = {
    ...base,
    colSpan: 3,
  };

  switch (type) {
    // If type is group (group title), column
    // should span to 3 columns.
    case 'group': {
      return fullSpanBase;
    }

    case 'add': {
      return fullSpanBase;
    }

    default: {
      return base;
    }
  }
};

const TaskTable: VariableFC<'table', TaskTableProps, 'children'> = ({
  className,
  ...props
}) => {
  const { tasks, isLoading } = useTasks();

  return (
    <table
      className={cn(
        'w-full border-collapse border-[1px] border-secondary-border border-x-0 border-t-0',
        'select-none',
        styles.tasks,
        className,
      )}
      {...props}
    >
      <thead>
        <THead />
      </thead>

      <tbody>
        {isLoading ? (
          <tr>
            <td {...columnType('group')}>
              <CircleLoader />
            </td>
          </tr>
        ) : (
          <TGroup tasks={tasks} />
        )}
      </tbody>
    </table>
  );
};

export default TaskTable;
