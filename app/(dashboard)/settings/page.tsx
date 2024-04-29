import cn from 'classnames';
import type { Metadata } from 'next';
import { type FC } from 'react';

import DashboardHeader from '@/src/components/layout/DashboardHeader';
import AccountSettings from '@/src/components/settings/AccountSettings';
import AppearanceSettings from '@/src/components/settings/AppearanceSettings';
import Logout from '@/src/components/settings/Logout';
import VersionInSettings from '@/src/components/settings/VersionInSettings';
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
  return (
    <main>
      <DashboardHeader heading={'Настройки'} />

      <section className={cn('')}>
        <AppearanceSettings />
        <AccountSettings />
        <Logout />
        <VersionInSettings />
      </section>
    </main>
  );
};

export default SettingsPage;
