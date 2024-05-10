import type { ResetTimerProps } from '@/app/(dashboard)/pomodoro/components/ResetTimer/ResetTimer.props.ts';
import type { useTimerActions } from '@/app/(dashboard)/pomodoro/hooks/useTimerActions.ts';

export interface ControlTimerProps extends Pick<ResetTimerProps, 'id'> {
  isRunning: boolean;
  actions: ReturnType<typeof useTimerActions>;
}
