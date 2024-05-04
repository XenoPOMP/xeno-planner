import { Priority } from '@xeno-planner/backend-types';
import cn from 'classnames';
import { type FC } from 'react';

import Checkbox from '@/src/components/ui/Checkbox';
import PriorityBadge from '@/src/components/ui/PriorityBadge';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';

import type { TGripProps } from './TGrip.props';

const TGrip: FC<TGripProps> = () => {
  return (
    <>
      <td {...columnType('grip')}>
        <Checkbox>Доделать дизайн</Checkbox>
      </td>

      <td
        className={cn('select-none')}
        {...columnType('grip')}
      >
        3 мая, 2024
      </td>

      <td
        className={cn('select-none')}
        {...columnType('grip')}
      >
        <PriorityBadge priority={Priority.high}>Высокий</PriorityBadge>
      </td>
    </>
  );
};

export default TGrip;
