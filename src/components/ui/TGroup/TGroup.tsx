import { Draggable, Droppable } from '@hello-pangea/dnd';
import { type FC } from 'react';

import AddTask from '@/app/(dashboard)/tasks/list-view/AddTask.tsx';
import TGrip from '@/src/components/ui/TGrip';
import TGroupName from '@/src/components/ui/TGroupName';
import { columnType } from '@/src/components/ui/TaskTable/TaskTable.tsx';
import { EnumDndDestId } from '@/src/data/EnumDndDestId.ts';
import { filterTasks } from '@/src/utils/misc';

import type { TGroupProps } from './TGroup.props';

const TGroup: FC<TGroupProps> = ({ destId, tasks, groupName }) => {
  return (
    <Droppable droppableId={destId}>
      {provided => (
        <tbody
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <tr>
            <TGroupName>{groupName}</TGroupName>
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
                  {...columnType('grip-row')}
                >
                  <TGrip task={task} />
                </tr>
              )}
            </Draggable>
          ))}

          {provided.placeholder}

          {destId !== EnumDndDestId.COMPLETED && <AddTask destId={destId} />}
        </tbody>
      )}
    </Droppable>
  );
};

export default TGroup;
