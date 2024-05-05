'use client';

import { DragDropContext } from '@hello-pangea/dnd';
import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { useTaskDnd } from '@/app/(dashboard)/tasks/hooks/useTaskDnd.ts';
import { useTasks } from '@/app/(dashboard)/tasks/hooks/useTasks.ts';
import CircleLoader from '@/src/components/ui/CircleLoader';
import TGroup from '@/src/components/ui/TGroup';
import THead from '@/src/components/ui/THead';
import { EnumDndDestId } from '@/src/data/EnumDndDestId.ts';

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
  const { onDragEnd } = useTaskDnd();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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

        <>
          {isLoading ? (
            <tbody>
              <tr>
                <td {...columnType('group')}>
                  <CircleLoader />
                </td>
              </tr>
            </tbody>
          ) : (
            <>
              <TGroup
                destId={EnumDndDestId.TODAY}
                groupName={'Сегодня'}
                tasks={tasks}
              />

              <TGroup
                destId={EnumDndDestId.TOMORROW}
                groupName={'Завтра'}
                tasks={tasks}
              />

              <TGroup
                destId={EnumDndDestId.ON_THIS_WEEK}
                groupName={'На этой неделе'}
                tasks={tasks}
              />

              <TGroup
                destId={EnumDndDestId.ON_NEXT_WEEK}
                groupName={'На следующей неделе'}
                tasks={tasks}
              />

              <TGroup
                destId={EnumDndDestId.LATER}
                groupName={'Позже'}
                tasks={tasks}
              />

              <TGroup
                destId={EnumDndDestId.COMPLETED}
                groupName={'Выполнено'}
                tasks={tasks}
              />
            </>
          )}
        </>
      </table>
    </DragDropContext>
  );
};

export default TaskTable;
