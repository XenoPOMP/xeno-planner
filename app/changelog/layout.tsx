import { type FC, type PropsWithChildren } from 'react';

import LandingLayout from '@/src/components/layout/landing/LandingLayout';
import MdxStyle from '@/src/components/ui/MdxStyle';

const ChangelogLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LandingLayout
      wrapper={{
        style: {
          padding: 'var(--p-level-3)',
        },
      }}
    >
      <MdxStyle>{children}</MdxStyle>
    </LandingLayout>
  );
};

export default ChangelogLayout;
