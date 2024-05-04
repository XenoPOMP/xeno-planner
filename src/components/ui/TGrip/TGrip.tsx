import cn from 'classnames';
import { GripVertical } from 'lucide-react';
import { type FC } from 'react';

import Checkbox from '@/src/components/ui/Checkbox';
import PriorityBadge from '@/src/components/ui/PriorityBadge';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';
import type { ITaskResponse } from '@/src/types';

import type { TGripProps } from './TGrip.props';

const BadgeText = ({
  priority,
}: Partial<Pick<ITaskResponse, 'priority'>>): string => {
  switch (priority) {
    case 'low': {
      return 'Низкий';
    }

    case 'medium': {
      return 'Средний';
    }

    case 'high': {
      return 'Высокий';
    }
  }

  return 'Нажмите, чтобы выбрать';
};

const TGrip: FC<TGripProps> = ({ task: { name, priority } }) => {
  return (
    <>
      <td {...columnType('grip')}>
        <div className={cn('flex items-center gap-[.2em]')}>
          <GripVertical
            size={'1.2em'}
            className={cn('text-secondary-border-accent cursor-grab')}
          />

          <Checkbox>{name}</Checkbox>
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
        <PriorityBadge priority={priority || undefined}>
          <BadgeText priority={priority} />
        </PriorityBadge>
      </td>
    </>
  );
};

export default TGrip;
