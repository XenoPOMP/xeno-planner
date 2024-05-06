import { type FC } from 'react';

import type { TGroupProps } from '@/src/components/ui/TGroup/TGroup.props.ts';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';

const AddTask: FC<Pick<TGroupProps, 'destId'>> = () => {
  return (
    <>
      <tr>
        <td {...columnType('add')}>Добавить задачу...</td>
      </tr>
    </>
  );
};

export default AddTask;
