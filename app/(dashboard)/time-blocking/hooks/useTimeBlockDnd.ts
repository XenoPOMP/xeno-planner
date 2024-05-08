import {
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { type Dispatch, type SetStateAction } from 'react';

import { TimeBlockService } from '@/src/services/time-block.service';
import type { ITimeBlockResponse } from '@/src/types';

export const useTimeBlockDnd = (
  items: ITimeBlockResponse[] | undefined,
  setItems: Dispatch<SetStateAction<ITimeBlockResponse[] | undefined>>,
) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor),
  );

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['time blocks', 'update order'],
    mutationFn: (ids: string[]) => TimeBlockService.updateOrderTimeBlock(ids),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['time blocks', 'list'],
      });
    },
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id && items) {
      const oldIndex = items.findIndex(item => item.id === active.id);
      const newIndex = items.findIndex(item => item.id === (over?.id || ''));

      if (oldIndex !== -1 && newIndex !== -1) {
        // Sorted array
        const newItems = arrayMove(items, oldIndex, newIndex);
        // Update local state
        setItems(newItems);
        // Send mutation to server
        mutate(newItems.map(item => item.id));
      }
    }
  };

  return { handleDragEnd, sensors };
};
