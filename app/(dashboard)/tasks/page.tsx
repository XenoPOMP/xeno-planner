import type { Metadata } from 'next';
import { type FC } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Задачи',
  };
}

const TasksPage: FC<{}> = () => {
  return <main>Tasks</main>;
};

export default TasksPage;
