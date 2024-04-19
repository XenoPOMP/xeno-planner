import type { Metadata } from 'next';
import { type FC } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Распорядок дня',
  };
}

const TimeBlockingPage: FC<{}> = () => {
  return <main>Time blocking</main>;
};

export default TimeBlockingPage;
