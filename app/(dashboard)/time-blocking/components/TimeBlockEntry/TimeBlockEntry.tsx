import cn from 'classnames';
import { GripVertical, SquarePen, Trash } from 'lucide-react';
import { type FC } from 'react';

import { useDeleteTimeBlock } from '@/app/(dashboard)/time-blocking/hooks/useDeleteTimeBlock.ts';

import styles from './TimeBlockEntry.module.scss';
import type { TimeBlockEntryProps } from './TimeBlockEntry.props';

const TimeBlockEntry: FC<TimeBlockEntryProps> = ({
  block: { color, duration, name, id },
}) => {
  const deleteBlock = useDeleteTimeBlock(id);

  return (
    <div
      className={cn(styles.entry)}
      style={{
        background: color || undefined,
        height: `${duration}px`,
      }}
    >
      <GripVertical
        size={'1em'}
        className={cn('cursor-grab', styles.icon)}
      />

      <span className={cn(styles.name)}>
        {name} <i>({duration} мин.)</i>
      </span>

      <section className={cn(styles.controls)}>
        <SquarePen className={cn(styles.icon)} />

        <Trash
          className={cn(styles.icon)}
          onClick={() => deleteBlock(id)}
        />
      </section>
    </div>
  );
};

export default TimeBlockEntry;
