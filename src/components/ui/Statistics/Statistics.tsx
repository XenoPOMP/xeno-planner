'use client';

import { useQuery } from '@tanstack/react-query';
import cn from 'classnames';
import { type FC } from 'react';

import { UserService } from '@/src/services/user.service.ts';

import styles from './Statistics.module.scss';
import type { StatisticsProps } from './Statistics.props';

const Statistics: FC<StatisticsProps> = () => {
  const { data } = useQuery({
    queryKey: ['user', 'statistics'],
    queryFn: async () => UserService.getProfile(),
  });

  return (
    <article className={cn(styles.grid)}>
      {data &&
        data.statistics.map(({ label, value }, index) => (
          <div
            key={`[${index}]: ${label}`}
            className={cn('whitespace-break-spaces', styles.block)}
          >
            {label}: {value}
          </div>
        ))}
    </article>
  );
};

export default Statistics;
