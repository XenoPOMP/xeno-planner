import { Priority } from '@xeno-planner/backend-types';
import { type FC } from 'react';

import PriorityBadge from '@/src/components/ui/PriorityBadge';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';

import type { TGripProps } from './TGrip.props';

const TGrip: FC<TGripProps> = () => {
  return (
    <>
      <td {...columnType('grip')}>1</td>

      <td {...columnType('grip')}>2</td>

      <td {...columnType('grip')}>
        <PriorityBadge priority={Priority.high}>Высокий</PriorityBadge>
      </td>
    </>
  );
};

export default TGrip;
