import type { WithSearchParams } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { QRCodeSVG } from 'qrcode.react';
import { type FC, useCallback } from 'react';

import { AppConstants } from '@/app/app.constants.ts';
import LandingLayout from '@/src/components/layout/landing/LandingLayout';

export const revalidate = 0;

const SharePage: FC<WithSearchParams<{}, 'route'>> = ({ searchParams }) => {
  const CANONICAL = process.env.CANONICAL_URL;

  const getQrUrl = useCallback((): string => {
    /** Route is not provided. */
    if (!searchParams.route) {
      return CANONICAL ?? AppConstants.defaultCanonical;
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
      <article className={cn('bg-qr-bg p-[24px] rounded-[20px]')}>
        <QRCodeSVG
          size={298 - 2 * 24}
          value={getQrUrl()}
          className={cn(
            '[&>path:first-of-type]:fill-qr-bg [&>path:last-of-type]:fill-qr-fg',
          )}
        />
      </article>
    </LandingLayout>
  );
};

export default SharePage;
