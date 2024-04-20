'use client';

import { KeyRound, Mail } from 'lucide-react';
import { type FC } from 'react';

import Button from '@/src/components/ui/Button';
import InputField from '@/src/components/ui/InputField';
import { FormActions, FormLink } from '@/src/components/ui/auth/Actions';
import AuthForm from '@/src/components/ui/auth/AuthForm';
import FieldList from '@/src/components/ui/auth/FieldList';
import { NO_AUTOCOMPLETE } from '@/src/constants/fields.constants.ts';

import type { LoginFormProps } from './LoginForm.props';

const LoginForm: FC<LoginFormProps> = () => {
  return (
    <AuthForm
      heading={'Вход'}
      style={{
        width: 'min(462px, 100%)',
      }}
    >
      <FieldList>
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

        <Button>Войти</Button>
      </FieldList>

      <FormActions>
        <FormLink href={'/auth/register'}>Регистрация</FormLink>
      </FormActions>
    </AuthForm>
  );
};

export default LoginForm;
