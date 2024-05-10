import type { ComponentProps } from 'react';

import type TGrip from '@/src/components/ui/TGrip';

export interface KanbanCardProps
  extends Pick<ComponentProps<typeof TGrip>, 'task'> {}
