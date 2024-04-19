import { type Metadata } from 'next';
import { type FC } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Личный кабинет',
  };
}

const DashboardPage: FC<{}> = () => {
  return <main>Dashboard</main>;
};

export default DashboardPage;
