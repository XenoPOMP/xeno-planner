import { type Metadata } from 'next';
import { type FC } from 'react';

import Auth from '@/src/components/layout/Auth';
import { NO_INDEX_PAGE } from '@/src/constants/seo.constants.ts';
import { generateOpenGraph } from '@/src/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Авторизация';
  const description =
    'Войдите в систему, чтобу получить доступ к полному функционалу.';

  return {
    title,
    description,
    openGraph: generateOpenGraph({
      title,
      description,
    }),
    ...NO_INDEX_PAGE,
  };
}

const AuthPage: FC<{}> = () => {
  return <Auth />;
};

export default AuthPage;
