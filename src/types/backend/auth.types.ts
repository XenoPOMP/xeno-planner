import type { User } from '@xeno-planner/backend-types';

/** Auth form dto type. */
export interface IAuthForm extends Pick<User, 'email' | 'password'> {}

/**
 * This interface only exists to handle
 * register form by hooks.
 *
 * Query will still use body object of type {@link IAuthForm}.
 */
export interface IRegisterForm extends IAuthForm, Pick<User, 'name'> {
  repeatPassword: User['password'];
}

/** User type, but with excluded password. */
export type SanitizedUser = Omit<User, 'password'>;

/** Response of login endpoint. */
export interface IAuthResponse {
  accessToken: string;
  user: SanitizedUser;
}

export interface ILogoutResponse {
  logout: boolean;
}
