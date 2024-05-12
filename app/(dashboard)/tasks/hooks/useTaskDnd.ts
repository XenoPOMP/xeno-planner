import { type DropResult } from '@hello-pangea/dnd';

import { useUpdateTask } from '@/app/(dashboard)/tasks/hooks/useUpdateTask.ts';
import { type ColumnId, EnumDndDestId } from '@/src/data/EnumDndDestId.ts';
import { FILTERS } from '@/src/data/task-columns.data.ts';

export const useTaskDnd = () => {
  const { updateTask } = useUpdateTask();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const destColumnId = result.destination.droppableId as Exclude<
      ColumnId,
      'completed'
    >;

    /** Column didnt changed. */
    if (destColumnId === result.source.droppableId) {
      return;
    }

    /** Mark task as completed. */
    if ((destColumnId as string) === EnumDndDestId.COMPLETED) {
      updateTask({
        id: result.draggableId,
        data: {
          isCompleted: true,
        },
      });

      return;
    }

    /** New date for dragged item. */
    let newCreatedAt;

    /** Prevent potential filter collisions. */
    switch (destColumnId) {
      // Next week must point to first day in
      // week, however this day may be the next day (tomorrow).
      case 'on-next-week': {
        /** This date is taken from filter directly. */
        const dateApplicant = FILTERS[destColumnId]
          .subtract(7, 'day')
          .add(1, 'day')
          .startOf('day');

        /** This date equals to tomorrow. */
        const nextDayDate = FILTERS.tomorrow.startOf('day');

        /** Collision detected */
        if (dateApplicant.isSame(nextDayDate)) {
          newCreatedAt = dateApplicant.add(1, 'day').toDate();
          break;
        }

        /** No collision */
        newCreatedAt = dateApplicant.toDate();
        break;
      }

      // By default, newCreatedAt is assigned
      // to exact date from filter.
      default: {
        newCreatedAt = FILTERS[destColumnId].toDate();
        break;
      }
    }

    updateTask({
      id: result.draggableId,
      data: {
        createdAt: newCreatedAt,
        isCompleted: false,
      },
    });
  };

  return { onDragEnd };
};
