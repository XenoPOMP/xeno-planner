import type { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import type { FC } from 'react';

import SettingGroup from '@/src/components/layout/SettingGroup';

import styles from './DashboardTabs.module.scss';
import type { DashboardTabsProps } from './DashboardTabs.props';

const DashboardTabs: FC<PropsWith<'children', DashboardTabsProps>> = ({
  children,
}) => {
  return (
    <SettingGroup
      forceBorder
      className={cn(styles.tabs)}
    >
      {children}
    </SettingGroup>
  );
};

export default DashboardTabs;
