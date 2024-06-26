import cn from 'classnames';
import type { Metadata } from 'next';
import { type FC } from 'react';

import DashboardHeader from '@/src/components/layout/DashboardHeader';
import { generateOpenGraph } from '@/src/utils/seo';

import TimeBlocking from './components/TimeBlocking';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Распорядок дня';
  const description = undefined;

  return {
    title,
    description,
    openGraph: generateOpenGraph({
      title,
      description,
    }),
  };
}

const TimeBlockingPage: FC<{}> = () => {
  return (
    <main className={cn('overflow-x-hidden')}>
      <DashboardHeader heading={'Распорядок дня'} />

      <TimeBlocking />
    </main>
  );
};

export default TimeBlockingPage;
