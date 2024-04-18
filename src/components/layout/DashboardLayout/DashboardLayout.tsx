import type { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { type FC } from 'react';

import DashboardSidebar from '@/src/components/layout/DashboardSidebar';

import styles from './DashboardLayout.module.scss';
import type { DashboardLayoutProps } from './DashboardLayout.props';

const DashboardLayout: FC<PropsWith<'children', DashboardLayoutProps>> = ({
  children,
}) => {
  return (
    <div className={cn(styles.wrapper)}>
      <DashboardSidebar />

      {children}
    </div>
  );
};

export default DashboardLayout;
