import { type useAuthForm } from '@/src/hooks/useAuthForm.ts';
import type { IRegisterForm } from '@/src/types';

type ValidatePasswordMatchType = Pick<
  ReturnType<typeof useAuthForm<IRegisterForm>>,
  'clearErrors' | 'setError'
>;

/**
 * This function handles checking for passwords equality.
 *
 * @param value
 * @param password
 * @param clearErrors
 * @param setError
 */
export const validatePasswordsMatch = (
  value: string,
  password: string,
  { clearErrors, setError }: ValidatePasswordMatchType,
) => {
  /**
   * Clear all errors if passwords
   * are the same.
   */
  if (value === password) {
    clearErrors('password');
    clearErrors('repeatPassword');
    return true;
  }

  /** Set the same error messages to both fields. */
  const errorMessage = 'Пароли не совпадают';

  setError('password', {
    message: errorMessage,
  });
  return errorMessage;
};
