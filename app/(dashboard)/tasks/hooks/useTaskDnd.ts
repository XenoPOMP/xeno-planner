import { type DropResult } from '@hello-pangea/dnd';

import { useUpdateTask } from '@/app/(dashboard)/tasks/hooks/useUpdateTask.ts';
import { type ColumnId, EnumDndDestId } from '@/src/data/EnumDndDestId.ts';
import { TaskService } from '@/src/services/task.service.ts';

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
    const newCreatedAt: Date = TaskService.issueDate(destColumnId);

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
