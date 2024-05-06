'use client';

import cn from 'classnames';
import { type FC } from 'react';

import CircleLoader from '@/src/components/ui/CircleLoader';
import WarningMessage from '@/src/components/ui/WarningMessage';
import { useProfile } from '@/src/hooks/useProfile.ts';

import styles from './Statistics.module.scss';
import type { StatisticsProps } from './Statistics.props';

const Statistics: FC<StatisticsProps> = () => {
  const { data, isLoading } = useProfile();

  return (
    <article className={cn(styles.grid)}>
      {isLoading ? (
        <div className={cn('flex-center col-span-full')}>
          <CircleLoader />
        </div>
      ) : data?.statistics.length ? (
        data.statistics.map(({ label, value }, index) => (
          <div
            key={`[${index}]: ${label}`}
            className={cn('whitespace-break-spaces', styles.block)}
          >
            <strong>{value}</strong>

            <span>{label}</span>
          </div>
        ))
      ) : (
        <div className={cn('flex-center col-span-full')}>
          <WarningMessage>Статистика не найдена!</WarningMessage>
        </div>
      )}
    </article>
  );
};

export default Statistics;
