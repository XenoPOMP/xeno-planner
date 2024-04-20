import type { Metadata } from 'next';
import { type ReactNode } from 'react';
import { Toaster } from 'sonner';

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
    description: 'Generated by create next app',
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
      title: 'Main page',
      description: 'This is a main page',
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

            <Toaster
              toastOptions={{
                className:
                  'bg-secondary-bg text-primary-font border-secondary-border',
                style: {
                  fontFamily: 'inherit',
                },
              }}
            />
          </>
        </Providers>
      </body>
    </html>
  );
}
