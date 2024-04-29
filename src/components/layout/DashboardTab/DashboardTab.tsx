import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import DashboardMenuItem from '@/src/components/layout/DashboardMenuItem';

import type { DashboardTabProps } from './DashboardTab.props';

const DashboardTab: VariableFC<
  typeof DashboardMenuItem,
  DashboardTabProps,
  'isTab'
> = ({ className, children, ...props }) => {
  return (
    <DashboardMenuItem
      className={cn('w-fit', className)}
      isTab
      {...props}
    >
      {children}
    </DashboardMenuItem>
  );
};

export default DashboardTab;
