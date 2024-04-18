import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { dashboardMenuData } from '@/src/components/layout/DashboardMenu/dashboard.menu.data.ts';
import DashboardMenuItem from '@/src/components/layout/DashboardMenuItem';

import type { DashboardMenuProps } from './DashboardMenu.props';

const DashboardMenu: VariableFC<'nav', DashboardMenuProps, 'children'> = ({
  className,
  ...props
}) => {
  return (
    <nav
      className={cn('flex-grow overflow-y-auto', className)}
      {...props}
    >
      <ul>
        {dashboardMenuData.map(({ icon, href, children, ...props }, index) => (
          <DashboardMenuItem
            icon={icon}
            href={href}
            key={`[${index}] ${href.toString()}`}
            {...props}
          >
            {children}
          </DashboardMenuItem>
        ))}
      </ul>
    </nav>
  );
};

export default DashboardMenu;
