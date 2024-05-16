import cn from 'classnames';
import { type Metadata } from 'next';

import LandingLayout from '@/src/components/layout/landing/LandingLayout';
import Slogan from '@/src/components/ui/Slogan';
import { generateOpenGraph } from '@/src/utils/seo';

import styles from './main-page.module.scss';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Главная страница`;
  const description = undefined;

  return {
    // title,
    description,
    openGraph: generateOpenGraph({
      title,
      description,
    }),
  };
}

export default function Home() {
  return (
    <LandingLayout
      wrapper={{
        className: styles.main,
      }}
    >
      <Slogan />

      <article className={cn(styles.column)}></article>
    </LandingLayout>
  );
}
