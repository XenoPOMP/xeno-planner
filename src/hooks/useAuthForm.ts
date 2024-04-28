import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form';

import { type AuthService } from '@/src/services/auth.service.ts';
import type { IAuthForm, IRegisterForm } from '@/src/types';

type FormHookProps<TForm extends FieldValues> = Parameters<
  typeof useForm<TForm>
>;

export const useAuthForm = <
  TForm extends IAuthForm | IRegisterForm = IAuthForm,
>(
  type: Parameters<typeof AuthService.main>[0],
  ...[options = { mode: 'onChange' }, ...rest]: FormHookProps<TForm>
) => {
  const hookForm = useForm<TForm>(options, ...rest);

  const authSubmitAction: SubmitHandler<TForm> = async () => {};

  /**
   * Automatically generates submit handler for
   * you.
   */
  const getSubmitHandler = () => {
    return hookForm.handleSubmit(authSubmitAction);
  };

  return {
    ...hookForm,
    getSubmitHandler,
  };
};
