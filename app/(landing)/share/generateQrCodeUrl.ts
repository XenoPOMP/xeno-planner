import { AppConstants } from '@/app/app.constants.ts';

/**
 * Generates url for QR code sharing page.
 * @param canonical
 * @param route
 */
export const generateQrCodeUrl = (
  canonical?: string,
  route?: string,
): string => {
  /** Route is not provided. */
  if (!route) {
    return canonical ?? AppConstants.defaultCanonical;
  }

  /** Concat safe URL for sharing. */
  return new URL(route, canonical ?? AppConstants.defaultCanonical).toString();
};
