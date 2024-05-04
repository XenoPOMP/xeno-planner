import { type FC } from 'react';

import TGroup from '@/src/components/ui/TGroup';
import TaskTable from '@/src/components/ui/TaskTable';

const ListViewTasksPage: FC<{}> = () => {
  return (
    <TaskTable>
      <TGroup />
    </TaskTable>
  );
};

export default ListViewTasksPage;
