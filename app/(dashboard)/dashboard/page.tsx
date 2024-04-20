import { type Metadata } from 'next';
import { type FC } from 'react';

import { generateOpenGraph } from '@/src/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Личный кабинет';
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

const DashboardPage: FC<{}> = () => {
  return <main>Dashboard</main>;
};

export default DashboardPage;
