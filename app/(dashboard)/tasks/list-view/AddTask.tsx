import { type FC } from 'react';

import { useCreateTask } from '@/app/(dashboard)/tasks/hooks/useCreateTask.ts';
import type { TGroupProps } from '@/src/components/ui/TGroup/TGroup.props.ts';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';
import { EnumDndDestId } from '@/src/data/EnumDndDestId.ts';
import { FILTERS } from '@/src/data/task-columns.data.ts';

const AddTask: FC<Pick<TGroupProps, 'destId'>> = ({ destId }) => {
  const { createTask } = useCreateTask();

  const handleCreation = () => {
    if (destId === EnumDndDestId.COMPLETED) {
      return;
    }

    createTask({
      name: '',
      createdAt: FILTERS[destId].toDate(),
    });
  };

  return (
    <>
      <tr>
        <td
          {...columnType('add')}
          onClick={handleCreation}
        >
          Добавить задачу...
        </td>
      </tr>
    </>
  );
};

export default AddTask;
