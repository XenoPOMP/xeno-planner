import type { Metadata } from 'next';
import { type FC } from 'react';

import { generateOpenGraph } from '@/src/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Задачи';
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

const TasksPage: FC<{}> = () => {
  return <main>Tasks</main>;
};

export default TasksPage;
