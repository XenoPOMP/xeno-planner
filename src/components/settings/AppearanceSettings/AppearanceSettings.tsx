'use client';

import { type FC } from 'react';

import SettingGroup from '@/src/components/layout/SettingGroup';

import type { AppearanceSettingsProps } from './AppearanceSettings.props';

const AppearanceSettings: FC<AppearanceSettingsProps> = () => {
  return <SettingGroup heading={'Внешний вид'} />;
};

export default AppearanceSettings;
