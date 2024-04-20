import type { Metadata } from 'next';
import { type FC } from 'react';

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
  return <main>Pomodoro</main>;
};

export default PomodoroPage;
