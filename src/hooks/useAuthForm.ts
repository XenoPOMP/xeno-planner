import { type FieldValues, useForm } from 'react-hook-form';

import { type AuthService } from '@/src/services/auth.service.ts';

type FormHookProps<TForm extends FieldValues> = Parameters<
  typeof useForm<TForm>
>;

export const useAuthForm = <TForm extends FieldValues = {}>(
  type: Parameters<typeof AuthService.main>[0],
  ...[options = { mode: 'onChange' }, ...rest]: FormHookProps<TForm>
) => {
  const hookForm = useForm<TForm>(options, ...rest);

  return {
    ...hookForm,
  };
};
