import { type Metadata } from 'next';
import { type FC } from 'react';

import DashboardHeader from '@/src/components/layout/DashboardHeader';
import Statistics from '@/src/components/ui/Statistics';
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
  return (
    <main>
      <DashboardHeader heading={'Личный кабинет'} />

      <section>
        <Statistics />
      </section>
    </main>
  );
};

export default DashboardPage;
