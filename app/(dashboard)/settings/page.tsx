import type { Metadata } from 'next';
import { type FC } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Настройки',
  };
}

const SettingsPage: FC<{}> = () => {
  return <main>Settings</main>;
};

export default SettingsPage;
