import cn from 'classnames';
import { type FC } from 'react';

import DashboardMenu from '@/src/components/layout/DashboardMenu';
import Logo from '@/src/components/ui/Logo';

import styles from './DashboardSidebar.module.scss';
import type { DashboardSidebarProps } from './DashboardSidebar.props';

const DashboardSidebar: FC<DashboardSidebarProps> = () => {
  return (
    <aside className={cn(styles.sidebar)}>
      <Logo className={cn(styles.logo)} />

      <DashboardMenu />
    </aside>
  );
};

export default DashboardSidebar;
