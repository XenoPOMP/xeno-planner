import type { Metadata } from 'next';
import { type FC } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Таймер',
  };
}

const PomodoroPage: FC<{}> = () => {
  return <main>Pomodoro</main>;
};

export default PomodoroPage;
