import { type FC } from 'react';

import TGroup from '@/src/components/ui/TGroup';
import THead from '@/src/components/ui/THead';
import TaskTable from '@/src/components/ui/TaskTable';

const ListViewTasksPage: FC<{}> = () => {
  return (
    <>
      <TaskTable>
        <THead />

        <TGroup />
      </TaskTable>
    </>
  );
};

export default ListViewTasksPage;
