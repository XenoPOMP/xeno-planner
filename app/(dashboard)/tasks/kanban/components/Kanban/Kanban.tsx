'use client';

import { DragDropContext } from '@hello-pangea/dnd';
import cn from 'classnames';
import { type FC } from 'react';

import { useTaskDnd } from '@/app/(dashboard)/tasks/hooks/useTaskDnd.ts';
import { useTasks } from '@/app/(dashboard)/tasks/hooks/useTasks.ts';
import { EnumDndDestId } from '@/src/data/EnumDndDestId.ts';

import Column from '../Column';

import styles from './Kanban.module.scss';
import type { KanbanProps } from './Kanban.props';

const Kanban: FC<KanbanProps> = () => {
  const { tasks } = useTasks();
  const { onDragEnd } = useTaskDnd();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={cn(styles.kanbanHolder)}>
        <Column
          destId={EnumDndDestId.TODAY}
          groupName={'Сегодня'}
          tasks={tasks}
        />

        <Column
          destId={EnumDndDestId.TOMORROW}
          groupName={'Завтра'}
          tasks={tasks}
        />

        <Column
          destId={EnumDndDestId.ON_THIS_WEEK}
          groupName={'На этой неделе'}
          tasks={tasks}
        />

        <Column
          destId={EnumDndDestId.ON_NEXT_WEEK}
          groupName={'На след. неделе'}
          tasks={tasks}
        />

        <Column
          destId={EnumDndDestId.LATER}
          groupName={'Позже'}
          tasks={tasks}
        />

        <Column
          destId={EnumDndDestId.COMPLETED}
          groupName={'Выполнено'}
          tasks={tasks}
        />
      </div>
    </DragDropContext>
  );
};

export default Kanban;
