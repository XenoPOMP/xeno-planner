import cn from 'classnames';
import { ShieldOff } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { type FC } from 'react';

import Button from '@/src/components/ui/Button';
import HtmlHeading from '@/src/components/ui/Heading';
import { NO_INDEX_PAGE } from '@/src/constants/seo.constants.ts';
import { generateOpenGraph } from '@/src/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Письмо недействительно';

  return {
    title,
    openGraph: generateOpenGraph({
      title,
    }),
    ...NO_INDEX_PAGE,
  };
}

const VerificationExpiredPage: FC<{}> = () => {
  return (
    <>
      <ShieldOff size={'4em'} />

      <HtmlHeading
        as={'h2'}
        className={cn('text-center')}
      >
        Письмо не действительно!
      </HtmlHeading>

      <Link
        href={'/auth/register'}
        className={cn('flex w-full')}
      >
        <Button className={cn('w-full')}>Повторить регистрацию</Button>
      </Link>
    </>
  );
};

export default VerificationExpiredPage;
