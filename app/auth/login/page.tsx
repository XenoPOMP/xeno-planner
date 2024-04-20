import type { Metadata } from 'next';
import { type FC } from 'react';

import { NO_INDEX_PAGE } from '@/src/constants/seo.constants.ts';
import { generateOpenGraph } from '@/src/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Логин';

  return {
    title,
    openGraph: generateOpenGraph({
      title,
    }),
    ...NO_INDEX_PAGE,
  };
}

const LoginPage: FC<{}> = () => {
  return <>Login</>;
};

export default LoginPage;
