import cn from 'classnames';
import { type FC } from 'react';

import Logo from '@/src/components/ui/Logo';
import Profile from '@/src/components/ui/Profile';

import type { LandingHeaderProps } from './LandingHeader.props';

const LandingHeader: FC<LandingHeaderProps> = () => {
  return (
    <header
      className={cn(
        'flex justify-between items-center border-b-[1px] border-b-secondary-border',
      )}
    >
      <Logo variant={'landing'} />

      <section
        style={{
          padding: 'var(--p-level-3)',
        }}
      >
        <Profile />
      </section>
    </header>
  );
};

export default LandingHeader;
