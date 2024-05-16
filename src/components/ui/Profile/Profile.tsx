'use client';

import { AxiosError } from 'axios';
import cn from 'classnames';
import { LogIn } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';
import TextOverflow from 'react-text-overflow';

import CircleLoader from '@/src/components/ui/CircleLoader';
import WarningMessage from '@/src/components/ui/WarningMessage';
import { useProfile } from '@/src/hooks/useProfile.ts';
import { AUTH_PAGES, DASHBOARD_PAGES } from '@/src/types/routes.ts';
import { createAvatarUrl } from '@/src/utils/misc';

import styles from './Profile.module.scss';
import type { ProfileProps } from './Profile.props';

const Profile: FC<ProfileProps> = () => {
  const { data, isLoading, isError, error } = useProfile();

  const avatarUrl = createAvatarUrl('identicon', {
    seed: data?.user.name || '',
  });

  return isLoading ? (
    <section
      aria-hidden
      className={cn(styles.avatar, 'flex-center')}
    >
      <CircleLoader />
    </section>
  ) : data?.user ? (
    <Link href={`${DASHBOARD_PAGES.SETTINGS}#edit-account`}>
      <article className={cn(styles.profile)}>
        <section className={cn(styles.name)}>
          <strong>{data.user.name || 'Аноним'}</strong>
          <p>
            <TextOverflow text={data.user.email} />
          </p>
        </section>

        <section className={cn(styles.avatar, 'flex-center')}>
          <Image
            src={avatarUrl}
            alt={'Ваш аватар'}
            width={100}
            height={100}
          />
        </section>
      </article>
    </Link>
  ) : isError &&
    error instanceof AxiosError &&
    error.response?.status === 401 ? (
    <Link href={AUTH_PAGES.LOGIN}>
      <section
        className={cn(
          styles.avatar,
          'flex-center !w-fit px-[.5em] gap-[.35em] select-none',
        )}
        style={{
          aspectRatio: 'unset',
        }}
      >
        Войти <LogIn size={'1em'} />
      </section>
    </Link>
  ) : (
    <section className={cn(styles.avatar, 'flex-center')}>
      <WarningMessage />
    </section>
  );
};

export default Profile;
