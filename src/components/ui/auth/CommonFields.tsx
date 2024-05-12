import { KeyRound, Mail } from 'lucide-react';
import { type FC } from 'react';
import { type Control, Controller } from 'react-hook-form';

import InputField from '@/src/components/ui/InputField';
import type { IAuthForm, IRegisterForm } from '@/src/types';

interface ICommonFields {
  control: Control<IAuthForm | IRegisterForm>;
}

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
