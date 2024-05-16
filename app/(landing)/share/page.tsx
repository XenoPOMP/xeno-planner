import type { WithSearchParams } from '@xenopomp/advanced-types';
import { type FC, useCallback } from 'react';

import { AppConstants } from '@/app/app.constants.ts';
import LandingLayout from '@/src/components/layout/landing/LandingLayout';

const SharePage: FC<WithSearchParams<{}, 'route'>> = ({ searchParams }) => {
  const CANONICAL = process.env.CANONICAL_URL;

  const getQrUrl = useCallback(() => {
    /** Route is not provided. */
    if (!searchParams.route) {
      return CANONICAL;
    }

    /** Concat safe URL for sharing. */
    return new URL(
      searchParams.route,
      CANONICAL ?? AppConstants.defaultCanonical,
    ).toString();
  }, [CANONICAL, searchParams.route]);

  return (
    <LandingLayout
      wrapper={{
        className: 'flex-center',
      }}
    >
      Share page for route [{getQrUrl()}]
    </LandingLayout>
  );
};

export default SharePage;
