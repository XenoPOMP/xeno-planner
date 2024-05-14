import cn from 'classnames';
import { type FC } from 'react';

import TaskDeleteButton from '@/app/(dashboard)/tasks/components/TaskDeleteButton';

import styles from './KanbanOverlay.module.scss';
import type { KanbanOverlayProps } from './KanbanOverlay.props';

const KanbanOverlay: FC<KanbanOverlayProps> = ({ taskId }) => {
  return (
    <>
      <div
        aria-hidden
        className={cn(styles.overlayButton, styles.deleteButton)}
      >
        <TaskDeleteButton
          taskId={taskId}
          size={'.85em'}
          className={cn(styles.icon)}
        />
      </div>
    </>
  );
};

export default KanbanOverlay;
