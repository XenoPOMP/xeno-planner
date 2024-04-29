import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import HtmlHeading from '@/src/components/ui/Heading';
import Profile from '@/src/components/ui/Profile';

import styles from './DashboardHeader.module.scss';
import type { DashboardHeaderProps } from './DashboardHeader.props';

const DashboardHeader: VariableFC<
  'header',
  DashboardHeaderProps,
  'children'
> = ({ className, heading, ...props }) => {
  return (
    <header
      className={cn(styles.dashboardHeader, className)}
      {...props}
    >
      {heading && (
        <HtmlHeading
          as={'h1'}
          className={cn(styles.heading)}
        >
          {heading}
        </HtmlHeading>
      )}

      <Profile />
    </header>
  );
};

export default DashboardHeader;
