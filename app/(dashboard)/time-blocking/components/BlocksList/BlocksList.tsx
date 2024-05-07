import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { useTimeBlocks } from '@/app/(dashboard)/time-blocking/hooks/useTimeBlocks.ts';

import styles from './BlocksList.module.scss';
import type { BlocksListProps } from './BlocksList.props';

const BlocksList: VariableFC<'article', BlocksListProps> = ({
  className,
  children,
  ...props
}) => {
  const { hoursLeft } = useTimeBlocks();

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
