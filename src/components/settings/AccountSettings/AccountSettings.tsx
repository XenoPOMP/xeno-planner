'use client';

import cn from 'classnames';
import {
  BookUser,
  BriefcaseBusiness,
  Ellipsis,
  Mail,
  Sofa,
} from 'lucide-react';
import { type FC } from 'react';

import SettingGroup from '@/src/components/layout/SettingGroup';
import InputField from '@/src/components/ui/InputField';

import type { AccountSettingsProps } from './AccountSettings.props';

const AccountSettings: FC<AccountSettingsProps> = () => {
  const handleSave = () => {
    console.log('Account saving started...');
  };

  return (
    <SettingGroup
      heading={'Настройки аккаунта'}
      save={{
        label: 'Сохранить',
        action: handleSave,
      }}
    >
      <InputField
        icon={Mail}
        placeholder={'Email'}
        type={'email'}
      />

      <InputField
        icon={BookUser}
        placeholder={'Имя'}
      />

      <InputField
        icon={BriefcaseBusiness}
        placeholder={'Время работы (в мин.)'}
        type={'number'}
      />

      <InputField
        icon={Sofa}
        placeholder={'Время перерыва (в мин.)'}
        type={'number'}
      />

      <InputField
        icon={Ellipsis}
        placeholder={'Количество интервалов (макс 10)'}
        type={'number'}
        outerClassName={cn('col-span-full')}
      />
    </SettingGroup>
  );
};

export default AccountSettings;
