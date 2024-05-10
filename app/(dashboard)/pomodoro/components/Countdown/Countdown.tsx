import cn from 'classnames';
import { type FC } from 'react';

import styles from './Countdown.module.scss';
import type { CountdownProps } from './Countdown.props';

const Countdown: FC<CountdownProps> = () => {
  return <article className={cn(styles.countdown)}>48:00</article>;
};

export default Countdown;
