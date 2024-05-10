import cn from 'classnames';
import { RefreshCcw } from 'lucide-react';
import { type FC } from 'react';

import roundStyles from '../../rounds/PomodoroRounds/PomodoroRounds.module.scss';

import styles from './ResetTimer.module.scss';
import type { ResetTimerProps } from './ResetTimer.props';

/**
 * This component restarts timer.
 * @constructor
 */
const ResetTimer: FC<ResetTimerProps> = () => {
  return (
    <article className={cn(styles.reset, roundStyles.withChevron)}>
      <RefreshCcw />
    </article>
  );
};

export default ResetTimer;
