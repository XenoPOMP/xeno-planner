import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { SquareGanttChart } from 'lucide-react';
import Link from 'next/link';

import { AppConstants } from '@/app/app.constants.ts';

import styles from './Logo.module.scss';
import type { LogoProps } from './Logo.props';

const Logo: VariableFC<typeof Link, LogoProps, 'children' | 'href'> = ({
  className,
  ...props
}) => {
  return (
    <Link
      href={'/'}
      className={cn(styles.logo, className)}
      {...props}
    >
      <SquareGanttChart
        size={'1.33em'}
        className={cn('text-accent')}
      />

      <strong>{AppConstants.appName}</strong>
    </Link>
  );
};

export default Logo;
