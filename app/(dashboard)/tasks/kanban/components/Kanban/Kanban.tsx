'use client';

import { DragDropContext } from '@hello-pangea/dnd';
import cn from 'classnames';
import { type FC } from 'react';

import { useTaskDnd } from '@/app/(dashboard)/tasks/hooks/useTaskDnd.ts';
import { useTasks } from '@/app/(dashboard)/tasks/hooks/useTasks.ts';
import { COLUMNS } from '@/src/data/task-columns.data.ts';

import Column from '../Column';

import styles from './Kanban.module.scss';
import type { KanbanProps } from './Kanban.props';

const Kanban: FC<KanbanProps> = () => {
  const { tasks } = useTasks();
  const { onDragEnd } = useTaskDnd();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={cn(styles.kanbanHolder)}>
        {COLUMNS.map(({ label, value }, index) => (
          <Column
            key={index}
            destId={value}
            groupName={label}
            tasks={tasks}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Kanban;
