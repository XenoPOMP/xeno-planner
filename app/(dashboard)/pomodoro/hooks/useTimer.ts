import { useEffect, useState } from 'react';

import { useLoadSettings } from '@/app/(dashboard)/pomodoro/hooks/useLoadSettings.ts';
import type { ITimerState } from '@/app/(dashboard)/pomodoro/timer.types.ts';
import type { IPomodoroRoundResponse } from '@/src/types';

export const useTimer = (): ITimerState => {
  const { workInterval, breakInterval } = useLoadSettings();

  const [isRunning, setIsRunning] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(workInterval * 60);
  const [activeRound, setActiveRound] = useState<IPomodoroRoundResponse>();

  // Timer cycle logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSecondsLeft(left => left - 1);
      }, 1000);
    } else if (!isRunning && secondsLeft !== 0 && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, secondsLeft, workInterval, activeRound]);

  // Break-time switch logic
  useEffect(() => {
    // Do not switch break-time state if time is not
    // ended.
    if (secondsLeft > 0) {
      return;
    }

    // Set break-time this way to operate previous value
    // before update.
    setIsBreakTime(!isBreakTime);
    setSecondsLeft((isBreakTime ? workInterval : breakInterval) * 60);
  }, [secondsLeft, isBreakTime, workInterval, breakInterval]);

  return {
    activeRound,
    secondsLeft,
    setActiveRound,
    setIsRunning,
    setSecondsLeft,
  };
};
