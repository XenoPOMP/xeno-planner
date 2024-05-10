import cn from 'classnames';
import { Play } from 'lucide-react';
import { type FC } from 'react';

import type { ControlTimerProps } from './ControlTimer.props';

const ControlTimer: FC<ControlTimerProps> = () => {
  return (
    <article className={cn('flex-center cursor-pointer')}>
      <Play size={'1.5em'} />
    </article>
  );
};

export default ControlTimer;
