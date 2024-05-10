'use client';

import cn from 'classnames';
import { type FC } from 'react';

import { useTasks } from '@/app/(dashboard)/tasks/hooks/useTasks.ts';
import { EnumDndDestId } from '@/src/data/EnumDndDestId.ts';

import Column from '../Column';

import styles from './Kanban.module.scss';
import type { KanbanProps } from './Kanban.props';

const Kanban: FC<KanbanProps> = () => {
  const { tasks } = useTasks();

  return (
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
  );
};

export default Kanban;
