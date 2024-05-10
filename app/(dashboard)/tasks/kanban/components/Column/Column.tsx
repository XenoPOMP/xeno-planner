import cn from 'classnames';
import { type FC } from 'react';

import KanbanCard from '@/app/(dashboard)/tasks/kanban/components/KanbanCard';
import AddTask from '@/app/(dashboard)/tasks/list-view/AddTask.tsx';
import { filterTasks } from '@/src/utils/misc';

import styles from './Column.module.scss';
import type { ColumnProps } from './Column.props';

const Column: FC<ColumnProps> = ({ groupName, destId, tasks }) => {
  return (
    <article className={cn(styles.column)}>
      <h2 className={cn(styles.groupName)}>{groupName}</h2>

      <section className={cn(styles.droppable)}>
        {filterTasks(tasks, destId)?.map((task, index) => (
          <KanbanCard
            task={task}
            key={index}
          />
        ))}
      </section>

      <AddTask
        destId={destId}
        isKanban
      />
    </article>
  );
};

export default Column;
