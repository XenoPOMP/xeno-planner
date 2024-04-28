import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { AuthService } from '@/src/services/auth.service.ts';
import type { IAuthForm, IRegisterForm } from '@/src/types';
import { DASHBOARD_PAGES } from '@/src/types/routes.ts';

type FormHookProps<TForm extends FieldValues> = Parameters<
  typeof useForm<TForm>
>;

export const useAuthForm = <
  TForm extends IAuthForm | IRegisterForm = IAuthForm,
>(
  type: Parameters<typeof AuthService.main>[0],
  ...[options = { mode: 'onChange' }, ...rest]: FormHookProps<TForm>
) => {
  const { push } = useRouter();
  const hookForm = useForm<TForm>(options, ...rest);

  const { mutate } = useMutation({
    mutationKey: ['auth', type],
    mutationFn: ({ email, password }: TForm) =>
      AuthService.main(type, {
        email,
        password,
      }),
    onSuccess() {
      toast.success('Вы вошли успешно!');
      hookForm.reset();
      push(DASHBOARD_PAGES.HOME);
    },
  });

  const authSubmitAction: SubmitHandler<TForm> = data => {
    mutate(data);
  };

  return {
    ...hookForm,
    authSubmitAction,
  };
};
