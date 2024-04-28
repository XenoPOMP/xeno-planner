'use client';

import { KeyRound, Mail } from 'lucide-react';
import { type FC } from 'react';

import Button from '@/src/components/ui/Button';
import InputField from '@/src/components/ui/InputField';
import { FormActions, FormLink } from '@/src/components/ui/auth/Actions';
import AuthForm from '@/src/components/ui/auth/AuthForm';
import FieldList from '@/src/components/ui/auth/FieldList';

import type { RegisterFormProps } from './RegisterForm.props';

const RegisterForm: FC<RegisterFormProps> = () => {
  return (
    <AuthForm
      heading={'Регистрация'}
      noValidate
    >
      <FieldList>
        <InputField
          icon={Mail}
          description={'Поле ввода электронной почты'}
          placeholder={'Email'}
          type={'email'}
        />

        <InputField
          icon={KeyRound}
          description={'Поле ввода пароля'}
          placeholder={'Пароль'}
          type={'password'}
        />

        <InputField
          icon={KeyRound}
          description={'Поле ввода повторного пароля'}
          placeholder={'Повторите пароль'}
          type={'password'}
        />

        <Button type={'submit'}>Регистрация</Button>
      </FieldList>

      <FormActions>
        <FormLink href={'/auth/login'}>У меня уже есть аккаунт</FormLink>
      </FormActions>
    </AuthForm>
  );
};

export default RegisterForm;
