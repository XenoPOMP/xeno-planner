import { KeyRound, Mail } from 'lucide-react';
import { type FC } from 'react';
import { type Control, Controller } from 'react-hook-form';

import InputField from '@/src/components/ui/InputField';
import { type AuthType } from '@/src/hooks/useAuthForm.ts';

interface ICommonFields {
  control: Control<AuthType>;
}

/**
 * Contains fields that are presented both in login and register forms.
 * @param control
 * @constructor
 */
const CommonFields: FC<ICommonFields> = ({ control }) => {
  return (
    <>
      <Controller
        control={control}
        name={'email'}
        render={({ field }) => (
          <InputField
            icon={Mail}
            description={'Поле ввода электронной почты'}
            placeholder={'Email'}
            type={'email'}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name={'password'}
        render={({ field }) => (
          <InputField
            icon={KeyRound}
            description={'Поле ввода пароля'}
            placeholder={'Пароль'}
            type={'password'}
            {...field}
          />
        )}
      />
    </>
  );
};

export default CommonFields;
