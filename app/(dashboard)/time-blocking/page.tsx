import type { Metadata } from 'next';
import { type FC } from 'react';

import { generateOpenGraph } from '@/src/utils/seo';

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
  return <main>Time blocking</main>;
};

export default TimeBlockingPage;
