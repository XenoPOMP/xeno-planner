'use client';

import cn from 'classnames';
import { type FC } from 'react';
import TextOverflow from 'react-text-overflow';

import CircleLoader from '@/src/components/ui/CircleLoader';
import { useProfile } from '@/src/hooks/useProfile.ts';

import styles from './Profile.module.scss';
import type { ProfileProps } from './Profile.props';

const Profile: FC<ProfileProps> = () => {
  const { data, isLoading } = useProfile();

  return isLoading ? (
    <div
      aria-hidden
      className={cn('h-[2.8em] flex-center')}
    >
      <CircleLoader />
    </div>
  ) : data?.user ? (
    <article className={cn(styles.profile)}>
      <section className={cn(styles.name)}>
        <strong>{data.user.name || 'Аноним'}</strong>
        <p>
          <TextOverflow text={data.user.email} />
        </p>
      </section>

      <section className={cn(styles.avatar)}></section>
    </article>
  ) : (
    <></>
  );
};

export default Profile;
