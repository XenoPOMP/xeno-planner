import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';

import styles from './DashboardMenuItem.module.scss';
import type { DashboardMenuItemProps } from './DashboardMenuItem.props';

const DashboardMenuItem: VariableFC<typeof Link, DashboardMenuItemProps> = ({
  href,
  className,
  children,
  icon: Icon,
  ...props
}) => {
  return (
    <li>
      <Link
        className={cn(styles.menuItem, className)}
        href={href}
        {...props}
      >
        {Icon && <Icon size={'1.33em'} />}

        {children}
      </Link>
    </li>
  );
};

export default DashboardMenuItem;
