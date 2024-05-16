import { type FC } from 'react';

import { useTypograf } from '@/src/hooks/useTypograf.ts';

import type { TypografedTextProps } from './TypografedText.props';

/**
 * Formats string node using Typograf.
 *
 * @param children
 * @constructor
 *
 * @example
 * <TypografedText>
 *   "This text should be formatted" - XenoPOMP
 * </TypografedText>
 *
 * // «This text should be formatted» — XenoPOMP
 */
const TypografedText: FC<TypografedTextProps & { children?: string }> = ({
  children,
}) => {
  const format = useTypograf();

  /** Formats children only if children props was provided. */
  return <>{children && format(children)}</>;
};

export default TypografedText;
