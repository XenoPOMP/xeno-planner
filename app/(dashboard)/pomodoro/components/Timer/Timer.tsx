import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import ControlTimer from '../ControlTimer';
import Countdown from '../Countdown';
import ResetTimer from '../ResetTimer';

import styles from './Timer.module.scss';
import type { TimerProps } from './Timer.props.ts';

// TODO:
// ✅ useLoadSettings()
// ✅ useTodaySession()
// ✅ useCreateSession()
// ✅ useDeleteSession()
// ❌ useTimer()

/**
 * Contains all logic for pomodoro timer.
 *
 * @param children
 * @param className
 * @param props
 * @constructor
 */
const Timer: VariableFC<'section', TimerProps, 'children'> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={cn('flex flex-col gap-[1em] w-fit', styles.timer, className)}
      {...props}
    >
      <ResetTimer />

      <div className={cn(styles.body)}>
        <Countdown />
      </div>

      <ControlTimer />
    </section>
  );
};

export default Timer;
