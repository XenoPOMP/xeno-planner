import { type FC } from 'react';

import TGroupName from '@/src/components/ui/TGroupName';
import TaskTable from '@/src/components/ui/TaskTable';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';

const ListViewTasksPage: FC<{}> = () => {
  return (
    <>
      <TaskTable>
        <tr>
          <td {...columnType('grip')}>First column</td>
          <td {...columnType('grip')}>Second column</td>
          <td {...columnType('grip')}>Third column</td>
        </tr>

        <tr>
          <TGroupName>Group name</TGroupName>
        </tr>

        <tr>
          <td {...columnType('add')}>Add task...</td>
        </tr>
      </TaskTable>
    </>
  );
};

export default ListViewTasksPage;
