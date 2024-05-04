import dayjs, { type Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import isoWeek from 'dayjs/plugin/isoWeek';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);

export type ColumnId =
  | 'today'
  | 'tomorrow'
  | 'on-this-week'
  | 'on-next-week'
  | 'later'
  | 'completed';

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
    value: 'today',
  },
  {
    label: 'Завтра',
    value: 'tomorrow',
  },
  {
    label: 'На этой неделе',
    value: 'on-this-week',
  },
  {
    label: 'На следующей неделе',
    value: 'on-next-week',
  },
  {
    label: 'Позже',
    value: 'later',
  },
  {
    label: 'Выполнено',
    value: 'completed',
  },
];
