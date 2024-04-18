import type { PropsWith } from '@xenopomp/advanced-types';
import { type FC } from 'react';

import HtmlHeading from '@/src/components/ui/Heading';

import type { DashboardLayoutProps } from './DashboardLayout.props';

const DashboardLayout: FC<PropsWith<'children', DashboardLayoutProps>> = ({
  children,
}) => {
  return (
    <>
      <HtmlHeading as={'h1'}>Dashboard!</HtmlHeading>

      {children}
    </>
  );
};

export default DashboardLayout;
