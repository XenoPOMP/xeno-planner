import cn from 'classnames';
import { type Metadata } from 'next';

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
  return <main className={cn(styles.mainPage)}>Index page</main>;
}
