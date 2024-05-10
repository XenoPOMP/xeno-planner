import type { ITimerState } from '@/app/(dashboard)/pomodoro/timer.types.ts';

export interface CountdownProps extends Pick<ITimerState, 'secondsLeft'> {}
