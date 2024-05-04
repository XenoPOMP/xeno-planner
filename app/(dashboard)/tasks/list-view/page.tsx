import { type FC } from 'react';

import TGroup from '@/src/components/ui/TGroup';
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

        <TGroup />
      </TaskTable>
    </>
  );
};

export default ListViewTasksPage;
