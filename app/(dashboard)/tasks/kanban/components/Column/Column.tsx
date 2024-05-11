import { Droppable } from '@hello-pangea/dnd';
import cn from 'classnames';
import { type FC } from 'react';

import KanbanCard from '@/app/(dashboard)/tasks/kanban/components/KanbanCard';
import AddTask from '@/app/(dashboard)/tasks/list-view/AddTask.tsx';
import { filterTasks } from '@/src/utils/misc';

import styles from './Column.module.scss';
import type { ColumnProps } from './Column.props';

const Column: FC<ColumnProps> = ({ groupName, destId, tasks }) => {
  return (
    <Droppable droppableId={destId}>
      {provided => (
        <article
          className={cn(styles.column)}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2 className={cn(styles.groupName)}>{groupName}</h2>

          <section className={cn(styles.droppable)}>
            {filterTasks(tasks, destId)?.map((task, index) => (
              <KanbanCard
                index={index}
                key={task.id}
                task={task}
              />
            ))}
          </section>

          {provided.placeholder}

          <AddTask
            destId={destId}
            isKanban
          />
        </article>
      )}
    </Droppable>
  );
};

export default Column;
