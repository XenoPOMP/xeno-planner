import cn from 'classnames';
import { type FC } from 'react';

import styles from './BlocksList.module.scss';
import type { BlocksListProps } from './BlocksList.props';

const BlocksList: FC<BlocksListProps> = () => {
  return (
    <article className={cn(styles.list)}>
      <footer className={cn(styles.hoursCounter)}>
        Остается <strong>17ч.</strong> для сна
      </footer>
    </article>
  );
};

export default BlocksList;
