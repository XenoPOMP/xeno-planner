import dayjs, { type Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import isoWeek from 'dayjs/plugin/isoWeek';
import weekOfYear from 'dayjs/plugin/weekOfYear';

import { type ColumnId, EnumDndDestId } from '@/src/data/EnumDndDestId.ts';

dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);

export const FILTERS: Record<Exclude<ColumnId, 'completed'>, Dayjs> = {
  today: dayjs().startOf('day'),
  tomorrow: dayjs().add(1, 'day').startOf('day'),
  'on-this-week': dayjs().endOf('isoWeek'),
  'on-next-week': dayjs().add(1, 'week').startOf('day'),
  later: dayjs().add(2, 'week').startOf('day'),
};

export const COLUMNS: Array<{ label: string; value: ColumnId }> = [
  {
    label: 'Сегодня',
    value: EnumDndDestId.TODAY,
  },
  {
    label: 'Завтра',
    value: EnumDndDestId.TOMORROW,
  },
  {
    label: 'На этой неделе',
    value: EnumDndDestId.ON_THIS_WEEK,
  },
  {
    label: 'На следующей неделе',
    value: EnumDndDestId.ON_NEXT_WEEK,
  },
  {
    label: 'Позже',
    value: EnumDndDestId.LATER,
  },
  {
    label: 'Выполнено',
    value: EnumDndDestId.COMPLETED,
  },
];
