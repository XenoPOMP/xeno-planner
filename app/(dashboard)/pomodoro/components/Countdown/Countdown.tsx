import cn from 'classnames';
import { type FC } from 'react';

import { formatTime } from '@/app/(dashboard)/pomodoro/format-time.ts';

import styles from './Countdown.module.scss';
import type { CountdownProps } from './Countdown.props';

const Countdown: FC<CountdownProps> = ({ secondsLeft }) => {
  return (
    <article className={cn(styles.countdown)}>
      {formatTime(secondsLeft)}
    </article>
  );
};

export default Countdown;
