import cn from 'classnames';
import { type FC } from 'react';

import packageJson from '@/package.json';
import SettingGroup from '@/src/components/layout/SettingGroup';
import { parseVersion } from '@/src/utils/misc';

import type { VersionInSettingsProps } from './VersionInSettings.props';

const PreidText: FC<
  Pick<ReturnType<typeof parseVersion>, 'preid' | 'prerelease'>
> = ({ preid, prerelease }) => {
  if (!preid) {
    return <></>;
  }

  if (!prerelease) {
    return <>({preid})</>;
  }

  return (
    <>
      ({preid}.{prerelease})
    </>
  );
};

/**
 * This component displays current app version in
 * settings page.
 * @constructor
 */
const VersionInSettings: FC<VersionInSettingsProps> = () => {
  const { version, preid, prerelease } = parseVersion(packageJson.version);

  return (
    <SettingGroup>
      <div className={cn('col-span-full p14')}>
        v.{version}{' '}
        <PreidText
          preid={preid}
          prerelease={prerelease}
        />
      </div>
    </SettingGroup>
  );
};

export default VersionInSettings;
