'use client';

import { type FC } from 'react';

import SettingGroup from '@/src/components/layout/SettingGroup';
import ThemeSelect from '@/src/components/ui/ThemeSelect';

import type { AppearanceSettingsProps } from './AppearanceSettings.props';

const AppearanceSettings: FC<AppearanceSettingsProps> = () => {
  return (
    <SettingGroup heading={'Внешний вид'}>
      <ThemeSelect />
    </SettingGroup>
  );
};

export default AppearanceSettings;
