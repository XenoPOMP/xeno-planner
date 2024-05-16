import type { Defined, VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { SquareGanttChart } from 'lucide-react';
import Link from 'next/link';
import { type ComponentProps } from 'react';

import { AppConstants } from '@/app/app.constants.ts';
import packageJson from '@/package.json';
import { parseVersion } from '@/src/utils/misc';

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
    landing: {
      className: styles.landing,
    },
  };

  const { preid: parsedPreid } = parseVersion(packageJson.version);

  return (
    <Link
      href={'/'}
      className={cn(
        styles.logo,
        variantsMap[variant].className,
        'select-none',
        className,
      )}
      {...props}
    >
      <SquareGanttChart
        size={'1.33em'}
        className={cn('text-accent')}
      />

      <strong>{AppConstants.appName}</strong>

      {preid && parsedPreid !== undefined && (
        <div className={cn(styles.preid)}>{parsedPreid}</div>
      )}
    </Link>
  );
};

export default Logo;
