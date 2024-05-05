import type { ITaskResponse } from '@/src/types';

export interface TGripCheckboxProps
  extends Pick<ITaskResponse, 'id' | 'isCompleted' | 'name'> {}
