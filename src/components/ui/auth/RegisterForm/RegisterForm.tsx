'use client';

import { KeyRound } from 'lucide-react';
import { type FC } from 'react';
import { Controller, FormProvider } from 'react-hook-form';

import Button from '@/src/components/ui/Button';
import InputField from '@/src/components/ui/InputField';
import { FormActions, FormLink } from '@/src/components/ui/auth/Actions';
import AuthForm from '@/src/components/ui/auth/AuthForm';
import FieldList from '@/src/components/ui/auth/FieldList';
import { FIELD_IS_REQUIRED } from '@/src/constants/validation.constants.ts';
import { useAuthForm } from '@/src/hooks/useAuthForm.ts';
import type { IRegisterForm } from '@/src/types';
import { validatePasswordsMatch } from '@/src/utils/validation/auth-validation.ts';

import CommonFields from '../CommonFields';

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
          {/* eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error */}
          {/* @ts-ignore I will not use reset func, so IRegisterForm is suitable. */}
          <CommonFields control={methods.control} />

          <Controller
            control={methods.control}
            name={'repeatPassword'}
            rules={{
              ...FIELD_IS_REQUIRED,
              validate: (value, { password }) =>
                validatePasswordsMatch(value, password, { ...methods }),
            }}
            render={({ field, fieldState: { error } }) => (
              <InputField
                icon={KeyRound}
                description={'Поле ввода повторного пароля'}
                placeholder={'Повторите пароль'}
                type={'password'}
                warning={error?.message}
                {...field}
              />
            )}
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
