'use client';

import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './DashboardMenuItem.module.scss';
import type { DashboardMenuItemProps } from './DashboardMenuItem.props';

const DashboardMenuItem: VariableFC<typeof Link, DashboardMenuItemProps> = ({
  href,
  className,
  children,
  icon: Icon,
  'aria-disabled': ariaDisabled,
  parent,
  ...props
}) => {
  const pathname = usePathname();

  const isActive = (): boolean => {
    if (href === '/') {
      return href === pathname;
    }

    /** Check if target url is nested inside parent url. */
    if (parent) {
      return pathname.startsWith(parent.toString());
    }

    return href.toString().startsWith(pathname);
  };

  return (
    <li className={cn('w-full')}>
      <Link
        className={cn(
          styles.menuItem,
          {
            [`${styles.active}`]: isActive(),
          },
          className,
        )}
        href={href}
        aria-disabled={ariaDisabled}
        {...props}
      >
        {Icon && (
          <Icon
            size={'1.33em'}
            className={cn('flex-shrink-0')}
          />
        )}

        <span className={cn(styles.linkText)}>{children}</span>
      </Link>
    </li>
  );
};

export default DashboardMenuItem;
