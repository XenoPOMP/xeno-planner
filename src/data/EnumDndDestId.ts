import type { ValueOf } from 'type-fest';

/* eslint-disable no-unused-vars */

export enum EnumDndDestId {
  TODAY = 'today',
  TOMORROW = 'tomorrow',
  ON_THIS_WEEK = 'on-this-week',
  ON_NEXT_WEEK = 'on-next-week',
  LATER = 'later',
  COMPLETED = 'completed',
}

export type ColumnId = ValueOf<typeof EnumDndDestId>;

/* eslint-enable no-unused-vars */
