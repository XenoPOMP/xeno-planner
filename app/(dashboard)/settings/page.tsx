import type { Metadata } from 'next';
import { type FC } from 'react';

import { NO_INDEX_PAGE } from '@/src/constants/seo.constants.ts';
import { generateOpenGraph } from '@/src/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Настройки';
  const description = undefined;

  return {
    title,
    description,
    openGraph: generateOpenGraph({
      title,
      description,
    }),
    ...NO_INDEX_PAGE,
  };
}

const SettingsPage: FC<{}> = () => {
  return <main>Settings</main>;
};

export default SettingsPage;
