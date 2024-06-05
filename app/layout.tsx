import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import Metrika from 'next-metrika';
import { type ReactNode } from 'react';

import CustomToaster from '@/src/components/layout/CustomToaster';
import ProdPortal from '@/src/components/layout/ProdPortal';
import Providers from '@/src/components/layout/Providers/Providers';
import { MainFont } from '@/src/fonts';
import { useEnv } from '@/src/hooks/use-env';
import { generateOpenGraph, generateStaticMetadata } from '@/src/utils/seo';

import { AppConstants } from './app.constants';
import './globals.scss';

export async function generateMetadata(): Promise<Metadata> {
  const env = useEnv();
  const CANONICAL_URL =
    env.get('CANONICAL_URL') || AppConstants.defaultCanonical;

  return generateStaticMetadata({
    metadataBase: new URL(CANONICAL_URL),
    title: {
      template: `%s | ${AppConstants.appName}`,
      default: AppConstants.appName,
    },
    // description: AppConstants.desc,
    appleWebApp: {
      title: AppConstants.appName,
      capable: false,
    },
    alternates: {
      canonical: CANONICAL_URL,
      languages: {
        // ru: CANONICAL_URL,

        // Should be changed to another one, if i18n has been implemented
        'x-default': CANONICAL_URL,
      },
    },
    openGraph: generateOpenGraph({
      title: AppConstants.appName,
      // description: AppConstants.desc,
    }),
  });
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ru'>
      <body className={MainFont.className}>
        <Providers>
          <>
            {children}

            <CustomToaster />

            <ProdPortal target={'prod'}>
              <SpeedInsights />

              {process.env.METRIKA_ID !== undefined && (
                <Metrika id={+process.env.METRIKA_ID} />
              )}
            </ProdPortal>
          </>
        </Providers>
      </body>
    </html>
  );
}
