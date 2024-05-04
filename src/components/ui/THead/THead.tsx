import { type FC } from 'react';

import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';

import type { THeadProps } from './THead.props';

const THead: FC<THeadProps> = () => {
  return (
    <tr>
      <th {...columnType('grip')}>Название задачи</th>
      <th {...columnType('grip')}>Дата</th>
      <th {...columnType('grip')}>Приоритет</th>
    </tr>
  );
};

export default THead;
