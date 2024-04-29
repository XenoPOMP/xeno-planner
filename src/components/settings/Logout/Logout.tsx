import cn from 'classnames';
import { type FC } from 'react';

import SettingGroup from '@/src/components/layout/SettingGroup';
import Button from '@/src/components/ui/Button';

import type { LogoutProps } from './Logout.props';

const Logout: FC<LogoutProps> = () => {
  return (
    <SettingGroup>
      <Button
        variant={'danger'}
        thin
        className={cn('w-fit')}
      >
        Выйти из аккаунта
      </Button>
    </SettingGroup>
  );
};

export default Logout;
