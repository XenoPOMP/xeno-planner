'use client';

import { type FC } from 'react';
import { FormProvider } from 'react-hook-form';

import Button from '@/src/components/ui/Button';
import { FormActions, FormLink } from '@/src/components/ui/auth/Actions';
import AuthForm from '@/src/components/ui/auth/AuthForm';
import FieldList from '@/src/components/ui/auth/FieldList';
import { useAuthForm } from '@/src/hooks/useAuthForm.ts';
import type { IAuthForm } from '@/src/types';

import CommonFields from '../CommonFields';

import type { LoginFormProps } from './LoginForm.props';

const LoginForm: FC<LoginFormProps> = () => {
  const { register, handleSubmit, authSubmitAction, ...methods } =
    useAuthForm<IAuthForm>('login');

  return (
    <FormProvider
      register={register}
      handleSubmit={handleSubmit}
      {...methods}
    >
      <AuthForm
        heading={'Вход'}
        onSubmit={handleSubmit(authSubmitAction)}
        noValidate
      >
        <FieldList>
          <CommonFields control={methods.control} />
          <Button type={'submit'}>Войти</Button>
        </FieldList>

        <FormActions>
          <FormLink href={'/auth/register'}>Регистрация</FormLink>
        </FormActions>
      </AuthForm>
    </FormProvider>
  );
};

export default LoginForm;
