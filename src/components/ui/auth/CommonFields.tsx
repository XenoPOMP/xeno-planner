import { KeyRound, Mail } from 'lucide-react';
import { type FC } from 'react';
import { type Control, Controller } from 'react-hook-form';

import InputField from '@/src/components/ui/InputField';
import { FIELD_IS_REQUIRED } from '@/src/constants/validation.constants.ts';
import { type AuthType } from '@/src/hooks/useAuthForm.ts';

interface ICommonFields {
  control: Control<AuthType>;

  /**
   * If true, fields will be checked with
   * additional validation rules.
   * @default true
   */
  extendedValidation?: boolean;
}

/**
 * Contains fields that are presented both in login and register forms.
 * @param control
 * @constructor
 */
const CommonFields: FC<ICommonFields> = ({
  control,
  extendedValidation = true,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={'email'}
        rules={{
          ...FIELD_IS_REQUIRED,
        }}
        render={({ field, fieldState: { error } }) => (
          <InputField
            icon={Mail}
            description={'Поле ввода электронной почты'}
            placeholder={'Email'}
            type={'email'}
            warning={error?.message}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name={'password'}
        rules={{
          ...FIELD_IS_REQUIRED,
        }}
        render={({ field, fieldState: { error } }) => (
          <InputField
            icon={KeyRound}
            description={'Поле ввода пароля'}
            placeholder={'Пароль'}
            type={'password'}
            warning={error?.message}
            {...field}
          />
        )}
      />
    </>
  );
};

export default CommonFields;
