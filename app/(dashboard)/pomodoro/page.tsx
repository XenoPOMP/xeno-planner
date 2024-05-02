import type { Metadata } from 'next';
import { type FC } from 'react';

import DashboardHeader from '@/src/components/layout/DashboardHeader';
import { generateOpenGraph } from '@/src/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Таймер';
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

const PomodoroPage: FC<{}> = () => {
  return (
    <main>
      <DashboardHeader heading={'Таймер Pomodoro'} />
    </main>
  );
};

export default PomodoroPage;
