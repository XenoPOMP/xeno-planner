import cn from 'classnames';
import { type FC } from 'react';

import styles from './TimeBlockEntry.module.scss';
import type { TimeBlockEntryProps } from './TimeBlockEntry.props';

const TimeBlockEntry: FC<TimeBlockEntryProps> = () => {
  return <div className={cn(styles.entry)}>Entry</div>;
};

export default TimeBlockEntry;
