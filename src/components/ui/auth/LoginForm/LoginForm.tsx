'use client';

import { KeyRound, Mail } from 'lucide-react';
import { type FC } from 'react';

import InputField from '@/src/components/ui/InputField';
import AuthForm from '@/src/components/ui/auth/AuthForm';
import FieldList from '@/src/components/ui/auth/FieldList';

import type { LoginFormProps } from './LoginForm.props';

const LoginForm: FC<LoginFormProps> = () => {
  return (
    <AuthForm heading={'Вход'}>
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
      </FieldList>
    </AuthForm>
  );
};

export default LoginForm;
