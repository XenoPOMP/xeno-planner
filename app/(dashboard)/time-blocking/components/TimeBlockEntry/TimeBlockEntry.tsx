import cn from 'classnames';
import { GripVertical, SquarePen, Trash } from 'lucide-react';
import { type FC } from 'react';
import { useFormContext } from 'react-hook-form';

import type { TimeBlockFormStateType } from '@/src/types';

import { useDeleteTimeBlock } from '../../hooks/useDeleteTimeBlock.ts';
import { useTimeBlockSortable } from '../../hooks/useTimeBlockSortable.ts';

import styles from './TimeBlockEntry.module.scss';
import type { TimeBlockEntryProps } from './TimeBlockEntry.props';

const TimeBlockEntry: FC<TimeBlockEntryProps> = ({
  block: { color, duration, name, id },
}) => {
  const { attributes, listeners, setNodeRef, style } = useTimeBlockSortable(id);

  const deleteBlock = useDeleteTimeBlock(id);

  const { reset } = useFormContext<TimeBlockFormStateType>();

  return (
    <div
      ref={setNodeRef}
      className={cn(styles.entry)}
      style={{
        background: color || undefined,
        height: `${duration}px`,
        ...style,
      }}
    >
      <GripVertical
        size={'1em'}
        className={cn('cursor-grab', styles.icon, styles.grip)}
        {...attributes}
        {...listeners}
        aria-describedby={'time-block'}
      />

      <span className={cn(styles.name)}>
        {name} <i>({duration} мин.)</i>
      </span>

      <section className={cn(styles.controls)}>
        <SquarePen
          className={cn(styles.icon)}
          onClick={() => {
            reset({
              name,
              duration,
              color,
              id,
            });
          }}
        />

        <Trash
          className={cn(styles.icon)}
          onClick={() => deleteBlock(id)}
        />
      </section>
    </div>
  );
};

export default TimeBlockEntry;
