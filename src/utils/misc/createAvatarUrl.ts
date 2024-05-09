import type dicebearVariants from '@dicebear/collection';
import type { StyleOptions } from '@dicebear/core';

import type { DicebearVariant } from '@/src/types';

type Invariant<Variant extends DicebearVariant> =
  (typeof dicebearVariants)[Variant];

/**
 * Creates url to Dicebear API for avatar.
 * @param variant
 * @param options
 */
export const createAvatarUrl = <Variant extends DicebearVariant>(
  variant: Variant,
  options?: Partial<Record<keyof StyleOptions<Invariant<Variant>>, string>>,
): string => {
  const avatarParams = new URLSearchParams({
    ...options,
  });

  return `https://api.dicebear.com/8.x/${variant}/png?${avatarParams.toString()}`;
};
