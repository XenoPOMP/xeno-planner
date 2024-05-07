import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { useTimeBlockDnd } from '@/app/(dashboard)/time-blocking/hooks/useTimeBlockDnd.ts';
import { useTimeBlocks } from '@/app/(dashboard)/time-blocking/hooks/useTimeBlocks.ts';
import WarningMessage from '@/src/components/ui/WarningMessage';

import styles from './BlocksList.module.scss';
import type { BlocksListProps } from './BlocksList.props';

const BlocksList: VariableFC<'article', BlocksListProps> = ({
  className,
  children,
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
            {/* eslint-disable-next-line no-unneeded-ternary */}
            {children ? children : <div>Нет блоков.</div>}
          </SortableContext>
        </section>
      </DndContext>

      <footer className={cn(styles.hoursCounter)}>
        {hoursLeft > 0 ? (
          <>
            Остается <strong>{hoursLeft}ч.</strong> для сна
          </>
        ) : (
          <WarningMessage>На сон не осталось часов</WarningMessage>
        )}
      </footer>
    </article>
  );
};

export default BlocksList;
