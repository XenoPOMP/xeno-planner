import cn from 'classnames';
import { MailCheck } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { type FC } from 'react';

import Button from '@/src/components/ui/Button';
import HtmlHeading from '@/src/components/ui/Heading';
import { NO_INDEX_PAGE } from '@/src/constants/seo.constants.ts';
import { generateOpenGraph } from '@/src/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Аккаунт подтвержден';

  return {
    title,
    openGraph: generateOpenGraph({
      title,
    }),
    ...NO_INDEX_PAGE,
  };
}

const VerificationAcceptedPage: FC<{}> = () => {
  return (
    <>
      <MailCheck size={'4em'} />

      <HtmlHeading
        as={'h2'}
        className={cn('text-center')}
      >
        Вы успешно подтвердили почту!
      </HtmlHeading>

      <Link
        href={'/auth/login'}
        className={cn('flex w-full')}
      >
        <Button className={cn('w-full')}>Перейти к логину</Button>
      </Link>
    </>
  );
};

export default VerificationAcceptedPage;
