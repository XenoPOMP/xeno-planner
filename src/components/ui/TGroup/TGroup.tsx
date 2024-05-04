import { type FC } from 'react';

import TGrip from '@/src/components/ui/TGrip';
import TGroupName from '@/src/components/ui/TGroupName';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';

import type { TGroupProps } from './TGroup.props';

const TGroup: FC<TGroupProps> = () => {
  return (
    <>
      <tr>
        <TGroupName>Сегодня</TGroupName>
      </tr>

      <tr>
        <TGrip />
      </tr>

      <tr>
        <td {...columnType('add')}>Добавить задачу...</td>
      </tr>
    </>
  );
};

export default TGroup;
