import type { Metadata } from 'next';
import { type FC } from 'react';

import RegisterForm from '@/src/components/ui/auth/RegisterForm';
import { NO_INDEX_PAGE } from '@/src/constants/seo.constants.ts';
import { generateOpenGraph } from '@/src/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Регистрация';

  return {
    title,
    openGraph: generateOpenGraph({
      title,
    }),
    ...NO_INDEX_PAGE,
  };
}

const RegisterPage: FC<{}> = () => {
  return <RegisterForm />;
};

export default RegisterPage;
