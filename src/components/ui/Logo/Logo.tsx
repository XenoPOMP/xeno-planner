import type { Defined, VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { SquareGanttChart } from 'lucide-react';
import Link from 'next/link';
import { type ComponentProps } from 'react';

import { AppConstants } from '@/app/app.constants.ts';
import packageJson from '@/package.json';

import styles from './Logo.module.scss';
import type { LogoProps } from './Logo.props';

const Logo: VariableFC<typeof Link, LogoProps, 'children' | 'href'> = ({
  className,
  variant = 'sidebar',
  preid = true,
  ...props
}) => {
  const variantsMap: Record<
    Defined<typeof variant>,
    Pick<ComponentProps<typeof Link>, 'className'>
  > = {
    sidebar: {
      className: styles.sidebar,
    },
  };

  const preidRegex = /(\d\.){2}\d-\w+\.\d/gi;
  const preidLabel = packageJson.version.replace(
    /(^(\d\.){2}\d-)|(\.\d$)/gi,
    '',
  );

  return (
    <Link
      href={'/'}
      className={cn(styles.logo, variantsMap[variant].className, className)}
      {...props}
    >
      <SquareGanttChart
        size={'1.33em'}
        className={cn('text-accent')}
      />

      <strong>{AppConstants.appName}</strong>

      {preid && preidRegex.test(packageJson.version) && (
        <div className={cn(styles.preid)}>{preidLabel}</div>
      )}
    </Link>
  );
};

export default Logo;