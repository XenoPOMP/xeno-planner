import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import TimeBlockEntry from '@/app/(dashboard)/time-blocking/components/TimeBlockEntry';
import { useTimeBlockDnd } from '@/app/(dashboard)/time-blocking/hooks/useTimeBlockDnd.ts';
import { useTimeBlocks } from '@/app/(dashboard)/time-blocking/hooks/useTimeBlocks.ts';
import WarningMessage from '@/src/components/ui/WarningMessage';

import styles from './BlocksList.module.scss';
import type { BlocksListProps } from './BlocksList.props';

const BlocksList: VariableFC<'article', BlocksListProps, 'children'> = ({
  className,
  ...props
}) => {
  const { hoursLeft, data, setItems } = useTimeBlocks();
  const { handleDragEnd, sensors } = useTimeBlockDnd(data, setItems);

  return (
    <article
      className={cn(styles.list, className)}
      {...props}
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <section className={cn(styles.droppable)}>
          <SortableContext
            items={data || []}
            strategy={verticalListSortingStrategy}
          >
            {data?.length !== 0
              ? data?.map(block => (
                  <TimeBlockEntry
                    key={block.id}
                    block={block}
                  />
                ))
              : 'Нет блоков'}
          </SortableContext>
        </section>
      </DndContext>

      <footer className={cn(styles.hoursCounter)}>
        {hoursLeft > 0 ? (
          <>
            Остается <strong>{hoursLeft}ч.</strong> для сна
          </>
        ) : (
          <WarningMessage>Не осталось часов на сон</WarningMessage>
        )}
      </footer>
    </article>
  );
};

export default BlocksList;
