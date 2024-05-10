import type { SetState } from '@xenopomp/advanced-types';

import type { IPomodoroRoundResponse } from '@/src/types';

export interface ITimerState {
  secondsLeft: number;
  activeRound?: IPomodoroRoundResponse;
  isRunning: boolean;
  setIsRunning: SetState<boolean>;
  setActiveRound: SetState<IPomodoroRoundResponse | undefined>;
  setSecondsLeft: SetState<number>;
}
