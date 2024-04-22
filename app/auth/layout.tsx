import type { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import type { Metadata } from 'next';
import { type FC } from 'react';

import { NO_INDEX_PAGE } from '@/src/constants/seo.constants.ts';
import { generateOpenGraph } from '@/src/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const description =
    'Войдите в систему, чтобу получить доступ к полному функционалу.';

  return {
    // title,
    description,
    openGraph: generateOpenGraph({
      // title,
      description,
    }),
    ...NO_INDEX_PAGE,
  };
}

const AuthLayout: FC<PropsWith<'children', {}>> = ({ children }) => {
  return <main className={cn('h-dvh flex-center p-[1rem]')}>{children}</main>;
};

export default AuthLayout;
