import type { PropsWith } from '@xenopomp/advanced-types';
import { type FC } from 'react';

import type { ProdPortalProps } from './ProdPortal.props';

/**
 * Allows to render children only on certain
 * production mode.
 *
 * @param children
 * @param target
 * @constructor
 */
const ProdPortal: FC<PropsWith<'children', ProdPortalProps>> = ({
  children,
  target,
}) => {
  /** Production mode from .env file */
  const currentMode = process.env.NEXT_PUBLIC_PRODUCTION_MODE;

  /** If target mode matches current one, render children. */
  return <>{currentMode === target ? children : undefined}</>;
};

export default ProdPortal;
