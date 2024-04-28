import type {
  PomodoroRound,
  PomodoroSession,
} from '@xeno-planner/backend-types';

/** Response of GET pomodoro-round endpoint. */
export interface IPomodoroRoundResponse
  extends Omit<PomodoroRound, 'pomodoroSessionId'> {}

/** Response of GET pomodoro-session endpoint. */
export interface IPomodoroSessionResponse
  extends Omit<PomodoroSession, 'userId'> {
  rounds?: IPomodoroRoundResponse[];
}

/** Type for update pomodoro session form. */
export type PomodoroSessionFormStateType = Partial<
  Omit<IPomodoroSessionResponse, 'id' | 'createdAt' | 'updatedAt'>
>;

/** Type for update pomodoro round form. */
export type PomodoroRoundFormStateType = Partial<
  Omit<IPomodoroRoundResponse, 'id' | 'createdAt' | 'updatedAt'>
>;
