import { type FieldValues, useForm } from 'react-hook-form';

import { authSubmitAction } from '@/src/api/actions/authSubmitAction.ts';
import { type AuthService } from '@/src/services/auth.service.ts';
import type { IAuthForm, IRegisterForm } from '@/src/types';

type FormHookProps<TForm extends FieldValues> = Parameters<
  typeof useForm<TForm>
>;

export type AuthType = IAuthForm | IRegisterForm;

export const useAuthForm = <TForm extends AuthType = IAuthForm>(
  type: Parameters<typeof AuthService.main>[0],
  ...[options = { mode: 'onChange' }, ...rest]: FormHookProps<TForm>
) => {
  // const { push } = useRouter();
  const hookForm = useForm<TForm>(options, ...rest);

  return {
    ...hookForm,
    authSubmitAction,
  };
};
