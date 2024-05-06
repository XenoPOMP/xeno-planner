import cn from 'classnames';
import { type FC } from 'react';

import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';

import styles from './THead.module.scss';
import type { THeadProps } from './THead.props';

const THead: FC<THeadProps> = () => {
  return (
    <tr>
      <th
        {...columnType('grip')}
        className={cn(styles.headCell)}
      >
        Название задачи
      </th>

      <th
        {...columnType('grip')}
        className={cn(styles.headCell)}
      >
        Дата
      </th>

      <th
        {...columnType('grip')}
        className={cn(styles.headCell)}
      >
        Приоритет
      </th>
    </tr>
  );
};

export default THead;
