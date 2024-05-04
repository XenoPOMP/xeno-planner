import { Priority } from '@xeno-planner/backend-types';
import cn from 'classnames';
import { GripVertical } from 'lucide-react';
import { type FC } from 'react';

import Checkbox from '@/src/components/ui/Checkbox';
import PriorityBadge from '@/src/components/ui/PriorityBadge';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';

import type { TGripProps } from './TGrip.props';

const TGrip: FC<TGripProps> = () => {
  return (
    <>
      <td {...columnType('grip')}>
        <div className={cn('flex items-center gap-[.2em]')}>
          <GripVertical
            className={cn('text-secondary-border-accent cursor-grab')}
          />

          <Checkbox>Доделать дизайн</Checkbox>
        </div>
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
