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
    });
  });

  test('Preid can be undefined', () => {
    testParseVersion('0.0.0', {
      version: '0.0.0',
    });
  });

  test('Preid is parsed correctly', () => {
    testParseVersion('0.0.0-alpha.0', {
      version: '0.0.0',
      preid: 'alpha',
    });

    testParseVersion('0.0.0-beta.0', {
      version: '0.0.0',
      preid: 'beta',
    });

    testParseVersion('0.0.0-rc.0', {
      version: '0.0.0',
      preid: 'rc',
    });
  });

  test('Not allowed preids will be skipped', () => {
    testParseVersion('0.0.0-notPreid.0', {
      version: '0.0.0',
    });
  });
});
