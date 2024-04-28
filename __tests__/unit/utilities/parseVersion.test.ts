import { describe, test } from 'vitest';

import { expectToDeepEqual } from '@/__tests__/assets/utilities';
import { type VersionData, parseVersion } from '@/src/utils/misc';

const testParseVersion = (raw: string, expected: VersionData) => {
  expectToDeepEqual(parseVersion(raw), expected);
};

describe('parseVersion func', () => {
  test('Version can be null', () => {
    testParseVersion('Random string', {
      version: null,
      prerelease: undefined,
    });
  });

  test('Preid can be undefined', () => {
    testParseVersion('0.0.0', {
      version: '0.0.0',
      prerelease: undefined,
    });
  });

  test('Preid is parsed correctly', () => {
    testParseVersion('0.0.0-alpha.0', {
      version: '0.0.0',
      preid: 'alpha',
      prerelease: '0',
    });

    testParseVersion('0.0.0-beta.0', {
      version: '0.0.0',
      preid: 'beta',
      prerelease: '0',
    });

    testParseVersion('0.0.0-rc.0', {
      version: '0.0.0',
      preid: 'rc',
      prerelease: '0',
    });
  });

  test('Not allowed preids will be skipped', () => {
    testParseVersion('0.0.0-notPreid.0', {
      version: '0.0.0',
      prerelease: '0',
    });
  });

  test('Different prereleases', () => {
    testParseVersion('0.0.1-rc.0', {
      version: '0.0.1',
      preid: 'rc',
      prerelease: '0',
    });

    testParseVersion('0.0.1-rc.1', {
      version: '0.0.1',
      preid: 'rc',
      prerelease: '1',
    });

    testParseVersion('0.0.1-rc.25', {
      version: '0.0.1',
      preid: 'rc',
      prerelease: '25',
    });
  });
});
