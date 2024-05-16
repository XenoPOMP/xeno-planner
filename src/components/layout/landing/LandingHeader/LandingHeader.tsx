import cn from 'classnames';
import { type FC } from 'react';

import Logo from '@/src/components/ui/Logo';

import type { LandingHeaderProps } from './LandingHeader.props';

const LandingHeader: FC<LandingHeaderProps> = () => {
  return (
    <header className={cn('flex justify-between items-center')}>
      <Logo variant={'landing'} />
    </header>
  );
};

export default LandingHeader;
