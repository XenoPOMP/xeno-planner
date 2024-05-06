import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { EnumDndDestId } from '@/src/data/EnumDndDestId.ts';
import type { ITaskResponse } from '@/src/types';

import { FILTERS } from '../../data/task-columns.data.ts';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

/**
 * Applies date filter to tasks.
 * @param tasks
 * @param value
 */
export const filterTasks = (
  tasks: ITaskResponse[] | undefined,
  value: EnumDndDestId,
) => {
  switch (value) {
    case EnumDndDestId.TODAY:
      return tasks?.filter(
        item =>
          dayjs(item.createdAt).isSame(FILTERS.today, 'day') &&
          !item.isCompleted,
      );

    case EnumDndDestId.TOMORROW:
      return tasks?.filter(
        item =>
          dayjs(item.createdAt).isSame(FILTERS.tomorrow, 'day') &&
          !item.isCompleted,
      );

    case EnumDndDestId.ON_THIS_WEEK:
      return tasks?.filter(
        item =>
          !dayjs(item.createdAt).isSame(FILTERS.today) &&
          !dayjs(item.createdAt).isSame(FILTERS.tomorrow) &&
          dayjs(item.createdAt).isSameOrBefore(FILTERS['on-this-week']) &&
          !item.isCompleted,
      );

    case EnumDndDestId.ON_NEXT_WEEK:
      return tasks?.filter(
        item =>
          dayjs(item.createdAt).isAfter(FILTERS['on-this-week']) &&
          dayjs(item.createdAt).isSameOrBefore(FILTERS['on-next-week']) &&
          !item.isCompleted,
      );

    case EnumDndDestId.LATER:
      return tasks?.filter(
        item =>
          (dayjs(item.createdAt).isAfter(FILTERS['on-next-week']) ||
            !item.createdAt) &&
          !item.isCompleted,
      );

    case EnumDndDestId.COMPLETED:
      return tasks?.filter(item => item.isCompleted);

    default:
      return [];
  }
};
