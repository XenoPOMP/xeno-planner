'use client';

import { KeyRound, Mail } from 'lucide-react';
import { type FC } from 'react';
import { FormProvider } from 'react-hook-form';

import Button from '@/src/components/ui/Button';
import InputField from '@/src/components/ui/InputField';
import { FormActions, FormLink } from '@/src/components/ui/auth/Actions';
import AuthForm from '@/src/components/ui/auth/AuthForm';
import FieldList from '@/src/components/ui/auth/FieldList';
import { useAuthForm } from '@/src/hooks/useAuthForm.ts';
import type { IRegisterForm } from '@/src/types';

import type { RegisterFormProps } from './RegisterForm.props';

const RegisterForm: FC<RegisterFormProps> = () => {
  const { register, handleSubmit, authSubmitAction, ...methods } =
    useAuthForm<IRegisterForm>('register');

  return (
    <FormProvider
      register={register}
      handleSubmit={handleSubmit}
      {...methods}
    >
      <AuthForm
        heading={'Регистрация'}
        onSubmit={handleSubmit(authSubmitAction)}
        noValidate
      >
        <FieldList>
          <InputField
            icon={Mail}
            description={'Поле ввода электронной почты'}
            placeholder={'Email'}
            type={'email'}
            register={'email'}
          />

          <InputField
            icon={KeyRound}
            description={'Поле ввода пароля'}
            placeholder={'Пароль'}
            type={'password'}
            register={'password'}
          />

          <InputField
            icon={KeyRound}
            description={'Поле ввода повторного пароля'}
            placeholder={'Повторите пароль'}
            type={'password'}
            register={'repeatPassword'}
          />

          <Button type={'submit'}>Регистрация</Button>
        </FieldList>

        <FormActions>
          <FormLink href={'/auth/login'}>У меня уже есть аккаунт</FormLink>
        </FormActions>
      </AuthForm>
    </FormProvider>
  );
};

export default RegisterForm;
