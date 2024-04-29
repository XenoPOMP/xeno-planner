import type { PropsWith } from '@xenopomp/advanced-types';
import type { Metadata } from 'next';
import { type FC } from 'react';

import DashboardHeader from '@/src/components/layout/DashboardHeader';
import TasksTabControl from '@/src/components/ui/TasksTabControl';
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

const TaskPageLayout: FC<PropsWith<'children', {}>> = ({ children }) => {
  return (
    <main>
      <DashboardHeader heading={'Задачи'} />
      <TasksTabControl />

      {children}
    </main>
  );
};

export default TaskPageLayout;
