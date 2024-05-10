import cn from 'classnames';
import { type FC } from 'react';

import styles from './Column.module.scss';
import type { ColumnProps } from './Column.props';

const Column: FC<ColumnProps> = ({ groupName }) => {
  return (
    <article className={cn(styles.column)}>
      <h2 className={cn(styles.groupName)}>{groupName}</h2>

      <section className={cn(styles.droppable)}></section>
    </article>
  );
};

export default Column;
