import cn from 'classnames';
import { type FC } from 'react';

import { useCreateTask } from '@/app/(dashboard)/tasks/hooks/useCreateTask.ts';
import type { TGroupProps } from '@/src/components/ui/TGroup/TGroup.props.ts';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';
import { EnumDndDestId } from '@/src/data/EnumDndDestId.ts';
import { TaskService } from '@/src/services/task.service.ts';

const AddTask: FC<
  Pick<TGroupProps, 'destId'> & { isKanban?: boolean; children?: string }
> = ({ destId, isKanban, children }) => {
  const { createTask } = useCreateTask();

  const handleCreation = () => {
    if (destId === EnumDndDestId.COMPLETED) {
      return;
    }

    createTask({
      name: '',
      createdAt: TaskService.issueDate(destId),
    });
  };

  const Child = () => children ?? 'Добавить задачу...';

  const TableView = () => {
    return (
      <tr>
        <td
          {...columnType('add')}
          onClick={handleCreation}
        >
          <Child />
        </td>
      </tr>
    );
  };

  const KanbanView = () => {
    return (
      <button
        onClick={handleCreation}
        className={cn('text-secondary-border-accent italic p16 text-left')}
      >
        <Child />
      </button>
    );
  };

  return <>{!isKanban ? <TableView /> : <KanbanView />}</>;
};

export default AddTask;
