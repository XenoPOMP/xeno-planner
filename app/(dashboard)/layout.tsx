import type { PropsWith } from '@xenopomp/advanced-types';
import { type FC } from 'react';

import DashboardLayout from '@/src/components/layout/DashboardLayout';

const DashboardPageLayout: FC<PropsWith<'children', {}>> = ({ children }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardPageLayout;
