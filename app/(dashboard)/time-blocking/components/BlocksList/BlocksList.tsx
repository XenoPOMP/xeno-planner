import type { VariableFC } from '@xenopomp/advanced-types';
import { roundNumber } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { useMemo } from 'react';

import { useTimeBlocks } from '@/app/(dashboard)/time-blocking/hooks/useTimeBlocks.ts';
import { MINUTES_IN_DAY } from '@/src/constants/time.constants.ts';

import styles from './BlocksList.module.scss';
import type { BlocksListProps } from './BlocksList.props';

const BlocksList: VariableFC<'article', BlocksListProps> = ({
  className,
  children,
  ...props
}) => {
  const { data } = useTimeBlocks();

  /** Calculated  */
  const hoursLeft = useMemo(() => {
    if (!data) {
      return 0;
    }

    const minutesBlocked = data!.reduce(
      (reducer, next) => reducer + next.duration,
      0,
    );

    return roundNumber((MINUTES_IN_DAY - minutesBlocked) / 60, 1);
  }, [data]);

  return (
    <article
      className={cn(styles.list, className)}
      {...props}
    >
      {children && (
        <section className={cn(styles.droppable)}>{children}</section>
      )}

      <footer className={cn(styles.hoursCounter)}>
        Остается <strong>{hoursLeft}ч.</strong> для сна
      </footer>
    </article>
  );
};

export default BlocksList;
