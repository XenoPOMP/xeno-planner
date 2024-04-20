'use client';

import { CircleUserRound, KeyRound, Mail } from 'lucide-react';
import { type FC } from 'react';

import Button from '@/src/components/ui/Button';
import InputField from '@/src/components/ui/InputField';
import { FormActions, FormLink } from '@/src/components/ui/auth/Actions';
import AuthForm from '@/src/components/ui/auth/AuthForm';
import FieldList from '@/src/components/ui/auth/FieldList';
import { NO_AUTOCOMPLETE } from '@/src/constants/fields.constants.ts';

import type { RegisterFormProps } from './RegisterForm.props';

const RegisterForm: FC<RegisterFormProps> = () => {
  return (
    <AuthForm heading={'Регистрация'}>
      <FieldList>
        <InputField
          icon={CircleUserRound}
          description={'Поле ввода имени'}
          placeholder={'Имя'}
          formNoValidate
          {...NO_AUTOCOMPLETE}
        />

        <InputField
          icon={Mail}
          description={'Поле ввода электронной почты'}
          placeholder={'Email'}
          type={'email'}
          formNoValidate
          {...NO_AUTOCOMPLETE}
        />

        <InputField
          icon={KeyRound}
          description={'Поле ввода пароля'}
          placeholder={'Пароль'}
          type={'password'}
          formNoValidate
          {...NO_AUTOCOMPLETE}
        />

        <InputField
          icon={KeyRound}
          description={'Поле ввода повторного пароля'}
          placeholder={'Повторите пароль'}
          type={'password'}
          formNoValidate
          {...NO_AUTOCOMPLETE}
        />

        <Button>Регистрация</Button>
      </FieldList>

      <FormActions>
        <FormLink href={'/auth/login'}>У меня уже есть аккаунт</FormLink>
      </FormActions>
    </AuthForm>
  );
};

export default RegisterForm;
