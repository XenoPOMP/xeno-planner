import cn from 'classnames';
import { type FC } from 'react';

import styles from './DashboardSidebar.module.scss';
import type { DashboardSidebarProps } from './DashboardSidebar.props';

const DashboardSidebar: FC<DashboardSidebarProps> = () => {
  return <aside className={cn(styles.sidebar)}>Sidebar</aside>;
};

export default DashboardSidebar;
