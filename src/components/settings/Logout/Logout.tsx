'use client';

import cn from 'classnames';
import { type FC } from 'react';

import SettingGroup from '@/src/components/layout/SettingGroup';
import Button from '@/src/components/ui/Button';
import { useLogout } from '@/src/hooks/useLogout.ts';

import type { LogoutProps } from './Logout.props';

const Logout: FC<LogoutProps> = () => {
  const logout = useLogout();

  return (
    <SettingGroup>
      <Button
        variant={'danger'}
        thin
        className={cn('w-fit')}
        onClick={() => logout()}
      >
        Выйти из аккаунта
      </Button>
    </SettingGroup>
  );
};

export default Logout;
