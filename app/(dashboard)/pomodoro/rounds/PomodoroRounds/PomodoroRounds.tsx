import cn from 'classnames';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type FC } from 'react';

import styles from './PomodoroRounds.module.scss';
import type { PomodoroRoundsProps } from './PomodoroRounds.props';

const PomodoroRounds: FC<PomodoroRoundsProps> = ({
  rounds,
  nextRoundHandler,
  prevRoundHandler,
  activeRound,
}) => {
  /**
   * Left arrow works only if there is
   * still rounds to clear.
   */
  const isCanPrevRound = rounds
    ? rounds.some(round => !!round.isCompleted)
    : false;

  /**
   * Right arrow works only if last rounds is
   * still not completed.
   */
  const isCanNextRound = rounds
    ? !rounds[rounds.length - 1]?.isCompleted
    : false;

  return (
    <article className={cn(styles.roundsContainer)}>
      <button
        className={cn(styles.withChevron)}
        disabled={!isCanPrevRound}
        onClick={() => (isCanPrevRound ? prevRoundHandler() : false)}
      >
        <ChevronLeft />
      </button>

      <button
        className={cn(styles.withChevron)}
        disabled={!isCanNextRound}
        onClick={() => (isCanNextRound ? nextRoundHandler() : false)}
      >
        <ChevronRight />
      </button>
    </article>
  );
};

export default PomodoroRounds;
