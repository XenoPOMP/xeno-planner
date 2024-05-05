import { Draggable, Droppable } from '@hello-pangea/dnd';
import { type FC } from 'react';

import TGrip from '@/src/components/ui/TGrip';
import TGroupName from '@/src/components/ui/TGroupName';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';
import { filterTasks } from '@/src/utils/misc';

import type { TGroupProps } from './TGroup.props';

const TGroup: FC<TGroupProps> = ({ destId, tasks }) => {
  return (
    <Droppable droppableId={destId}>
      {provided => (
        <tbody
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <tr>
            <TGroupName>Сегодня</TGroupName>
          </tr>

          {filterTasks(tasks, destId)?.map((task, index) => (
            <Draggable
              key={task.id}
              draggableId={task.id}
              index={index}
            >
              {provided => (
                <tr
                  key={`${task.id}`}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TGrip task={task} />
                </tr>
              )}
            </Draggable>
          ))}

          {provided.placeholder}

          <tr>
            <td {...columnType('add')}>Добавить задачу...</td>
          </tr>
        </tbody>
      )}
    </Droppable>
  );
};

export default TGroup;
