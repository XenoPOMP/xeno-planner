import type {
  Priority as EnumTaskPriority,
  Task,
} from '@xeno-planner/backend-types';

/** Response of GET task endpoint. */
export interface ITaskResponse extends Omit<Task, 'userId'> {}

/** Type for task update form. */
export type TaskFormStateType = Partial<
  Omit<ITaskResponse, 'id' | 'updatedAt'>
>;

export { EnumTaskPriority };
