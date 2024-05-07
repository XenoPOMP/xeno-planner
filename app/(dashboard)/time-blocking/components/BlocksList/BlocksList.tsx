import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import styles from './BlocksList.module.scss';
import type { BlocksListProps } from './BlocksList.props';

const BlocksList: VariableFC<'article', BlocksListProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <article
      className={cn(styles.list, className)}
      {...props}
    >
      <section className={cn(styles.droppable)}>{children}</section>

      <footer className={cn(styles.hoursCounter)}>
        Остается <strong>17ч.</strong> для сна
      </footer>
    </article>
  );
};

export default BlocksList;
