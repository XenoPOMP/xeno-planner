import type { Nullable } from '@xenopomp/advanced-types';

export type Preid = 'alpha' | 'beta' | 'rc';

export interface VersionData {
  /** Version in format: (__``x.x.x``__-beta.x) */
  version: Nullable<string>;

  /** Version preid. (x.x.x-__``beta``__.x) */
  preid?: Preid;
}

/**
 * Parses version with preid.
 *
 * @param raw
 *
 * @example
 * const { version, preid } = parseVersion('0.0.0-beta.0');
 * // version = '0.0.0'
 * // preid = 'beta'
 */
export const parseVersion = (raw: string): VersionData => {
  const allPreids: Array<Preid> = ['alpha', 'beta', 'rc'];

  /** Parsed version. */
  const version = raw.match(/(\d\.){2}\d/gi)?.at(0) || null;
  const preid = raw.match(/(?<=-)\w+(?=\.\d)/gi)?.at(0);

  /** Preid not found. */
  if (preid === undefined) {
    return {
      version,
    };
  }

  /** Not allowed preid. */
  if (!(allPreids as string[]).includes(preid)) {
    return {
      version,
    };
  }

  return {
    version,
    preid: preid as Preid,
  };
};
