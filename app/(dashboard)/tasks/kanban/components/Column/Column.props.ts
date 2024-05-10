import type { ComponentProps } from 'react';

import type TGroup from '@/src/components/ui/TGroup';

export interface ColumnProps
  extends Pick<
    ComponentProps<typeof TGroup>,
    'destId' | 'tasks' | 'groupName'
  > {}
