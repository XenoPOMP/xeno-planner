import type { ITimerState } from '@/app/(dashboard)/pomodoro/timer.types.ts';

export interface ResetTimerProps
  extends Pick<ITimerState, 'setIsRunning' | 'setSecondsLeft' | 'isBreakTime'> {
  id: string | undefined;
}
