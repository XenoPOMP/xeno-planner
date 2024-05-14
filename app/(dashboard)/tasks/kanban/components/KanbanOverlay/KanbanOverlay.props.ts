import { type ComponentProps } from 'react';

import type TaskDeleteButton from '@/app/(dashboard)/tasks/components/TaskDeleteButton';

export interface KanbanOverlayProps
  extends Pick<ComponentProps<typeof TaskDeleteButton>, 'taskId'> {}
