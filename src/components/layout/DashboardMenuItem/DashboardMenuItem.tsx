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
  ...props
}) => {
  const pathname = usePathname();

  const isActive = () => {
    if (href === '/') {
      return href === pathname;
    }

    return href.toString().startsWith(pathname);
  };

  return (
    <li>
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
        {Icon && <Icon size={'1.33em'} />}

        {children}
      </Link>
    </li>
  );
};

export default DashboardMenuItem;
