import cn from 'classnames';
import { type Metadata } from 'next';

import LandingHeader from '@/src/components/layout/landing/LandingHeader';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer.tsx';
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
    <main className={cn(styles.mainPage)}>
      <LandingHeader />

      <UiContainer
        as={'section'}
        maxWidth={'1600px'}
        margin={'0px'}
        className={cn(styles.body)}
      >
        <article className={cn(styles.column)}></article>
        <article className={cn(styles.column)}></article>
      </UiContainer>
    </main>
  );
}
