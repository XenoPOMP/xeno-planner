import type { IPomodoroRoundResponse } from '@/src/types';

type Round = IPomodoroRoundResponse;

export interface PomodoroRoundsProps {
  rounds?: Round[];
  nextRoundHandler: () => void;
  prevRoundHandler: () => void;
  activeRound?: Round;
}
