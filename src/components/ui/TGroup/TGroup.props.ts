import type { EnumDndDestId } from '@/src/data/EnumDndDestId.ts';
import type { ITaskResponse } from '@/src/types';

export interface TGroupProps {
  tasks?: ITaskResponse[];
  destId: EnumDndDestId;
  groupName: string;
}
