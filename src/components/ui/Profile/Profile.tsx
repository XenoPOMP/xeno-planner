'use client';

import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';
import TextOverflow from 'react-text-overflow';

import CircleLoader from '@/src/components/ui/CircleLoader';
import { useProfile } from '@/src/hooks/useProfile.ts';
import { DASHBOARD_PAGES } from '@/src/types/routes.ts';

import styles from './Profile.module.scss';
import type { ProfileProps } from './Profile.props';

const Profile: FC<ProfileProps> = () => {
  const { data, isLoading } = useProfile();

  const avatarParams = new URLSearchParams({
    seed: data?.user.name || '',
  });

  const avatarUrl = `https://api.dicebear.com/8.x/identicon/png?${avatarParams.toString()}`;

  return isLoading ? (
    <div
      aria-hidden
      className={cn('h-[2.8em] flex-center')}
    >
      <CircleLoader />
    </div>
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
  ) : (
    <></>
  );
};

export default Profile;
