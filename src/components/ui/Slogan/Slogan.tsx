'use client';

import cn from 'classnames';
import Link from 'next/link';
import { type FC } from 'react';

import parentStyles from '@/app/main-page.module.scss';
import Button from '@/src/components/ui/Button';
import HtmlHeading from '@/src/components/ui/Heading';
import TypografedText from '@/src/components/ui/TypografedText';
import { DASHBOARD_PAGES } from '@/src/types/routes.ts';

import styles from './Slogan.module.scss';
import type { SloganProps } from './Slogan.props';

const Slogan: FC<SloganProps> = () => {
  return (
    <article className={cn(parentStyles.column, styles.slogan)}>
      <HtmlHeading
        as={'h1'}
        className={cn(styles.sloganText)}
      >
        {/* eslint-disable-next-line no-irregular-whitespace */}
        Управляйте <strong>потоком</strong> вашего рабочего дня в XENO Planner
      </HtmlHeading>

      <p className={cn('text-primary-font-darker')}>
        <TypografedText>
          XENO Planner — это комплексное приложение для управления временем,
          которое поможет вам максимально использовать каждый день.
        </TypografedText>
      </p>

      <Link href={DASHBOARD_PAGES.HOME}>
        <Button className={cn('!p24')}>Перейти в приложение</Button>
      </Link>
    </article>
  );
};

export default Slogan;
