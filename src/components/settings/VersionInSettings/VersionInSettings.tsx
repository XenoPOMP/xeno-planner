import cn from 'classnames';
import { type FC } from 'react';

import packageJson from '@/package.json';
import SettingGroup from '@/src/components/layout/SettingGroup';
import { parseVersion } from '@/src/utils/misc';

import type { VersionInSettingsProps } from './VersionInSettings.props';

/**
 * This component displays current app version in
 * settings page.
 * @constructor
 */
const VersionInSettings: FC<VersionInSettingsProps> = () => {
  const { version, preid } = parseVersion(packageJson.version);

  return (
    <SettingGroup>
      <div className={cn('col-span-full p14')}>
        <span className={cn('italic')}>Версия приложения:</span> {version} (
        {preid})
      </div>
    </SettingGroup>
  );
};

export default VersionInSettings;
