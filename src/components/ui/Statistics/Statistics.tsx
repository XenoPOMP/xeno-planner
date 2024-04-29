'use client';

import { useQuery } from '@tanstack/react-query';
import cn from 'classnames';
import { type FC } from 'react';

import CircleLoader from '@/src/components/ui/CircleLoader';
import { UserService } from '@/src/services/user.service.ts';

import styles from './Statistics.module.scss';
import type { StatisticsProps } from './Statistics.props';

const Statistics: FC<StatisticsProps> = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['user', 'statistics'],
    queryFn: async () => UserService.getProfile(),
  });

  return (
    <article className={cn(styles.grid)}>
      <div className={cn('flex-center col-span-full')}>
        <CircleLoader />
      </div>

      {isLoading ? (
        <>Loading...</>
      ) : (
        data?.statistics.map(({ label, value }, index) => (
          <div
            key={`[${index}]: ${label}`}
            className={cn('whitespace-break-spaces', styles.block)}
          >
            <strong>{value}</strong>

            <span>{label}</span>
          </div>
        ))
      )}
    </article>
  );
};

export default Statistics;
