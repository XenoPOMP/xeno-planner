import type { TimeBlock } from '@xeno-planner/backend-types';

/** Response of GET time-block endpoint. */
export interface ITimeBlockResponse extends Omit<TimeBlock, 'userId'> {}

export type TimeBlockFormStateType = Partial<
  Omit<ITimeBlockResponse, 'createdAt' | 'updatedAt'>
>;
