import cn from 'classnames';
import type { FC } from 'react';

import SettingGroup from '@/src/components/layout/SettingGroup';

import styles from './DashboardTabs.module.scss';
import type { DashboardTabsProps } from './DashboardTabs.props';

const DashboardTabs: FC<DashboardTabsProps> = () => {
  return (
    <SettingGroup
      forceBorder
      className={cn(styles.tabs)}
    >
      Tabs
    </SettingGroup>
  );
};

export default DashboardTabs;
