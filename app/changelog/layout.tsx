import { type FC, type PropsWithChildren } from 'react';

import LandingLayout from '@/src/components/layout/landing/LandingLayout';

const ChangelogLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LandingLayout
      wrapper={{
        style: {
          padding: 'var(--p-level-3)',
        },
      }}
    >
      {children}
    </LandingLayout>
  );
};

export default ChangelogLayout;
