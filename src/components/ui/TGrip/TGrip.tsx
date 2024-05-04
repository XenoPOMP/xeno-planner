import { type FC } from 'react';

import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';

import type { TGripProps } from './TGrip.props';

const TGrip: FC<TGripProps> = () => {
  return (
    <>
      <td {...columnType('grip')}>1</td>
      <td {...columnType('grip')}>2</td>
      <td {...columnType('grip')}>3</td>
    </>
  );
};

export default TGrip;
