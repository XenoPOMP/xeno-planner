'use client';

import { KeyRound, Mail } from 'lucide-react';
import { type FC } from 'react';

import Button from '@/src/components/ui/Button';
import InputField from '@/src/components/ui/InputField';
import { FormActions, FormLink } from '@/src/components/ui/auth/Actions';
import AuthForm from '@/src/components/ui/auth/AuthForm';
import FieldList from '@/src/components/ui/auth/FieldList';
import { useAuthForm } from '@/src/hooks/useAuthForm.ts';
import type { IAuthForm } from '@/src/types';

import type { LoginFormProps } from './LoginForm.props';

const LoginForm: FC<LoginFormProps> = () => {
  const { register, authSubmitAction, handleSubmit } =
    useAuthForm<IAuthForm>('login');

  return (
    <AuthForm
      heading={'Вход'}
      onSubmit={handleSubmit(authSubmitAction)}
    >
      <FieldList>
        <InputField
          icon={Mail}
          description={'Поле ввода электронной почты'}
          placeholder={'Email'}
          type={'email'}
          {...register('email')}
        />

        <InputField
          icon={KeyRound}
          description={'Поле ввода пароля'}
          placeholder={'Пароль'}
          type={'password'}
          {...register('password')}
        />

        <Button type={'submit'}>Войти</Button>
      </FieldList>

      <FormActions>
        <FormLink href={'/auth/register'}>Регистрация</FormLink>
      </FormActions>
    </AuthForm>
  );
};

export default LoginForm;
