'use server';

import type { SubmitHandler } from 'react-hook-form';

import { signIn } from '@/auth.ts';
import type { AuthType } from '@/src/hooks/useAuthForm.ts';

export const authSubmitAction: SubmitHandler<AuthType> = async data => {
  signIn('credentials', data);
};
