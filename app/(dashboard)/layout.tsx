import type { PropsWith } from '@xenopomp/advanced-types';
import { type Metadata } from 'next';
import { type FC } from 'react';

import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { NO_INDEX_PAGE } from '@/src/constants/seo.constants.ts';

export const metadata: Metadata = {
  ...NO_INDEX_PAGE,
};

const DashboardPageLayout: FC<PropsWith<'children', {}>> = ({ children }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardPageLayout;
