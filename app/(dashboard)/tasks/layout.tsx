import type { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import type { Metadata } from 'next';
import { type FC } from 'react';

import DashboardHeader from '@/src/components/layout/DashboardHeader';
import TasksTabControl from '@/src/components/ui/TasksTabControl';
import { generateOpenGraph } from '@/src/utils/seo';

import styles from './TasksLayout.module.scss';

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
    <main className={cn(styles.layout)}>
      <DashboardHeader heading={'Задачи'} />
      <TasksTabControl />

      <section className={cn(styles.content)}>{children}</section>
    </main>
  );
};

export default TaskPageLayout;
