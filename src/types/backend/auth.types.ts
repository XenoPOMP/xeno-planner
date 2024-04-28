import type { User } from '@xeno-planner/backend-types';

/** Auth form dto type. */
export interface IAuthForm extends Pick<User, 'email' | 'password'> {}

/** User type, but with excluded password. */
export type SanitizedUser = Omit<User, 'password'>;

/** Response of login endpoint. */
export interface IAuthResponse {
  accessToken: string;
  user: SanitizedUser;
}
