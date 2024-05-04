import { type FC } from 'react';

import TGroupName from '@/src/components/ui/TGroupName';
import TaskTable from '@/src/components/ui/TaskTable';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';

const ListViewTasksPage: FC<{}> = () => {
  return (
    <>
      <TaskTable>
        <tr>
          <td {...columnType('grip')}>Название задачи</td>
          <td {...columnType('grip')}>Дата</td>
          <td {...columnType('grip')}>Приоритет</td>
        </tr>

        <tr>
          <TGroupName>Сегодня</TGroupName>
        </tr>

        <tr>
          <td {...columnType('add')}>Add task...</td>
        </tr>
      </TaskTable>
    </>
  );
};

export default ListViewTasksPage;
